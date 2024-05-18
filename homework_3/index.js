// exercise 1

let myFaveBook = {
  name: "The shadow of the wind",
  author: "Carlos Ruiz Zafon",
  year: 2001,
  copiesSold: {
    USA: 100000,
    Europe: 20000,
  },
  yearsReissued: [2009, 2014],
};

let faveCar = {
  brand: "Volvo",
  modelSpecs: {
    name: "V40",
    color: "blue",
  },
  yearsProduced: [2017, 2018, 2019, 2020],
  isItDiscontinued: true,
};

let randomStudent = {
  name: "Andrej",
  yearOfAdmission: 2014,
  subjectsLeft: ["Mathematics", "Literature", "Sport", "Programming"],
};

// exercise 2a

for (i = 0; i <= 10; i++) {
  console.log(i);
}

// exercise 2b

let start = 3;
let end = 10;
let sum = 0;

for (i = start; i < end; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log(sum);

// exercise 2v

let person = {
  name: "Andrej",
  age: 29,
  city: "Skopje",
};

for (let key in person) {
  console.log(`${key} ${person[key]}`);
}

// exercise 2g

let colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(`${color.length} ${color}`);
}

// exercise 3

let count = 5;

while (count > 0) {
  console.log(count);
  count--;
}

// exercise 3b

let number = 10;

do {
  console.log(number);
  if (number === 5) break;
  number--;
} while (number > 0);

// exercise 4

let students = [
  {
    name: "Andrej",
    surname: "Arsenovski",
    age: 29,
    address: {
      city: "Skopje",
      street: { name: "Partizanska", number: 22, zipCode: "1000" },
    },
  },
  {
    name: "Marija",
    surname: "Stefanovska",
    age: 31,
    address: {
      city: "Skopje",
      street: { name: "Ilindenska", number: 18, zipCode: "5000" },
    },
  },
];

console.log(students[0].address.city);
console.log(students[0]["address"]["street"]["name"]);

// exercise 5a

for (i = 1; i <= 100; i += 4) {
  console.log(i);
}

// exercise 5b

for (i = 1; i <= 50; i++)
  if (i % 2 === 0) {
    console.log(i);
  }

// exercise 6

let cities = [
  "Skopje",
  "Bitola",
  "Kumanovo",
  "Prilep",
  "Tetovo",
  "Gostivar",
  "Kicevo",
  "Ohrid",
  "Struga",
  "Gevgelija",
];

for (city in cities) {
  console.log(cities[city]);
}

for (city of cities) {
  console.log(city);
}
