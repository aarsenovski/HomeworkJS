const firstName = document.getElementById("fname").value;
const lastName = document.getElementById("lname").value;
const email = document.getElementById("email").value;
const password = document.getElementById("pw").value;
const confirmPassword = document.getElementById("pw-confirm").value;
const registerBtn = document.getElementById("submit-btn");

registerBtn.addEventListener("click", () => {
  if (firstName && lastName && email && password && confirmPassword) {
    console.log(firstName, lastName, email, password, confirmPassword);
    if (password === confirmPassword) {
      alert(
        `Registration Successful! Name: ${firstName}, Last name: ${lastName}`
      );
    } else {
      alert("Passwords do not match. Please try again.");
    }
  } else {
    alert("All fields are required. Please fill out all fields.");
  }
});
