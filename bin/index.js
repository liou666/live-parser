#!/usr/bin/env node
import enquirer from 'enquirer'
import startWebsocket from '../dist/app.js'
const { prompt } = enquirer
const response = await prompt({
  type: 'input',
  name: 'liveID',
  message: '输入抖音直播间ID?',
})
startWebsocket(response.liveID)
