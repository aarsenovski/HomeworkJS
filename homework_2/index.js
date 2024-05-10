//exercise 1a,b

const globalNum = 10;

let checkScope = () => {
  let localNum = globalNum;
  console.log(globalNum);
};

// console.log(localNum === globalNum); dava error bidejki localNum e definirana vo vnatreshniot scope na funkcijata
checkScope();

//exercise 1v
if (true) {
  let blockNum = 10;
}

console.log(typeof blockNum); // dobivame rezultat undefined bidejki blockNum e definirana vo vnatresniot scope na if

// exercise 2

let score = 78;

if (score >= 90 && score <= 100) {
  console.log("Grade: A");
} else if (score >= 80 && score < 90) {
  console.log("Grade B");
} else if (score >= 70 && score < 80) {
  console.log("Grade C");
} else if (score >= 60 && score < 70) {
  console.log("Grade D");
} else if (score >= 0 && score < 60) {
  console.log("Grade F");
} else console.log("Invalid score! Please enter a score between 0 and 100");

//exercise 2b
dayNumber = 5;

switch (dayNumber) {
  case 1:
    {
      console.log("The day is Monday");
    }
    break;
  case 2:
    {
      console.log("The day is Tuesday");
    }
    break;
  case 3:
    {
      console.log("The day is Wednesday");
    }
    break;

  case 4:
    {
      console.log("The day is Thursday");
    }
    break;

  case 5:
    {
      console.log("The day is Friday");
    }
    break;
  case 6:
    {
      console.log("The day is Saturday");
    }
    break;
  case 7:
    {
      console.log("The day is Sunday");
    }
    break;
  default:
    console.log("Invalid day number. Please enter a number between 1 and 7.");
    break;
}

// exercise 3

let addNumbers = (num1, num2, num3) => {
  let sum = num1 + num2 + num3;
  return sum;
};

console.log(addNumbers(2, 4, 6));
console.log(addNumbers(5, 10, 15));

let printAString = (string) => {
  return string;
};

console.log(printAString("randomText"));

let compareNumbers = (num1, num2) => {
  if (num1 === num2) {
    console.log("The numbers are equal");
  } else console.log("These numbers are not equal");
};

compareNumbers(5, 5);

//exercise 4a

const age = 21;
if (age >= 18 && age < 21) {
  console.log("You can vote but cannot buy alcohol yet");
} else if (age >= 21) {
  console.log("You can vote and buy alcohol");
} else if (age < 18 && age > 0) {
  console.log("You cannot vote nor buy alcohol");
} else console.log("Please enter a valid age");

//exercise 4b

let month = "September";

let getDaysInMonth = (month) => {
  switch (month) {
    case "January":
      {
        return "31";
      }
      break;
    case "February":
      {
        return "28";
      }
      break;
    case "March":
      {
        return "31";
      }
      break;
    case "April":
      {
        return "30";
      }
      break;
    case "May": {
      return "31";
    }
    case "June":
      {
        return "30";
      }
      break;
    case "July":
      {
        return "30";
      }
      break;
    case "August":
      {
        return "31";
      }
      break;
    case "September":
      {
        return "31";
      }
      break;
    case "October":
      {
        return "30";
      }
      break;
    case "November":
      {
        return "31";
      }
      break;
    case "December":
      {
        return "31";
      }
      break;
    default:
      return "Invalid input";
      break;
  }
};

console.log(getDaysInMonth(month));

// exercise 4v

let temp = 31;

if (temp > 30) {
  console.log("Надвор е жешко");
} else if (temp > 20 && temp <= 30) {
  console.log("Надвор е топло");
} else if (temp >= 15 && temp <= 20) {
  console.log("Надвор е умерено");
} else if (temp < 15) {
  console.log("Надвор е ладно");
}

// exercise 5

let divisionWithNumbers = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  }
};

divisionWithNumbers(5);
divisionWithNumbers(9);
divisionWithNumbers(15);
