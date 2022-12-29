// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursosHTML = Array.from(document.querySelectorAll(".curso"));
const cursos = cursosHTML.map((item) => {
  const title = item.querySelector("h1").innerText;
  const desc = item.querySelector("p").innerText;
  const classesCount = item.querySelector(".aulas").innerText;
  const hoursCount = item.querySelector(".horas").innerText;

  return {
    title,
    desc,
    classesCount,
    hoursCount,
  };
});
console.log(cursos);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const greatestNumbers = numeros.filter((number) => number > 100);
console.log(greatestNumbers);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];
console.log(`Baixo existe ${instrumentos.some((instrumento) => instrumento.toUpperCase() === "BAIXO")}`);

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];

const valorTotal = compras.reduce((acc, item) => {
  const priceValue = Number(item.preco.toUpperCase().replace("R$", "").replace(",", ".").trim());
  return (acc += priceValue);
}, 0);

console.log(valorTotal);
