#!/bin/env node
import { cac } from 'cac'
import start from '@liou666/live-parser-ui'
import { name, version } from './package.json'
import { logger } from './src/utils'

const cli = cac(name)

cli
  .command('run <room_id>', 'Open DY live console Cli')
  .action(start)

cli.help()
cli.version(version)

cli.parse()

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
