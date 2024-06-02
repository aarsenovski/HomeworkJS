fetchUsers = () => {
  fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data) => {
      const userInfo = document.getElementById("user");

      data.results.forEach((character) => {
        console.log(character);
        const userInfoDetails = document.createElement("div");
        userInfoDetails.setAttribute("class", "user");

        const characterImg = document.createElement("img");
        characterImg.setAttribute("src", character.image);
        characterImg.setAttribute("width", "150px");

        const name = document.createElement("p");
        name.setAttribute("class", "name");
        const gender = document.createElement("p");
        const status = document.createElement("p");
        status.setAttribute("class", character.status.toLowerCase());
        const numberOfEps = document.createElement("p");

        characterImg.textContent = character.image;
        name.textContent = character.name;
        gender.textContent = character.gender;
        status.textContent = character.status;

        numberOfEps.textContent = `In ${character.episode.length} episodes`;

        userInfoDetails.appendChild(characterImg);
        userInfoDetails.appendChild(name);
        userInfoDetails.appendChild(gender);
        userInfoDetails.appendChild(status);
        userInfoDetails.appendChild(numberOfEps);

        userInfo.appendChild(userInfoDetails);
      });
    });
};

fetchUsers();
