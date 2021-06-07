import fs from 'fs';
import path from 'path';

const errorHandler = (): void => {
  const outputFile = path.join(__dirname, '../../../logs/errors.txt');
  process.on('uncaughtException', (err: Error) => {
    const date = new Date();
    const information = `Date: ${date.toUTCString()}; status: 500; error: ${
      err.name
    }: ${err.message}; Type: uncaughtException \n`;

    const writeStream = fs.createWriteStream(outputFile, { flags: 'a' });
    writeStream.write(information);
    process.stdout.write(information);
    process.exit(1);
  });
  process.on('unhandledRejection', (err: Error) => {
    const date = new Date();
    const information = `Date: ${date.toUTCString()}; status: 500;  error: ${
      err.name
    }: ${err.message}; Type: unhandledRejection \n`;

    const writeStream = fs.createWriteStream(outputFile, { flags: 'a' });
    writeStream.write(information);
    process.stdout.write(information);
    process.exit(1);
  });
};

export { errorHandler };
