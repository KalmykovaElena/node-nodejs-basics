import fs, { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __filePath = "/files/fileToRemove.txt";

const remove = async () => {
  const fullPath = path.join(__dirname, __filePath);
  if (!existsSync(fullPath)) {
    throw new Error("FS operation failed");
  }
  fs.rm(fullPath, { recursive: true }, (error) => {
    console.log(error ? error : "File deleted");
  });
};

await remove();
