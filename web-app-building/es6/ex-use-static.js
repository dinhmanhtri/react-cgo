class Info {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

  calculate(param = 1) {
    return param * 3;
  }
}

class Geometry extends Info {
  constructor(name, description, longs) {
    super(name, description);
    this.longs = longs;
  }
}

const rectangle = new Geometry("Hinh1", "Đây là hình chữ nhật", 2);
console.log(rectangle);
console.log(rectangle.calculate(rectangle.longs));  //6
