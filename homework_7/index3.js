const redLight = document.getElementsByClassName("light")[0];
console.log(redLight);
const orangeLight = document.getElementsByClassName("light")[1];
console.log(orangeLight);
const greenLight = document.getElementsByClassName("light")[2];
console.log(greenLight);

changeColor = (event) => {
  if (event.key === "r") {
    redLight.style.backgroundColor = "red";
  } else if (event.key === "o") {
    orangeLight.style.backgroundColor = "orange";
  } else if (event.key === "g") {
    greenLight.style.backgroundColor = "green";
  }
};

redLight.addEventListener("keydown", changeColor);
orangeLight.addEventListener("keydown", changeColor);
greenLight.addEventListener("keydown", changeColor);
