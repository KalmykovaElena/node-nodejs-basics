import fs, { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __filePath = "/files/fileToRead.txt";
const read = async () => {
  const fullPath = path.join(__dirname, __filePath);
  if (!existsSync(fullPath)) {
    throw new Error("FS operation failed");
  }
  fs.readFile(fullPath, 'utf8', (error, data) => {
    console.log(error ? error : data);
  });
};

await read();
