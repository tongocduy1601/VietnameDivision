import morgan, { StreamOptions } from 'morgan'
import winston from 'winston'
import 'winston-daily-rotate-file'

const accessTransport = new winston.transports.DailyRotateFile({
  filename: 'logs/%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '365d',
})

const consoleTransport = new winston.transports.Console()
const winstonLogger = winston.createLogger({
  level: 'http',
  format: winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`,
  ),
  transports: [accessTransport, consoleTransport],
})
const accessLog: StreamOptions = {
  write: (text: string) => {
    winstonLogger.http(text)
  },
}

const morganMiddleware = morgan('combined', {
  stream: accessLog,
})

export default morganMiddleware
