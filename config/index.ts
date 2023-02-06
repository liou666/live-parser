import dotenv from 'dotenv'
const result = dotenv.config()

if (result.error)
  throw result.error

const { parsed: envs } = result

export const {
  LIVE_ID, HELLO,
}
  = envs as Record<string, any>
