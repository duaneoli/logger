import { LevelStyle, LoggerLevel } from './Level'
import { LevelType, defaultStyle } from './defaultStyle'

export class Logger {
  static styled: boolean = true
  static replaceBreakLine: boolean = true
  static styles: Record<LevelType, LevelStyle> = defaultStyle

  static startRoute(message: string) {
    new LoggerLevel('[---->]', Logger.replaceBreakLine ? message.replaceAll('\n', '') : message, Logger.styled ? Logger.styles['startRoute'] : {})
  }

  static finishRoute(message: string) {
    new LoggerLevel('[<----]', Logger.replaceBreakLine ? message.replaceAll('\n', '') : message, Logger.styled ? Logger.styles['finishRoute'] : {})
  }

  static startJob(message: string) {
    new LoggerLevel('[~~~~>]', Logger.replaceBreakLine ? message.replaceAll('\n', '') : message, Logger.styled ? Logger.styles['startJob'] : {})
  }

  static finishJob(message: string) {
    new LoggerLevel('[<~~~~]', Logger.replaceBreakLine ? message.replaceAll('\n', '') : message, Logger.styled ? Logger.styles['finishJob'] : {})
  }

  static trace(message: string) {
    new LoggerLevel('[TRACE]', Logger.replaceBreakLine ? message.replaceAll('\n', '') : message, Logger.styled ? Logger.styles['trace'] : {})
  }

  static debug(message: string) {
    new LoggerLevel('[DEBUG]', Logger.replaceBreakLine ? message.replaceAll('\n', '') : message, Logger.styled ? Logger.styles['debug'] : {})
  }

  static info(message: string) {
    new LoggerLevel('[INFO ]', Logger.replaceBreakLine ? message.replaceAll('\n', '') : message, Logger.styled ? Logger.styles['info'] : {})
  }

  static warn(message: string, error: string) {
    const m = `${message}: ${error}`
    new LoggerLevel('[WARN ]', Logger.replaceBreakLine ? m.replaceAll('\n', '') : m, Logger.styled ? Logger.styles['warn'] : {})
  }

  static error(message: string, error?: any) {
    const m = `${message}: ${error ? JSON.stringify(error) : 'No error provided'}`
    new LoggerLevel('[ERROR]', Logger.replaceBreakLine ? m.replaceAll('\n', '') : m, Logger.styled ? Logger.styles['error'] : {})
  }
}
