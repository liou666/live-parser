/* eslint-disable no-console */
import 'colors'

const warn = (info: string) => {
  console.log(`[warn] ${info}`.yellow)
}

const error = (info: string) => {
  console.log(`[error] ${info}`.red)
}

const info = (info: string) => {
  console.log(`[info] ${info}`.cyan)
}

const success = (info: string) => {
  console.log(`[success] ${info}`.green)
}

const base = (info: string) => {
  console.log(info)
}

export { warn, error, info, success, base }
