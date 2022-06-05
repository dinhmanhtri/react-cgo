class Person {
  constructor(name) {
    this.name = name;
  }

  // getter
  get personName() {
    return this.name;
  }

  // setter
  set personName(x) {
    this.name = x;
  }

  walk() {
    console.log(`${this.name} đang đi`);
  }
}

class Programmer extends Person {
  constructor(name, programmingLanguage) {
    super(name);
    this.programmingLanguage = programmingLanguage;
  }

  set programmingLanguage(name) {
    this.programmingLanguage = name;
  }

  get programmingLanguage() {
    return this.programmingLanguage;
  }

  writeCode() {
    console.log(`${this.name} dang viet code`);
  }
}

let person1 = new Programmer("Tri", "Javascript");
// console.log(person1.name);
console.log(person1.programmingLanguage);
person1.writeCode();
