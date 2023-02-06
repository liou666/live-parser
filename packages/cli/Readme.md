#  📺 Live Parser 
Command line Douyin live room scraper by Nodejs

[![NPM Version][npm-image]][npm-url] [![Node Version][node-version]][npm-url] [![Downloads Stats][npm-downloads]][npm-url]

![](./screenshot/screenshot.gif)

## Installation

```sh
npm install -g @liou666/live-parser
```


## Usage

Enter `live-parser` or `dy` on the command line to start the service, and enter the ID of the Douyin live broadcast room when prompted.

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
- [ ] Enhanced type(ts)
- [ ] Add the voice broadcast feature
- [ ] Beautify the UI
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

