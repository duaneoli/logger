export enum BackgroundColor {
  BLACK = '\x1b[40m',
  RED = '\x1b[41m',
  GREEN = '\x1b[42m',
  YELLOW = '\x1b[43m',
  BLUE = '\x1b[44m',
  MAGENTA = '\x1b[45m',
  CYAN = '\x1b[46m',
  WHITE = '\x1b[47m',
  GRAY = '\x1b[100m',
  CRIMSON = '\x1b[48m',
}

export type BackgroundColorRGB = { r: number; g: number; b: number }
export function BackgroundColorRGB({ r = 0, g = 0, b = 0 }: BackgroundColorRGB): string {
  return `\x1b[48;2;${r};${g};${b}m`
}
