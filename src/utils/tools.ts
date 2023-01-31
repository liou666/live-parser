import { unzip } from 'node:zlib'
import { promisify } from 'node:util'

export const stringToUint8 = (payload: string) => {
  const encoder = new TextEncoder()
  return encoder.encode(payload)
}
export const doUnzip = promisify(unzip)

