import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __filePath = "/files/fileToRead.txt";

const read = async () => {
  const fullPath = path.join(__dirname, __filePath);
  const readStream = fs.createReadStream(fullPath);
  readStream
    .on("error", () => {
      throw Error("FS operation failed");
    })
    .pipe(process.stdout);
};

await read();
