import { incoming, initWsConnect, parseLiveUrl } from '@liou666/live-parser-core'

import { logger } from './utils'

import {
  handleChatMessage,
  handleCommonTextMessage,
  handleGiftMessage,
  handleLikeMessage,
  handleMatchAgainstScoreMessage,
  handleMemberMessage,
  handleRoomUserSeqMessage,
  handleSocialMessage,
  handleUpdateFanTicketMessage,
} from './handler'

const startWebsocket = async (liveId: string) => {
  const { ttwid, liveRoomId } = await parseLiveUrl(liveId)

  //  每10秒发送一次心跳，保持服务器持续连接
  let timer: NodeJS.Timer

  const ws = await initWsConnect({ ttwid, liveRoomId })

  ws.binaryType = 'arraybuffer'

  ws.onopen = () => {
    timer = setInterval(() => {
      // heartbeat(ws)
    }, 10000)
    logger.info('connected')
  }

  ws.onclose = () => {
    clearInterval(timer)
    logger.warn('disconnected')
  }

  ws.onerror = err => logger.error(String(err))

  ws.onmessage = data => incoming(data, ws, {
    handleChatMessage,
    handleCommonTextMessage,
    handleGiftMessage,
    handleLikeMessage,
    handleMatchAgainstScoreMessage,
    handleMemberMessage,
    handleRoomUserSeqMessage,
    handleSocialMessage,
    handleUpdateFanTicketMessage,
  })
}

export default startWebsocket
