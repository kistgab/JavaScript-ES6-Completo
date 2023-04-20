// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const listItems = document.querySelectorAll("li");
for (const listItem of listItems) {
  listItem.classList.add("my-extra-class");
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window
for (const prop in window) {
  console.log(prop);
}
