import { BackgroundColor, BackgroundColorRGB } from './BackgroundColor'
import { TextColor, TextColorRGB } from './TextColor'
import { TextStyle } from './TextStyle'

export class Cmd {
  private RESET = '\x1b[0m'
  private command: Array<string> = []

  text(t: string) {
    this.command.push(t)
    return this
  }

  textColor(color: TextColor | { r: number; g: number; b: number }) {
    if (typeof color === 'string') this.command.push(color)
    else this.command.push(TextColorRGB(color))
    return this
  }

  textStyle(color: TextStyle) {
    this.command.push(color)
    return this
  }

  backgroundColor(color: BackgroundColor | { r: number; g: number; b: number }) {
    if (typeof color === 'string') this.command.push(color)
    else this.command.push(BackgroundColorRGB(color))
    return this
  }

  reset() {
    this.command.push(this.RESET)
    return this
  }

  breakLine() {
    this.command.push('\n')
    return this
  }

  print(reset = true) {
    if (reset) this.command.push(this.RESET)
    console.log(this.command.join(''))
  }
}
