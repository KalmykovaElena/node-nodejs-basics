import { writeFile, existsSync} from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __filePath = "/files/fresh.txt";

const create = async () => {
    const fullPath = path.join(__dirname, __filePath);
  if (existsSync(fullPath)) {
    throw new Error("FS operation failed");
  }
  writeFile(fullPath, "I am fresh and young", (error) => {
    error ? console.log(error) : null;
  });
};

await create();
