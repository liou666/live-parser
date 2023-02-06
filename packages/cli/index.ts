import enquirer from 'enquirer'
import { logger } from './src/utils'
import startWebsocket from './src/run'
const { prompt } = enquirer

const response = await prompt({
  type: 'input',
  name: 'liveID',
  message: '输入抖音直播间ID?',
}) as any

startWebsocket(response.liveID)

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
