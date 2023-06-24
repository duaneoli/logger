export enum TextColor {
  BLACK = '\x1b[30m',
  RED = '\x1b[31m',
  GREEN = '\x1b[32m',
  YELLOW = '\x1b[33m',
  BLUE = '\x1b[34m',
  MAGENTA = '\x1b[35m',
  CYAN = '\x1b[36m',
  WHITE = '\x1b[37m',
  GRAY = '\x1b[90m',
  CRIMSON = '\x1b[38m',
}

export type TextColorRGB = {r:number,g:number,b:number}
export const TextColorRGB = ({r = 0, g = 0, b = 0}: TextColorRGB) => {
  return `\x1b[38;2;${r};${g};${b}m`
}
