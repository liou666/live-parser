import type WebSocket from 'ws'
import axios from 'axios'

import { tools } from './utils'
import { PushFrame, Response } from './proto'
import {
  unPackMatchAgainstScoreMessage,
  unPackWebcastCommonTextMessage,
  unPackWebcastGiftMessage,
  unPackWebcastLikeMessage,
  unPackWebcastMemberMessage,
  unPackWebcastRoomUserSeqMessage,
  unPackWebcastSocialMessage,
  unPackWebcastUpdateFanTicketMessage,
  unPackwebcastChatMessage,
} from './unPack'

export interface ParseResult{
  fulldata: any
  ttwid: string
  liveRoomId: string
  liveRoomTitle: string
}

export async function incoming(data: any, ws: WebSocket) {
  const buf = data.data
  const __pushframe__ = PushFrame.decode(new Uint8Array(buf)) as any

  const { logId, payload } = __pushframe__

  const payloadBuffer = await tools.doUnzip(Buffer.from(payload))
  const __response__ = Response.decode(Buffer.from(payloadBuffer)) as any

  const { messagesList, needAck, internalExt } = __response__

  if (needAck) {
    const obj = PushFrame.create({ logId, payload: internalExt })
    ws.send(PushFrame.encode(obj).finish())
  }

  for (const msg of messagesList) {
    try {
      const data = Buffer.from(msg.payload, 'base64')
      switch (msg.method) {
        case 'WebcastChatMessage':
          unPackwebcastChatMessage(data)
          break
        case 'WebcastMatchAgainstScoreMessage':
          // unPackMatchAgainstScoreMessage(data)
          break
        case 'WebcastLikeMessage':
          unPackWebcastLikeMessage(data)
          break
        case 'WebcastMemberMessage':
          unPackWebcastMemberMessage(data)
          break
        case 'WebcastGiftMessage':
          unPackWebcastGiftMessage(data)
          break
        case 'WebcastSocialMessage':
          unPackWebcastSocialMessage(data)
          break
        case 'WebcastRoomUserSeqMessage':
          // unPackWebcastRoomUserSeqMessage(data)
          break
        case 'WebcastUpdateFanTicketMessage':
          // unPackWebcastUpdateFanTicketMessage(data)
          break
        case 'WebcastCommonTextMessage':
          // unPackWebcastCommonTextMessage(data)
          break
        default:
          // logger.info(msg.method)
          break
      }
    }
    catch (error) {
      // console.error(error)
    }
  }
}

export const parseLiveUrl = async (liveId: string): Promise<ParseResult> => {
  const liveUrl = `https://live.douyin.com/${liveId}`
  const headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
    'cookie': '__ac_nonce=0638733a400869171be51',
  }
  const res = await axios.get(liveUrl, { headers })

  const cookie = res.headers['set-cookie']![0]
  const ttwid = [...cookie.matchAll(/ttwid=(.+?);/g)][0][1]

  const basedata = [...res.data.matchAll(/script id=\"RENDER_DATA\" type=\"application\/json\"\>(.*?)\<\/script\>/g)][0][1]
  const fulldata = JSON.parse(decodeURIComponent(basedata))

  const roomStore = fulldata.app.initialState.roomStore
  const liveRoomId = roomStore.roomInfo.roomId
  const liveRoomTitle = roomStore.roomInfo.room.title

  return {
    fulldata,
    ttwid,
    liveRoomId,
    liveRoomTitle,
  }
}
