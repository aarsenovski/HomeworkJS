// exercise 1
books = [
  { title: "Book 1", author: "Author A", year: 2000 },
  { title: "Book 2", author: "Author B", year: 2010 },
  { title: "Book 3", author: "Author C", year: 2020 },
];

books.forEach((book) => {
  console.log(`${book.title}, ${book.author}`);
});

let bookReleasedaAfter2000 = books.find((book) => book.year > 2000);

console.log(bookReleasedaAfter2000);

// exercise 2

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "123 Main Street",
    city: "New York",
    state: "NY",
    postalCode: "10001",
  },
  hobbies: ["Reading", "Traveling", "Cooking"],
};

let personInfo = {
  email: "john-doe@mail.com",
  phone: "+321231231",
  education: {
    degree: "Math",
    major: "Math",
  },
};

let fullPersonInfo = { ...person, ...personInfo };
console.log(fullPersonInfo);

// e

user = {
  id: 123,
  username: "jsmith",
  fullName: { firstName: "John", lastName: "Smith" },
  contact: { email: "john@example.com", phone: "555-555-5555" },
  addresses: [
    {
      type: "home",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
    {
      type: "work",
      street: "456 Market Street",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
    },
  ],
};

const {
  username,
  fullName: { firstName, lastName },
  contact: { email },
  addresses: [
    { street: homeStreet, city: homeCity, state: homeState, zip: homeZip },
    { street: workStreet, city: workCity, state: workState, zip: workZip },
  ],
} = user;
console.log(username);
console.log(firstName, lastName);
console.log(email);
console.log(homeStreet, homeCity, homeState, homeZip);
console.log(workStreet, workCity, workState, workZip);

// exercise 3

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
// 3a
specificCountries = countries.filter((country) => country.includes("land"));
console.log(specificCountries);

// 3b
countriesEndingWithIa = countries.filter(
  (country) => country.endsWith("ia") && country.length > 7
);
console.log(countriesEndingWithIa);

// exercise 4

let zooAnimals = [
  {
    id: "0938aa23-f153-4937-9f88-4858b24d6bce",
    name: "lions",
    popularity: 4,
    location: "NE",
    residents: [
      {
        name: "Zena",
        sex: "female",
        age: 12,
      },
      {
        name: "Maxwell",
        sex: "male",
        age: 15,
      },
      {
        name: "Faustino",
        sex: "male",
        age: 7,
      },
      {
        name: "Dee",
        sex: "female",
        age: 14,
      },
    ],
  },
  {
    id: "e8481c1d-42ea-4610-8e11-1752cfc05a46",
    name: "tigers",
    popularity: 5,
    location: "NW",
    residents: [
      {
        name: "Shu",
        sex: "female",
        age: 19,
      },
      {
        name: "Esther",
        sex: "female",
        age: 17,
      },
    ],
  },
  {
    id: "baa6e93a-f295-44e7-8f70-2bcdc6f6948d",
    name: "bears",
    popularity: 5,
    location: "NW",
    residents: [
      {
        name: "Hiram",
        sex: "male",
        age: 4,
      },
      {
        name: "Edwardo",
        sex: "male",
        age: 4,
      },
      {
        name: "Milan",
        sex: "male",
        age: 4,
      },
    ],
  },
  {
    id: "ef3778eb-2844-4c7c-b66c-f432073e1c6b",
    name: "penguins",
    popularity: 4,
    location: "SE",
    residents: [
      {
        name: "Joe",
        sex: "male",
        age: 10,
      },
      {
        name: "Tad",
        sex: "male",
        age: 12,
      },
      {
        name: "Keri",
        sex: "female",
        age: 2,
      },
      {
        name: "Nicholas",
        sex: "male",
        age: 2,
      },
    ],
  },
  {
    id: "533bebf3-6bbe-41d8-9cdf-46f7d13b62ae",
    name: "otters",
    popularity: 4,
    location: "SE",
    residents: [
      {
        name: "Neville",
        sex: "male",
        age: 9,
      },
      {
        name: "Lloyd",
        sex: "male",
        age: 8,
      },
      {
        name: "Mercedes",
        sex: "female",
        age: 9,
      },
      {
        name: "Margherita",
        sex: "female",
        age: 10,
      },
    ],
  },
  {
    id: "89be95b3-47e4-4c5b-b687-1fabf2afa274",
    name: "frogs",
    popularity: 2,
    location: "SW",
    residents: [
      {
        name: "Cathey",
        sex: "female",
        age: 3,
      },
      {
        name: "Annice",
        sex: "female",
        age: 2,
      },
    ],
  },
  {
    id: "78460a91-f4da-4dea-a469-86fd2b8ccc84",
    name: "snakes",
    popularity: 3,
    location: "SW",
    residents: [
      {
        name: "Paulette",
        sex: "female",
        age: 5,
      },
      {
        name: "Bill",
        sex: "male",
        age: 6,
      },
    ],
  },
  {
    id: "bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5",
    name: "elephants",
    popularity: 5,
    location: "NW",
    residents: [
      {
        name: "Ilana",
        sex: "female",
        age: 11,
      },
      {
        name: "Orval",
        sex: "male",
        age: 15,
      },
      {
        name: "Bea",
        sex: "female",
        age: 12,
      },
      {
        name: "Jefferson",
        sex: "male",
        age: 4,
      },
    ],
  },
  {
    id: "01422318-ca2d-46b8-b66c-3e9e188244ed",
    name: "giraffes",
    popularity: 4,
    location: "NE",
    residents: [
      {
        name: "Gracia",
        sex: "female",
        age: 11,
      },
      {
        name: "Antone",
        sex: "male",
        age: 9,
      },
      {
        name: "Vicky",
        sex: "female",
        age: 12,
      },
      {
        name: "Clay",
        sex: "male",
        age: 4,
      },
      {
        name: "Arron",
        sex: "male",
        age: 7,
      },
      {
        name: "Bernard",
        sex: "male",
        age: 6,
      },
    ],
  },
];

// a
let answer1 = zooAnimals
  .filter((animal) => animal.popularity > 4)
  .map((animal) => animal.name);
console.log(answer1);

// b
let answer2 = zooAnimals
  .filter((el) => el.name === "elephants")[0]
  .residents.sort((a, b) => b.age - a.age)[0].name;
console.log(answer2);

// v
let answer3 = zooAnimals
  .find((animal) => animal.name === "penguins")
  .residents.filter(
    (penguin) => penguin.sex === "female" && penguin.age < 10
  )[0].name;
console.log(answer3);

// g

let answer4 = zooAnimals
  .sort((a, b) => b.name.length - a.name.length)[0]
  .residents.reduce((total, currEl) => total + currEl.age, 0);
console.log(answer4);

// d

let lowestNumber = zooAnimals
  .sort((a, b) => a.residents.length - b.residents.length)[0]
  .residents.map((a) => a.name);
let highestNumber = zooAnimals
  .sort((a, b) => b.residents.length - a.residents.length)[0]
  .residents.map((a) => a.name);
let mergeArray = [...lowestNumber, ...highestNumber];
console.log(mergeArray);

// exercise 5

let checkGrade = (number) => {
  number >= 90 && number <= 100
    ? console.log("Grade A")
    : number >= 80 && number < 90
    ? console.log("Grade B")
    : number >= 70 && number < 80
    ? console.log("Grade C")
    : number >= 60 && number < 70
    ? console.log("Grade D")
    : number >= 0 && number < 60
    ? console.log("Grade F")
    : "Enter valid number";
};

checkGrade(10);
