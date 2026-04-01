import { writeFile } from "fs/promises";
await writeFile("hello.txt", "hi,how are you?");
console.log(process.cwd());
console.log("wrtten to the file,");