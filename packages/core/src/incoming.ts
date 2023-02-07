import type WebSocket from 'ws'

import { tools } from '../utils'
import {
  ChatMessage, CommonTextMessage,
  GiftMessage,
  LikeMessage,
  MatchAgainstScoreMessage,
  MemberMessage,
  PushFrame,
  Response,
  RoomUserSeqMessage,
  SocialMessage,
  UpdateFanTicketMessage,
} from './proto'
import type { DY } from './proto/dy'

export interface Handles{
  handleChatMessage?: (data: DY.ChatMessage) => DY.ChatMessage
  handleCommonTextMessage?: (data: DY.CommonTextMessage) => DY.CommonTextMessage
  handleGiftMessage?: (data: DY.GiftMessage) => DY.GiftMessage
  handleLikeMessage?: (data: DY.LikeMessage) => DY.LikeMessage
  handleMatchAgainstScoreMessage?: (data: DY.MatchAgainstScoreMessage) => DY.MatchAgainstScoreMessage
  handleMemberMessage?: (data: DY.MemberMessage) => DY.MemberMessage
  handleRoomUserSeqMessage?: (data: DY.RoomUserSeqMessage) => DY.RoomUserSeqMessage
  handleSocialMessage?: (data: DY.SocialMessage) => DY.SocialMessage
  handleUpdateFanTicketMessage?: (data: DY.UpdateFanTicketMessage) => DY.UpdateFanTicketMessage
  handleUnknowMessage?: (method: string, data: Buffer) => void
}

export function heartbeat(ws: WebSocket) {
  const obj = PushFrame.create({ payloadType: 'hb' })
  ws.ping(PushFrame.encode(obj).finish())
}

export async function incoming(data: any, ws: WebSocket, {
  handleChatMessage,
  handleCommonTextMessage,
  handleGiftMessage,
  handleLikeMessage,
  handleMatchAgainstScoreMessage,
  handleMemberMessage,
  handleRoomUserSeqMessage,
  handleSocialMessage,
  handleUpdateFanTicketMessage,
  handleUnknowMessage,
}: Handles) {
  const buf = data.data
  const pushframe = PushFrame.decode(new Uint8Array(buf)) as unknown as DY.PushFrame

  const { logId, payload } = pushframe

  const payloadBuffer = await tools.doUnzip(Buffer.from(payload))
  const response = Response.decode(Buffer.from(payloadBuffer)) as unknown as DY.Response

  const { messagesList, needAck, internalExt } = response

  if (needAck) {
    const obj = PushFrame.create({ logId, payload: internalExt })
    ws.send(PushFrame.encode(obj).finish())
  }

  for (const msg of messagesList) {
    try {
      const data = Buffer.from(msg.payload, 'base64')
      switch (msg.method) {
        case 'WebcastChatMessage':
          if (handleChatMessage) {
            handleChatMessage(
              tools.unPackData<DY.ChatMessage>(data, ChatMessage),
            )
          }
          break
        case 'WebcastMatchAgainstScoreMessage':
          if (handleMatchAgainstScoreMessage) {
            handleMatchAgainstScoreMessage(
              tools.unPackData<DY.MatchAgainstScoreMessage>(data, MatchAgainstScoreMessage),
            )
          }
          break
        case 'WebcastLikeMessage':
          if (handleLikeMessage) {
            handleLikeMessage(
              tools.unPackData<DY.LikeMessage>(data, LikeMessage),
            )
          }
          break
        case 'WebcastMemberMessage':
          if (handleMemberMessage) {
            handleMemberMessage(
              tools.unPackData<DY.MemberMessage>(data, MemberMessage),
            )
          }

          break
        case 'WebcastGiftMessage':
          if (handleGiftMessage) {
            handleGiftMessage(
              tools.unPackData<DY.GiftMessage>(data, GiftMessage),
            )
          }
          break
        case 'WebcastSocialMessage':
          if (handleSocialMessage) {
            handleSocialMessage(
              tools.unPackData<DY.SocialMessage>(data, SocialMessage),
            )
          }
          break
        case 'WebcastRoomUserSeqMessage':
          if (handleRoomUserSeqMessage) {
            handleRoomUserSeqMessage(
              tools.unPackData<DY.RoomUserSeqMessage>(data, RoomUserSeqMessage),
            )
          }
          break
        case 'WebcastUpdateFanTicketMessage':
          if (handleUpdateFanTicketMessage) {
            handleUpdateFanTicketMessage(
              tools.unPackData<DY.UpdateFanTicketMessage>(data, UpdateFanTicketMessage),
            )
          }
          break
        case 'WebcastCommonTextMessage':
          if (handleCommonTextMessage) {
            handleCommonTextMessage(
              tools.unPackData<DY.CommonTextMessage>(data, CommonTextMessage),
            )
          }
          break
        default:
          if (handleUnknowMessage)
            handleUnknowMessage(msg.method, data)
          break
      }
    }
    catch (error) {
      // console.error(error)
    }
  }
}

