fetchUsers = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      const userInfo = document.getElementById("user");

      data.forEach((user) => {
        const userInfoDetails = document.createElement("div");
        userInfoDetails.setAttribute("class", "user");

        const firstName = document.createElement("p");
        const phoneNumber = document.createElement("p");
        const companyName = document.createElement("p");

        firstName.textContent = `Name: ${user.name}`;
        phoneNumber.textContent = `Phone: ${user.phone}`;
        companyName.textContent = `Company name: ${user.company.name}`;

        userInfoDetails.appendChild(firstName);
        userInfoDetails.appendChild(phoneNumber);
        userInfoDetails.appendChild(companyName);

        userInfo.appendChild(userInfoDetails);
      });
    });
};

fetchUsers();
