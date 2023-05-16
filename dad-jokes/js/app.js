//DOM
const randomJokeBtn = document.getElementById("random-joke__btn");
const randomJokeText = document.getElementById("random-joke__text");
const searchJokeInput = document.getElementById("search-joke__input");
const searchJokeBtn = document.getElementById("search-joke__btn");
const searchJokeList = document.getElementById("search-joke-results__list");

//click event random joke

randomJokeBtn.addEventListener("click", getRandomJoke);

//click event search btn

searchJokeBtn.addEventListener("click", searchJokes);

//random joke function
function getRandomJoke() {
  //call API
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json()) //gets data
    .then((data) => {
      randomJokeText.innerText = data.joke;
    })
    .catch((error) => {
      console.log(error);
    });
}

//search jokes function

function searchJokes() {
  const searchText = searchJokeInput.value.trim();
  //gets data
  if (searchText === "") {
    return;
  }

  //call API
  fetch(`https://icanhazdadjoke.com/search?term=${searchText}`, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      searchJokeList.innerHTML = "";
      //reads the length of the data, if it is zero this "if" displays the default text
      if (data.results.length === 0) {
        searchJokeList.innerHTML = "<li>No hubo resultados</li>";
      } else {
        //here a list is created with the obtained data
        data.results.forEach((result) => {
          const jokeItem = document.createElement("ol");
          jokeItem.innerText = result.joke;
          searchJokeList.appendChild(jokeItem);
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
