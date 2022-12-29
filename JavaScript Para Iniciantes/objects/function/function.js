// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragraphs = document.querySelectorAll("p");
const paragraphsLength = Array.prototype.reduce.call(paragraphs, (acc, item) => acc + item.innerText.length, 0);

console.log(paragraphsLength);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElementoHTML(tag, classe, conteudo) {
  const element = document.createElement(tag);
  classe ? (element.classList = classe) : null;
  conteudo ? (element.innerText = conteudo) : null;
  return element;
}

const paragraph = criarElementoHTML("p", "teste", "Lorem...");
console.log(paragraph);
// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const criarH1 = criarElementoHTML.bind(null, "h1", "titulo");
console.log(criarH1("Cabecalho 1"));
