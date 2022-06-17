import fs from "fs";
const readFile = async (fileName) => {
  try {
    return await fs.promises.readFile(fileName, "utf-8");
  } catch (err) {
    throw new Error(err);
  }
};
readFile("./package.json")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
