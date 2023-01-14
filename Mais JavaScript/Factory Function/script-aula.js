// function createButton(text) {
//   const numeroSecreto = "53424o32144325218dsad-1923-1256782";

//   function element() {
//     const buttonElement = document.createElement("button");
//     buttonElement.innerText = text;
//     return buttonElement;
//   }

//   return {
//     text,
//     element,
//     numeroSecreto,
//   };
// }

// const btnComprar = createButton("Comprar");
// const btnVender = createButton("vender");

// console.log(btnComprar);
// console.log(btnVender);

function Pessoa(nome) {
  if (!(this instanceof Pessoa)) {
    return new Pessoa(nome);
  }
  this.nome = nome;
}

const designer = Pessoa("André");
console.log(designer);
