import {
  ChatMessage,
  CommonTextMessage,
  GiftMessage,
  LikeMessage,
  MatchAgainstScoreMessage,
  MemberMessage,
  RoomUserSeqMessage,
  SocialMessage,
  UpdateFanTicketMessage,
} from './proto'

export function unPackwebcastChatMessage(data: Buffer) {
  const __chatmessage__ = ChatMessage.decode(data) as any
  console.log(__chatmessage__.content)
  return data
}

export function unPackWebcastCommonTextMessage(data: Buffer) {
  const __commonTextMessage__ = CommonTextMessage.decode(data) as any
  console.log(__commonTextMessage__)
  return data
}

export function unPackWebcastUpdateFanTicketMessage(data: Buffer) {
  const __updateFanTicketMessage__ = UpdateFanTicketMessage.decode(data) as any
  console.log(__updateFanTicketMessage__)
  return data
}

export function unPackWebcastRoomUserSeqMessage(data: Buffer) {
  const __roomUserSeqMessage__ = RoomUserSeqMessage.decode(data) as any
  console.log(__roomUserSeqMessage__)
  return data
}

export function unPackWebcastSocialMessage(data: Buffer) {
  const __socialMessage__ = SocialMessage.decode(data) as any
  console.log(__socialMessage__)
  return data
}

// 礼物消息
export function unPackWebcastGiftMessage(data: Buffer) {
  const __giftMessage__ = GiftMessage.decode(data) as any
  console.log(__giftMessage__.content)
  return data
}

// xx成员进入直播间消息
export function unPackWebcastMemberMessage(data: Buffer) {
  const __memberMessage__ = MemberMessage.decode(data) as any
  console.log(__memberMessage__)

  return data
}

// 点赞
export function unPackWebcastLikeMessage(data: Buffer) {
  const __likeMessage__ = LikeMessage.decode(data) as any
  console.log(__likeMessage__)

  return data
}

// 解析WebcastMatchAgainstScoreMessage消息包体
export function unPackMatchAgainstScoreMessage(data: Buffer) {
  const __matchAgainstScoreMessage__ = MatchAgainstScoreMessage.decode(data) as any
  console.log(__matchAgainstScoreMessage__)
  return data
}

