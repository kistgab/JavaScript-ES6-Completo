// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const btnBuscar = document.querySelector("#btnBuscar");
btnBuscar.addEventListener("click", buscarCEP);

function buscarCEP(evt) {
  evt.preventDefault();
  const cep = document.querySelector("#cep").value;
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((json) => {
      const div = document.querySelector("#address");
      for (const [key, value] of Object.entries(json)) {
        const span = document.createElement("span");
        span.innerText = `${key}: ${value}`;
        div.appendChild(span);
      }
    });
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
atualizaPrecoBTC();
// const timerAtualizaPrecoBTC = setInterval(() => atualizaPrecoBTC(), 30000);

function atualizaPrecoBTC() {
  const txtPreco = document.querySelector(".preco");
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((json) => {
      txtPreco.innerText = `R$ ${json["BRL"].buy}`.replace(".", ",");
      console.log("Atualizou");
    });
}

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const btnProxima = document.querySelector("#proxima");
btnProxima.addEventListener("click", contarPiada);

function contarPiada(evt) {
  evt.preventDefault();
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((json) => {
      const imgPiada = document.querySelector("img");
      const txtPiada = document.querySelector("#piada");
      imgPiada.src = json.icon_url;
      txtPiada.innerText = json.value;
    });
}
