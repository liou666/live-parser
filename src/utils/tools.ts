import { unzip } from 'node:zlib'
import { promisify } from 'node:util'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

export const stringToUint8 = (payload: string) => {
  const encoder = new TextEncoder()
  return encoder.encode(payload)
}
export const doUnzip = promisify(unzip)

export const getCurrentPath = (url: string | URL) => {
  const __filename__ = fileURLToPath(url)
  const __dirname__ = dirname(__filename__)
  return {
    __dirname__,
    __filename__,
  }
}

