const redLight = document.getElementsByClassName("light")[0];
console.log(redLight);
const orangeLight = document.getElementsByClassName("light")[1];
console.log(orangeLight);
const greenLight = document.getElementsByClassName("light")[2];
console.log(greenLight);

changeColor = (event) => {
  if (event.key === "r") {
    redLight.style.backgroundColor = "red";
    orangeLight.style.backgroundColor = "grey";
    greenLight.style.backgroundColor = "grey";
  } else if (event.key === "o") {
    orangeLight.style.backgroundColor = "orange";
    redLight.style.backgroundColor = "gray";
    greenLight.style.backgroundColor = "grey";
  } else if (event.key === "g") {
    greenLight.style.backgroundColor = "green";
    redLight.style.backgroundColor = "grey";
    orangeLight.style.backgroundColor = "grey";
  }
};

document.addEventListener("keydown", changeColor);
