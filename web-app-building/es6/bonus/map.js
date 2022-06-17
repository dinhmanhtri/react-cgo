const myMap = new Map();

const keyString = "a string";
const keyObj = {};
const keyFunc = function() {};

myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunction");

console.log(myMap);

console.log(myMap.size);

console.log(myMap.get(keyString)); // value associated with 'a string'
console.log(myMap.get(keyObj)); // value associated with keyObj 
console.log(myMap.get(keyFunc)); // value associated with keyFunction 

console.log(myMap.get("a string")); // value associated with 'a string'

console.log(myMap.get({})); // undefined
console.log(myMap.get(function () {})); // undefined


/*
=> myMap.clear() xóa tất cả phần tử khỏi Map obj.
=> myMap.delete(key) xóa element được chỉ định khỏi Map obj bằng key.
=> myMap.has(key) tìm trong Map obj xem có key được chỉ định không, kết quả trả về boolean.
*/