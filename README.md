#  📺 Live Parser 
命令行抖音直播数据抓取工具

[![NPM Version][npm-image]][npm-url] [![Node Version][node-version]][npm-url] [![Downloads Stats][npm-downloads]][npm-url]

![](./screenshot/screenshot1.gif)

## 使用

> node版本需要>=16 

```sh
npm install -g @liou666/live-parser-cli

dy run <room_id>
```

## 本地启动

```sh
git clone https://github.com/liou666/live-parser.git
cd live-parser
pnpm install
mv .env_example .env
pnpm dev
```

## 特性
- [x] Parse protobuf
- [x] Client websocket connect
- [x] Enhanced type(ts)
- [x] Beautify the UI
- [ ] Add the voice broadcast feature
- [ ] Build desktop App
- [ ] Multi-platform Support
    - [ ] Bilibili


<!-- ##  Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. Any contributions you make are greatly appreciated! 

Don't forget to give the project a star! Thanks again!

1. Fork it (<https://github.com/liou666//fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request -->

<!-- Markdown link & img dfn's -->
[npm-url]: https://www.npmjs.com/package/@liou666/live-parser-cli

[npm-image]: https://img.shields.io/npm/v/@liou666/live-parser-cli.svg


[node-version]: https://img.shields.io/node/v/@liou666/live-parser-cli

[npm-downloads]: https://img.shields.io/npm/dw/@liou666/live-parser-cli

[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics

## 免责声明
本项目仅用于学习交流使用，禁止一切非法滥用，否则后果自负。
