import startWebsocket from '@liou666/live-parser-core'

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

const run = (liveID: string) => {
  startWebsocket(liveID, {
    handleChatMessage,
    handleCommonTextMessage,
    handleGiftMessage,
    handleLikeMessage,
    handleMatchAgainstScoreMessage,
    handleMemberMessage,
    handleRoomUserSeqMessage,
    handleSocialMessage,
    handleUpdateFanTicketMessage,
  },
  )
}

export default run
