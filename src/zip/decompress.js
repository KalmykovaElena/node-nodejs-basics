import fs from "fs";
import path from "path";
import zlib from "zlib";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __filePath = "/files/fileToCompress.txt";
const __compressPath = "/files/archive.gz";
const decompress = async () => {
  const fullPath = path.join(__dirname, __filePath);
  const fullCompressPath = path.join(__dirname, __compressPath);
  try {
    const readStream = fs.createReadStream(fullCompressPath);
    const writeStream = fs.createWriteStream(fullPath);
    const decompressStream = zlib.createUnzip();

    readStream.pipe(decompressStream).pipe(writeStream);
  } catch (err) {
    throw Error("FS operation failed");
  }
};

await decompress();
