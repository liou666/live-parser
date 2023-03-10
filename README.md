#  📺 Live Parser 
Douyin live room scraper by Nodejs

<!-- [![NPM Version][npm-image]][npm-url] [![Node Version][node-version]][npm-url] [![Downloads Stats][npm-downloads]][npm-url] -->

![](./screenshot/screenshot1.gif)

## Installation
#### [live-parser-cli](/packages/cli)
```sh
npm install -g @liou666/live-parser-cli

dy run <room_id>
```
#### [live-parser-core](/packages/core)

```sh
npm install -d @liou666/live-parser-core
```

## Development setup

```sh
git clone https://github.com/liou666/live-parser.git
cd live-parser
pnpm install
mv .env_example .env
pnpm dev
```

## RoadMap
- [x] Parse protobuf
- [x] Client websocket connect
- [x] Enhanced type(ts)
- [ ] Add the voice broadcast feature
- [x] Beautify the UI
- [ ] Build desktop App
- [ ] Multi-platform Support
    - [ ] Bilibili


##  Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. Any contributions you make are greatly appreciated! 

Don't forget to give the project a star! Thanks again!

1. Fork it (<https://github.com/liou666//fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-url]: https://www.npmjs.com/package/@liou666/live-parser

[npm-image]: https://img.shields.io/npm/v/@liou666/live-parser.svg


[node-version]: https://img.shields.io/node/v/@liou666/live-parser

[npm-downloads]: https://img.shields.io/npm/dw/@liou666/live-parser

[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics

