// let printFunc = (seconds) => {
//   if (typeof seconds !== "number") {
//     console.log("Please enter a number");
//   } else if (seconds > 9 || seconds <= 0) {
//     console.log("Please enter a valid one digit number");
//   } else {
//     setTimeout(() => {
//       console.log("Coding is not that hard");
//     }, seconds * 1000);
//   }
// };

// printFunc(0);

let returnUserData = () => {
  return new Promise((resolve, reject) => {
    let access = false;
    const data = { name: "Andrej", age: 30 };
    if (access) {
      resolve(data);
    } else reject("You don't have access");
  });
};

returnUserData()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
