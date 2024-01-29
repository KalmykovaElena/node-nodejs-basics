import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __filePath = "/files/fileToWrite.txt";

const write = async () => {
  const fullPath = path.join(__dirname, __filePath);
  try {
    const writeStream = fs.createWriteStream(fullPath);
    process.stdin.pipe(writeStream);
  } catch (err) {
    throw Error("FS operation failed");
  }
};

await write();
