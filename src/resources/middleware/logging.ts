import { Response, Request, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';
import { finished } from 'stream';

const logging = (req: Request, res: Response, next: NextFunction): void => {
  const { url, method } = req;
  const start = Date.now();
  const date = new Date();
  const outputFile = path.join(__dirname, '../../../logs/logs.txt');

  next();

  finished(res, () => {
    const time = Date.now() - start;
    const { statusCode } = res;
    const body = JSON.stringify(req.body);
    const queryParams = JSON.stringify(req.params);
    const information = `Date: ${date.toUTCString()}; Method: [${method}]; Url: ${url}; Query parameters: [${queryParams}]; Body: [${body}]; Status code: ${statusCode}; Time: [${time} ms] \n`;
    const writeStream = fs.createWriteStream(outputFile, { flags: 'a' });
    writeStream.write(information);
    process.stdout.write(information);
  });
};

export { logging };
