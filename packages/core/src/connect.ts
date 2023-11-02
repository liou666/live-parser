import WebSocket from 'ws'
import type { ParseResult } from './parse'

export interface WsEents{
  onopen: ((event: WebSocket.Event) => void) | null
  onerror: ((event: WebSocket.ErrorEvent) => void) | null
  onclose: ((event: WebSocket.CloseEvent) => void) | null
  onmessage: ((event: WebSocket.MessageEvent) => void) | null
}

export const initWsConnect = async (info: Pick<ParseResult, 'liveRoomId' | 'ttwid'>, events?: WsEents) => {
  const { liveRoomId, ttwid } = info
  // todo signature抖音目前只校验是否为空 后期可能会校验具体值 届时需要逆向抖音加密规则
  // const url = `wss://webcast3-ws-web-hl.douyin.com/webcast/im/push/v2/?app_name=douyin_web&version_code=180800&webcast_sdk_version=1.3.0&update_version_code=1.3.0&compress=gzip&internal_ext=internal_src:dim|wss_push_room_id:${liveRoomId}|wss_push_did:${liveRoomId}|dim_log_id:2022122306295965382308B5DCD45D07F8|fetch_time:${+new Date()}|seq:1|wss_info:0-1671748199438-0-0|wrds_kvs:WebcastRoomRankMessage-1671748147622091132_WebcastRoomStatsMessage-1671748195537766499&cursor=t-1671748199438_r-1_d-1_u-1_h-1&host=https://live.douyin.com&aid=6383&live_id=1&did_rule=3&debug=false&endpoint=live_pc&support_wrds=1&im_path=/webcast/im/fetch/&device_platform=web&cookie_enabled=true&screen_width=1440&screen_height=900&browser_language=zh&browser_platform=MacIntel&browser_name=Mozilla&browser_version=5.0%20(Macintosh;%20Intel%20Mac%20OS%20X%2010_15_7)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/108.0.0.0%20Safari/537.36&browser_online=true&tz_name=Asia/Shanghai&identity=audience&room_id=${liveRoomId}&heartbeatDuration=0&signature=00000000`
  const url = `wss://webcast3-ws-web-hl.douyin.com/webcast/im/push/v2/?app_name=douyin_web&version_code=180800&webcast_sdk_version=1.3.0&update_version_code=1.3.0&compress=gzip&internal_ext=internal_src:dim|wss_push_room_id:${liveRoomId}|wss_push_did:${liveRoomId}|dim_log_id:20230521093022204E5B327EF20D5CDFC6|fetch_time:${+new Date()}|seq:1|wss_info:0-1671748199438-0-0|wrds_kvs:WebcastRoomRankMessage-1671748147622091132_WebcastRoomStatsMessage-1684632616357153318&cursor=t-1684632622323_r-1_d-1_u-1_h-1&host=https://live.douyin.com&aid=6383&live_id=1&did_rule=3&debug=false&endpoint=live_pc&support_wrds=1&im_path=/webcast/im/fetch/&device_platform=web&cookie_enabled=true&screen_width=1440&screen_height=900&browser_language=zh&browser_platform=MacIntel&browser_name=Mozilla&browser_version=5.0%20(Macintosh;%20Intel%20Mac%20OS%20X%2010_15_7)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/108.0.0.0%20Safari/537.36&browser_online=true&tz_name=Asia/Shanghai&identity=audience&room_id=${liveRoomId}&heartbeatDuration=0&signature=00000000`
  const ws = new WebSocket(url, {
    headers: {
      'cookie': `ttwid=${ttwid}`,
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
    },
  })
  if (events) {
    ws.onopen = events?.onopen
    ws.onerror = events?.onerror
    ws.onclose = events?.onclose
    ws.onmessage = events?.onmessage
  }
  return ws
}

