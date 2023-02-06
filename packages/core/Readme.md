#  📺 Live Parser 
Command line Douyin live room scraper by Nodejs

[![NPM Version][npm-image]][npm-url] [![Node Version][node-version]][npm-url] [![Downloads Stats][npm-downloads]][npm-url]

## Installation

```sh
npm install  @liou666/live-parser-core
```


## Usage

```ts
import { heartbeat, incoming, initWsConnect, parseLiveUrl } from '@liou666/live-parser-core'

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

const startWebsocket = async (liveId: string) => {
  const { ttwid, liveRoomId } = await parseLiveUrl(liveId)

  let timer: NodeJS.Timer

  const ws = await initWsConnect({ ttwid, liveRoomId })

  ws.binaryType = 'arraybuffer'

  ws.onopen = () => {
    timer = setInterval(() => {
      heartbeat(ws)
    }, 10000)
  }

  ws.onclose = () => {
    clearInterval(timer)
  }

  ws.onerror = err => logger.error(String(err))

  ws.onmessage = data => incoming(data, ws, {
    handleChatMessage,
    handleCommonTextMessage,
    handleGiftMessage,
    handleLikeMessage,
    handleMatchAgainstScoreMessage,
    handleMemberMessage,
    handleRoomUserSeqMessage,
    handleSocialMessage,
    handleUpdateFanTicketMessage,
  })
}

export default startWebsocket

```

##  Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. Any contributions you make are greatly appreciated! 

Don't forget to give the project a star! Thanks again!

1. Fork it (<https://github.com/liou666//fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-url]: https://www.npmjs.com/package/@liou666/live-parser-core

[npm-image]: https://img.shields.io/npm/v/@liou666/live-parser-core.svg


[node-version]: https://img.shields.io/node/v/@liou666/live-parser-core

[npm-downloads]: https://img.shields.io/npm/dw/@liou666/live-parser-core

[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics

