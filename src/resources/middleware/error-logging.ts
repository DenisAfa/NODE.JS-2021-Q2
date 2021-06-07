import { Response, Request, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';

const errorLogger = (
  err: Error,
  _req: Request,
  res: Response,
  next: NextFunction
): void => {
  const data = new Date();
  const outputFile = path.join(__dirname, '../../../logs/errors.txt');
  const information = `Data: ${data.toUTCString()}; Error: ${
    err.message
  }; Type: Internal Server Error \n`;

  const writeStream = fs.createWriteStream(outputFile, { flags: 'a' });
  writeStream.write(information);
  process.stdout.write(information);

  res.status(500).send(`${err.name}: Internal Server Error`);

  next();
};

export { errorLogger };
