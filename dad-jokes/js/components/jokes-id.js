export async function shopJoke(jokeId) {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const response = await fetch(
    `https://icanhazdadjoke.com/j/${jokeId}`,
    config
  );
  const data = await response.json();
  return data.joke;
}

export default shopJoke;
