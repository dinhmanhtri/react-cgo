// Bai 1:
// const count = true;

// let countValue = new Promise((resolve, reject) => {
//   if (!count) {
//     reject("There is no count value.");
//   }
//   resolve("There is a count value");
// });

// console.log(countValue);

// Bai 2:
// const countValue = new Promise((resolve, reject) => {
//   resolve("Promise resolved");
// })
//   .then((result) => console.log(result))
//   .then(() => console.log("You can call multiple function this way."));

// Bai 3:
const countValue = new Promise((resolve, reject) => {
  reject("Promise rejected");
})
.then((result) => console.log(result))
.catch((err) => console.log(err));
