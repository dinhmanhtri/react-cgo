// Bai 1:
// const f = () => {
//   console.log("Async function");
//   return Promise.resolve(1);
// }

// f();

// Bai 2:
// const f = () => {
//   console.log("Async function");
//   return Promise.resolve(1);
// };

// f().then((data) => console.log(data));

// Bai 3:
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise resolved"), 4000);
});

const asyncFunc = async () => {
  let result = await promise;
  console.log(result);
  console.log("Hello");
}

asyncFunc();
