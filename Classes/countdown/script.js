import Countdown from "./countdown.js";

const tempoParaOAnoNovo = new Countdown("01 January 2023 00:00:00 GMT-0300");

console.log(tempoParaOAnoNovo.total);

setInterval(() => {
  console.log(tempoParaOAnoNovo.total);
}, 1000);
