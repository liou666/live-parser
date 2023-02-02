import path from 'path'
import protobuf from 'protobufjs'
import { getCurrentPath } from '@/utils/tools'

const { __dirname__ } = getCurrentPath(import.meta.url)

// 获取proto路径
const proto = path.resolve(__dirname__, 'dy.proto')

export const root = await protobuf.load(proto)
export const PushFrame = root.lookupType('douyin.PushFrame')
export const Response = root.lookupType('douyin.Response')
export const ChatMessage = root.lookupType('douyin.ChatMessage')
export const CommonTextMessage = root.lookupType('douyin.CommonTextMessage')
export const RoomUserSeqMessage = root.lookupType('douyin.RoomUserSeqMessage')
export const SocialMessage = root.lookupType('douyin.SocialMessage')
export const MatchAgainstScoreMessage = root.lookupType('douyin.MatchAgainstScoreMessage')
export const MemberMessage = root.lookupType('douyin.MemberMessage')
export const GiftMessage = root.lookupType('douyin.GiftMessage')
export const LikeMessage = root.lookupType('douyin.LikeMessage')
export const UpdateFanTicketMessage = root.lookupType('douyin.UpdateFanTicketMessage')
