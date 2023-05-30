async function fetchJokes() {
  const response = await fetch("https://icanhazdadjoke.com/search", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  const jokes = data.results;

  const jokeIds = jokes.map((joke) => joke.id);

  console.log("IDs de los chistes:", jokeIds);
}

export default fetchJokes;
