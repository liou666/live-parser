import { heartbeat, incoming, initWsConnect, parseLiveUrl } from '@liou666/live-parser-core'
import { logger } from 'utils'
import type { Handles } from './incoming'

const startWebsocket = async (liveId: string, handlers: Handles) => {
  const { ttwid, liveRoomId } = await parseLiveUrl(liveId)

  //  每8秒发送一次心跳，保持服务器持续连接
  let timer: NodeJS.Timer

  const ws = await initWsConnect({ ttwid, liveRoomId })

  ws.binaryType = 'arraybuffer'

  ws.onopen = () => {
    timer = setInterval(() => {
      heartbeat(ws)
    }, 8000)
    // logger.info('connected')
  }

  ws.onclose = () => {
    clearInterval(timer)
    // logger.warn('disconnected')
  }

  ws.onerror = err => logger.error(String(err))

  ws.onmessage = data => incoming(data, ws, handlers)

  return ws
}

export default startWebsocket
