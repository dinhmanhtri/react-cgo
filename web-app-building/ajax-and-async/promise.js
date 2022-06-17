import fs from "fs";

const readFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8",(err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
};

let promise = readFile("practice-handle-callback.js");
promise
  .then((data) => console.log(data))
  .catch((err) => console.error(err.message));
