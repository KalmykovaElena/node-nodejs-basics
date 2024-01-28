import fs, { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  const oldPath = `${__dirname}/files/wrongFilename.txt`;
  const newPath = `${__dirname}/files/properFilename.md`;
  if (!existsSync(oldPath) || existsSync(newPath)) {
    throw new Error("FS operation failed");
  }
  fs.rename(oldPath, newPath, (error) => {
    console.log(error ? error : "File Renamed!");
  });
};

await rename();
