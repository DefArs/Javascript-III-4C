import { fetchJokesBySearchTerm } from "../api/api.js";

export async function searchJoke() {
  const searchWord = document.getElementById("search-joke__input").value;
  const searchResultsList = document.getElementById(
    "search-joke-results__list"
  );
  searchResultsList.innerHTML = "";

  try {
    const jokes = await fetchJokesBySearchTerm(searchWord);

    if (jokes.length) {
      jokes.forEach((joke) => {
        const jokeDiv = document.createElement("div");
        jokeDiv.className = "joke-container__input";
        jokeDiv.innerText = joke.joke;

        const li = document.createElement("li");
        li.appendChild(jokeDiv);

        searchResultsList.appendChild(li);
      });
    } else {
      const noResultsDiv = document.createElement("div");
      noResultsDiv.className = "joke-container__input";
      noResultsDiv.innerText = "No hay resultados";

      const li = document.createElement("li");
      li.appendChild(noResultsDiv);
      searchResultsList.appendChild(li);
    }
  } catch (error) {
    console.log("Error al realizar la búsqueda:", error);
  }
}

export default searchJoke;
