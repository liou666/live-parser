import { logger } from './utils'

export function handleChatMessage(data: DY.ChatMessage) {
  const { user: { nickName, gender }, content } = data
  logger.base(`【📨弹幕】 ${nickName}: ${content}`.green)
  return data
}

export function handleCommonTextMessage(data: DY.CommonTextMessage) {
  return data
}

// 实时粉丝数
export function handleUpdateFanTicketMessage(data: DY.UpdateFanTicketMessage) {
  return data
}

// 直播间的一些基本信息
export function handleRoomUserSeqMessage(data: DY.RoomUserSeqMessage) {
  return data
}

// 关注消息
export function handleSocialMessage(data: DY.SocialMessage) {
  const { user: { nickName, gender } } = data
  logger.base(`【➕关注】${nickName} 关注了主播`.red)
  return data
}
// 礼物消息
export function handleGiftMessage(data: DY.GiftMessage) {
  const { common: { describe }, user: { nickName } } = data
  logger.base(`【🎁礼物】${describe}`.yellow)
  return data
}
// xx成员进入直播间消息
export function handleMemberMessage(data: DY.MemberMessage) {
  const { user: { nickName, gender }, memberCount: { low } } = data
  logger.base(`【🏠进房】${nickName} 进入了直播间，当前人数：${String(low + 1)}`)
  return data
}
// 点赞
export function handleLikeMessage(data: DY.LikeMessage) {
  const { user: { nickName, gender }, count, total } = data
  logger.base(`【👍点赞】${nickName} 点赞了${String(count.low)}次，直播间点赞总数：${String(total.low + count.low)}`)
  return data
}

// 解析WebcastMatchAgainstScoreMessage消息包体
export function handleMatchAgainstScoreMessage(data: DY.MatchAgainstScoreMessage) {
  return data
}

