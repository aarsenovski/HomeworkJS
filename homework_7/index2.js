document.getElementById("registration-form").addEventListener("submit", () => {
  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("pw").value;
  const confirmPassword = document.getElementById("pw-confirm").value;

  if (password === confirmPassword) {
    alert("Registration successful");
  } else if (password !== confirmPassword) {
    alert("Passwords do not match! Please try again!");
  }
});
