import winston, { createLogger, format, transports } from 'winston';

/*
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
*/

const Logger = createLogger({
  level: 'info',
  levels: winston.config.npm.levels,
  format: format.combine(
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`.
    // - Write all logs error (and below) to `error.log`.
    //
    //new transports.File({ filename: 'error.log', level: 'error' }),
    //new transports.File({ filename: 'combined.log' })
  ]
});

// ToDo: Only add this if we're in development
Logger.add(new transports.Console({
  format: format.combine(
    format.colorize(),
    format.simple()
  )
}));

export default Logger;
