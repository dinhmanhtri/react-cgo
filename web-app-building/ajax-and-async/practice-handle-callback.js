// Ex1:
// const greet = (name, callback) => {
//   console.log(`Hi ${name}`);
//   callback();
// }

// const callMe = () => {
//   console.log("I am callback function");
// }

// greet("Tri", callMe);

// Ex2:
// const greet = () => {
//   console.log("Hello world");
// }

// const sayName = (name) => {
//   console.log(`Hello ${name}`);
// }

// setTimeout(greet, 2000);
// sayName("Tri");

// Ex3:
const greet = (name, myFunction) => {
  console.log("Hello World");
  
  myFunction(name);
}

const sayName = (name) => {
  console.log(`Hello ${name}`);
}

setTimeout(greet, 2000, "Tri", sayName);

