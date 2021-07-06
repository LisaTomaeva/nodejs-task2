
import winston from 'winston';
import expressWinston from'express-winston';

const methodsLogger = expressWinston.logger({
    transports: [
      new winston.transports.Console({ humanReadableUnhandledException: true, colorize: true })
    ],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    ),
    meta: true,
    msg: "HTTP {{req.method}} {{req.url}}", 
    expressFormat: true, 
    colorize: false, 
    ignoreRoute: function (req, res) { return false; } 
  });

const errorsLogger = expressWinston.errorLogger({
    transports: [
      new winston.transports.Console()
    ],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    )
  });

  export { methodsLogger, errorsLogger };