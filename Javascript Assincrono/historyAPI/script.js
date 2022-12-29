const links = document.querySelectorAll("a");
links.forEach((link) => link.addEventListener("click", handleClick));

function handleClick(evt) {
  evt.preventDefault();
  fetchPage(evt.target.href);
  window.history.pushState(null, null, evt.target.href);
}

async function fetchPage(url) {
  document.querySelector(".content").innerHTML = "Carregando...";
  const page = await (await fetch(url)).text();
  replaceContent(page);
}

function replaceContent(newText) {
  const newHTML = document.createElement("div");
  newHTML.innerHTML = newText;

  const oldContent = document.querySelector(".content");
  const newContent = newHTML.querySelector(".content");
  oldContent.innerHTML = newContent.innerHTML;

  document.title = newHTML.querySelector("title").innerText;
}

window.addEventListener("popstate", () => {
  fetchPage(window.location.href);
});
