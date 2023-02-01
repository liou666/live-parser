import { logger } from './src/utils'
export { default } from './src/ws'

// listen system sign
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
