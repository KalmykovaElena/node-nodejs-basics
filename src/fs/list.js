import fs, { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __filePath = "/files";
const list = async () => {
   const fullPath = path.join(__dirname, __filePath);
   if (!existsSync(fullPath)) {
     throw new Error("FS operation failed");
   }
   fs.readdir(fullPath, { recursive: true }, (error,files) => {
     console.log(error ? error : files);
   });
};

await list();
