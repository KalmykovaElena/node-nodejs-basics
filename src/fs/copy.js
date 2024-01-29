import fs, { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const copy = async () => {
  if (
    !existsSync(`${__dirname}/files`) ||
    existsSync(`${__dirname}/files_copy`)
  ) {
    throw new Error("FS operation failed");
  }
  fs.cp(
    `${__dirname}/files`,
    `${__dirname}/files_copy`,
    { recursive: true },
    (error) => {
      console.log(error ? error : "Folder copied!");
    }
  );
};

await copy();

