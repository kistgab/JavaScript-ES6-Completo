// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento
const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

let totalReceb = 0;
let totalTaxas = 0;
transacoes.forEach((item) => {
  const numberValue = Number(value.replace("R$ ", ""));

  item.descricao.toLowerCase().startsWith("taxa")
    ? (totalTaxas += numberValue)
    : (totalReceb += numberValue);
});

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
const trasnportesArray = transportes.split(";");

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

html = html.split("span").join("a");

// Retorne o último caracter da frase
const frase = "Melhor do ano!";
console.log(frase.charAt(frase.length - 1));

// Retorne o total de taxas
const taxas = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let countTaxas = 0;
taxas.forEach((item) => {
  item.trim().toLowerCase().startsWith("taxa") ? countTaxas++ : null;
});
