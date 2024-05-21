// exercise 1
let printFunc = (seconds) => {
  if (typeof seconds !== "number") {
    console.log("Please enter number");
  } else if (seconds < 0 || seconds > 9) {
    console.log("Please enter one digit number");
  } else {
    setTimeout(function () {
      console.log("Coding is not that hard!");
    }, seconds * 1000);
  }
};

printFunc(2);
printFunc("Test");
printFunc(22);

// exercise 2.1
let randomNumber = 2;
let promise1 = new Promise((resolve, reject) => {
  if (randomNumber === 10) {
    resolve("That's correct");
  } else {
    reject("That's not true");
  }
});
promise1.then((res) => console.log(res)).catch((error) => console.log(error));

// exercise 2.2
let getSomeData = () => {
  return new Promise((resolve, reject) => {
    let hasAccess = false;
    const data = { name: "Andrej", age: 29 };
    if (hasAccess) {
      resolve(data);
    } else reject("You don't have access");
  });
};

getSomeData()
  .then((result) => console.log(result.name))
  .catch((error) => console.log(error));

// exercise 2.3
let canIDrinkAlcohol = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      legalAge = 18;
      if (number >= legalAge) {
        resolve(`You can drink alcohol because you are ${number}`);
      } else reject(`You CANNOT drink alcohol because you are ${number}`);
    }, 3000);
  });
};

canIDrinkAlcohol(44)
  .then((age) => console.log(age))
  .catch((error) => console.log(error));

canIDrinkAlcohol(6)
  .then((age) => console.log(age))
  .catch((error) => console.log(error));

// exercise 2.4
let VerifyIfICanDrinkAlcohol = async (number) => {
  try {
    const message = await canIDrinkAlcohol(number);
    console.log(message);
  } catch (error) {
    console.log(error);
  }
};

VerifyIfICanDrinkAlcohol(2);
VerifyIfICanDrinkAlcohol(22);

// exercise 2.5
let areYouMilenial = (yourAge) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (yourAge >= 1981 && yourAge <= 1996) {
        return resolve("You're a milenial!");
      } else reject("You aren't a milenial");
    });
  });
};

let MilenialOrNot = async (yourAge) => {
  try {
    const approval = await areYouMilenial(yourAge);
    console.log(approval);
  } catch (error) {
    console.log(error);
  }
};

MilenialOrNot(1990);
MilenialOrNot(1980);

// exercise 3
let checkNumber = (number) => {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve("The number is even");
    } else reject("The number is odd");
  });
};

let handleSucces = (message) => {
  console.log(message);
};

let handleError = (error) => {
  console.log(error);
};

checkNumber(2)
  .then((result) => handleSucces(result))
  .catch((error) => handleError(error));

checkNumber(3)
  .then((result) => handleSucces(result))
  .catch((error) => handleError(error));

checkNumber(16)
  .then((result) => handleSucces(result))
  .catch((error) => handleError(error));

// exercise 4
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "John Doe",
        age: 30,
        email: "john@example.com",
      });
    }, 2000);
  });
}

let displayUserDetails = async () => {
  try {
    const displayData = await fetchData();
    console.log(displayData);
  } catch (error) {
    console.log(error);
  }
};

displayUserDetails();

// exercise 5
let countDown = (seconds) => {
  let timerId;
  timerId = setInterval(() => {
    console.log(`Countdown in progress: ${seconds}`);
    seconds--;
    if (seconds === 0) {
      console.log("Countdown complete!");
      clearInterval(timerId);
    }
  }, 1000);
};

countDown(5);
