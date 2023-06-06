export async function fetchRandomJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const response = await fetch("https://icanhazdadjoke.com", config);
  const data = await response.json();
  return data.joke;
}

export async function fetchJokesBySearchTerm(searchWord) {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const response = await fetch(
    `https://icanhazdadjoke.com/search?term=${searchWord}`,
    config
  );

  const data = await response.json();
  return data.results || [];
}

//pendiente: no mostrar sin input
