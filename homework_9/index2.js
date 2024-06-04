class Rectangle {
  // two private variables that will be called using getters and setters
  #width;
  #height;
  constructor(color, width, height) {
    this.color = color;
    this.#width = width;
    this.#height = height;
  }

  get getWidth() {
    return this.#width;
  }

  set setWidth(newWidth) {
    return (this.#width = newWidth);
  }

  get getHeight() {
    return this.#height;
  }

  set setHeight(newHeight) {
    return (this.#height = newHeight);
  }

  // one static method that will be called using the Class
  static getShapeType() {
    console.log("Rectangle");
  }

  getArea() {
    return this.#height * this.#width;
  }
  describe() {
    console.log(
      `Description of this rectangle: ${this.color}, ${this.#height}, ${
        this.#width
      }`
    );
  }
}

const Rectangle1 = new Rectangle("blue", 100, 200);
console.log(Rectangle1.color);
console.log(Rectangle1.getHeight);
console.log(Rectangle1.getWidth);
Rectangle.getShapeType();
console.log(`The area is ${Rectangle1.getArea()} centimeters`);
Rectangle1.setHeight = 8;
Rectangle1.setWidth = 8;
console.log(`The area is ${Rectangle1.getArea()} centimeters`);
Rectangle1.describe();

const Rectangle2 = new Rectangle("red", 3, 5);
console.log(Rectangle2.color);
console.log(Rectangle2.getHeight);
console.log(Rectangle2.getWidth);
Rectangle.getShapeType();
console.log(`The area is ${Rectangle2.getArea()} centimeters`);
Rectangle2.setHeight = 2;
Rectangle2.setWidth = 2;
console.log(`The area is ${Rectangle2.getArea()} centimeters`);
Rectangle2.describe();
