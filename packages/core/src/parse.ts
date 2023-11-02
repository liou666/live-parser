import axios from 'axios'
import * as cheerio from 'cheerio'
import parseJson from 'parse-json'
export interface ParseResult{
  fulldata: any
  ttwid: string
  liveRoomId: string
  liveRoomTitle: string
  userId: string
  nickName: string
  onlineUserCount: string
  status: string
  type?: string
  subType?: string
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

  const $ = cheerio.load(res.data)
  const text = $('script')[$('script').length - 2].children[0] as any
  const target = text.data.slice(19, -1)
  const fulldata = parseJson((parseJson(target)[1] as any).slice(2))[3] as any

  const roomStore = fulldata.state.roomStore
  const userStore = fulldata.state.userStore

  const liveRoomId = roomStore.roomInfo.roomId
  const liveRoomTitle = roomStore.roomInfo.room.title
  const userId = userStore.odin.user_id
  const nickName = roomStore.roomInfo.anchor.nickname
  const onlineUserCount = roomStore.roomInfo.room.room_view_stats?.display_value
  const status = roomStore.roomInfo.room.status
  const type = roomStore.roomInfo?.partition_road_map?.partition?.title
  const subType = roomStore.roomInfo?.partition_road_map?.sub_partition?.partition?.title
  return {
    fulldata,
    ttwid,
    liveRoomId,
    userId,
    status,
    nickName,
    onlineUserCount,
    liveRoomTitle,
    type,
    subType,
  }
}

