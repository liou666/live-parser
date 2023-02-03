import { logger } from './utils'
import { incoming, initWsConnect, parseLiveUrl } from './core'

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

  const ws = await initWsConnect({ ttwid, liveRoomId })

  ws.binaryType = 'arraybuffer'

  ws.onopen = () => logger.info('connected')

  ws.onclose = () => logger.warn('disconnected')

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
