import { readFile } from "fs/promises";
const fileContents = await readFile("hello.txt", "utf-8");
console.log(fileContents);
console.log("wrtten to the file,");
console.log('object');