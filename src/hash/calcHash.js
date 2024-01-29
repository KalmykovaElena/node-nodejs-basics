import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createHash } from "crypto";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");
const calculateHash = async () => {
  try {
    const readStream = fs.createReadStream(filePath);
    const hash = createHash("sha256").setEncoding("hex");
    hash.on("finish", () => console.log(hash.read()));
    readStream.pipe(hash);
  } catch {
    throw Error("FS operation failed");
  }
};

await calculateHash();
