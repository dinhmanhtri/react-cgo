// Bài 1:
let greetings = "lazy dog jumps over brown fox";
let char = [...greetings];
console.log("char array:", char);
console.log("Số ký tự:", char.length);

// Bài 2:
let blog1Subscribers = ["billy@example.com", "sally@gmail.com"];
let blog2Subscribers = [
  "timmy@gmail.com",
  "tammy@example.com",
  "tommy@gmail.com",
];
let subscribers = [...blog1Subscribers, ...blog2Subscribers];
console.log(subscribers);

// Bài 3:
// Spread operator sao chép một mảng sang một ô nhớ mới, không ảnh hưởng đến mảng cũ.
let students = ["John", "Sofia", "Bob"];
let copy_students = [...students];
console.log(copy_students);
students.push("Sally");
console.log(copy_students);
console.log(students);