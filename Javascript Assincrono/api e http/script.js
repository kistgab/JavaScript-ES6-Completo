const url = "https://cors-anywhere.herokuapp.com/https://www.google.com/";
fetch(url)
  .then((response) => response.text())
  .then((text) => console.log(text));
