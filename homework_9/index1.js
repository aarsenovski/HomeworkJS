class Animal {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  eat() {
    console.log(`${this.name} eats at the moment`);
  }
  sleep() {
    console.log(`${this.name} sleeps at the moment`);
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  bark() {
    `${this.name} barks at the moment`;
  }
}
const horse = new Animal("Pedro", 11);
horse.sleep();

const labrador = new Dog("Lara", 7, "labrador");
console.log(labrador);
labrador.eat();
