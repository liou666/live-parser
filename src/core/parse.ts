import axios from 'axios'

export interface ParseResult{
  fulldata: any
  ttwid: string
  liveRoomId: string
  liveRoomTitle: string
}

const parseLiveUrl = async (liveId: string): Promise<ParseResult> => {
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

export default parseLiveUrl
