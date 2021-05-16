class course {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getName() {
    return this.name;
  }
}
const phpCourse = new course("PhP", 5000);
console.log(phpCourse.price);
console.log(phpCourse.getName());
