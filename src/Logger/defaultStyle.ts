import { TextColor } from '../Cmd/TextColor'
import { LevelStyle } from './Level'

const dateStyle: LevelStyle = {
  date: { dateFormat: new Date().toJSON(), style: { textColor: TextColor.GRAY } },
}

export type LevelType = 'startRoute' | 'finishRoute' | 'startJob' | 'finishJob' | 'trace' | 'debug' | 'info' | 'warn' | 'error'

export const defaultStyle: Record<LevelType, LevelStyle> = {
  startRoute: {
    ...dateStyle,
    level: { textColor: TextColor.YELLOW },
    message: { textColor: TextColor.YELLOW },
  },
  finishRoute: {
    ...dateStyle,
    level: { textColor: TextColor.YELLOW },
    message: { textColor: TextColor.YELLOW },
  },
  startJob: {
    ...dateStyle,
    level: { textColor: TextColor.CYAN },
    message: { textColor: TextColor.CYAN },
  },
  finishJob: {
    ...dateStyle,
    level: { textColor: TextColor.CYAN },
    message: { textColor: TextColor.CYAN },
  },
  trace: {
    ...dateStyle,
    level: { textColor: TextColor.CRIMSON },
    message: { textColor: TextColor.CRIMSON },
  },
  debug: {
    ...dateStyle,
    level: { textColor: TextColor.MAGENTA },
    message: { textColor: TextColor.MAGENTA },
  },
  info: {
    ...dateStyle,
    level: { textColor: TextColor.BLUE },
    message: { textColor: TextColor.BLUE },
  },
  warn: {
    ...dateStyle,
    level: { textColor: { r: 200, g: 100, b: 0 } },
    message: { textColor: { r: 200, g: 100, b: 0 } },
  },
  error: {
    ...dateStyle,
    level: { textColor: { r: 250, g: 0, b: 0 } },
    message: { textColor: { r: 250, g: 0, b: 0 } },
  },
}
