import enquirer from 'enquirer'
import start from '@liou666/live-parser-ui'
import run from './src/run'
import { logger } from './src/utils'
const { prompt } = enquirer
const response = await prompt({
  type: 'input',
  name: 'liveID',
  message: '输入抖音直播间ID?',
}) as any

// run(response.liveID)

start(response.liveID)

process.on('SIGINT', () => {
  logger.error('Server stopped.')
  process.exit()
})

process.on('SIGTERM', () => {
  logger.error('Server stopped.')
  process.exit()
})

process.on('unhandledRejection', (reason, promise) => {
  logger.warn(`Unhandled Rejection at: ${promise}; reason:, ${reason}`)
})

process.on('uncaughtException', (err, origin) => {
  logger.warn(`Caught exception: ${err}\n` + `Exception origin: ${origin}`)
})
