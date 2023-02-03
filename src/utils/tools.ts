import { unzip } from 'node:zlib'
import { promisify } from 'node:util'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import type { Type } from 'protobufjs'

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

export function unPackData<T>(data: Buffer, proto: Type): T {
  return proto.decode(data) as T
}

