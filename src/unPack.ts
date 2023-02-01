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
import { logger } from './utils'

export function unPackwebcastChatMessage(data: Buffer) {
  const __chatmessage__ = ChatMessage.decode(data) as any
  const { user: { nickName, gender }, content } = __chatmessage__
  logger.base(`【📨弹幕】 ${nickName}: ${content}`.green)
  return data
}

export function unPackWebcastCommonTextMessage(data: Buffer) {
  const __commonTextMessage__ = CommonTextMessage.decode(data) as any
  logger.base(__commonTextMessage__)
  return data
}

// 实时粉丝数
export function unPackWebcastUpdateFanTicketMessage(data: Buffer) {
  const __updateFanTicketMessage__ = UpdateFanTicketMessage.decode(data) as any
  logger.base(__updateFanTicketMessage__)
  return data
}

// 直播间的一些基本信息
export function unPackWebcastRoomUserSeqMessage(data: Buffer) {
  const __roomUserSeqMessage__ = RoomUserSeqMessage.decode(data) as any
  logger.base(__roomUserSeqMessage__)
  return data
}

// 关注消息
export function unPackWebcastSocialMessage(data: Buffer) {
  const __socialMessage__ = SocialMessage.decode(data) as any
  const { user: { nickName, gender } } = __socialMessage__
  logger.base(`【➕关注】${nickName} 关注了主播`.red)
  return data
}
// 礼物消息
export function unPackWebcastGiftMessage(data: Buffer) {
  const __giftMessage__ = GiftMessage.decode(data) as any
  const { common: { describe }, user: { nickName } } = __giftMessage__
  logger.base(`【🎁礼物】${describe}`.yellow)
  return data
}
// xx成员进入直播间消息
export function unPackWebcastMemberMessage(data: Buffer) {
  const __memberMessage__ = MemberMessage.decode(data) as any
  const { user: { nickName, gender }, memberCount: { low } } = __memberMessage__
  logger.base(`【🏠进房】${nickName} 进入了直播间，当前人数：${String(low + 1)}`)
  return data
}
// 点赞
export function unPackWebcastLikeMessage(data: Buffer) {
  const __likeMessage__ = LikeMessage.decode(data) as any
  const { user: { nickName, gender }, count, total } = __likeMessage__
  logger.base(`【👍点赞】${nickName} 点赞了${String(count.low)}次，直播间点赞总数：${String(total.low + count.low)}`)
  return data
}

// 解析WebcastMatchAgainstScoreMessage消息包体
export function unPackMatchAgainstScoreMessage(data: Buffer) {
  const __matchAgainstScoreMessage__ = MatchAgainstScoreMessage.decode(data) as any
  logger.base(__matchAgainstScoreMessage__)
  return data
}

