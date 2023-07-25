import { Cmd } from '../Cmd'
import { BackgroundColor, BackgroundColorRGB } from '../Cmd/BackgroundColor'
import { TextColor, TextColorRGB } from '../Cmd/TextColor'
import { TextStyle } from '../Cmd/TextStyle'

export type DefaultStyle = {
  textColor?: TextColor | TextColorRGB
  backgroundColor?: BackgroundColor | BackgroundColorRGB
  textStyle?: TextStyle
}

export type LevelStyle = {
  date?: {
    dateFormat?: string
    style?: DefaultStyle
  }
  level?: DefaultStyle
  message?: DefaultStyle
}

export class LoggerLevel {
  private applyStyle = (cmd: Cmd, style: DefaultStyle) => {
    const { backgroundColor, textColor, textStyle } = style
    if (backgroundColor) cmd.backgroundColor(backgroundColor)
    if (textColor) cmd.textColor(textColor)
    if (textStyle) cmd.textStyle(textStyle)
  }

  constructor(level: string, message: string, options: LevelStyle, separator = ' ') {
    const cmd = new Cmd()
    if (options.date) {
      const { dateFormat, style } = options.date
      if (style) this.applyStyle(cmd, style)
      if (dateFormat) cmd.text(dateFormat).text(separator)
      else cmd.text(new Date().toJSON()).text(separator)
    } else cmd.text(new Date().toJSON()).text(separator)
    cmd.reset()
    if (options.level) this.applyStyle(cmd, options.level)
    cmd.text(level).reset().text(separator)
    if (options.message) this.applyStyle(cmd, options.message)
    cmd.text(message).reset().text(separator)
    cmd.print()
  }
}
