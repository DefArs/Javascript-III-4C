function api(endpoint = "") {
  const baseUrl = "https://icanhazdadjoke.com/";

  let dataToReturn;

  fetch(`${baseUrl}${endpoint}`, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json()) //gets data
    .then((data) => {
      dataToReturn = data;
    })
    .catch((error) => {
      console.log(error);
    });

  return dataToReturn;
}

export default api;
