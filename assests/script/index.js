"use strict";

const url = "https://randomuser.me/api/?nat=CA&results=10";

const usersContainer = document.getElementById("users");

fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then((profiles) => {
    profiles.results.forEach((profile) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user-profile");
      userDiv.innerHTML = `
        <img class="image" src="${profile.picture.medium}" />
        <div class="fullname">${profile.name.first} ${profile.name.last}</div>
        <div class="description">
          <div>City: <span class="city">${profile.location.city}</span></div>
        </div>
      `;
      usersContainer.appendChild(userDiv);
    });
  })
  .catch(printError);

function handleErrors(res) {
  if (!res.ok) {
    throw error(res.status);
  }
  console.log(res);
  return res;
}

function parseJSON(res) {
  return res.json();
}

function printError(error) {
  console.log(error);
}
