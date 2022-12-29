// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");

const menuClone = menu.cloneNode(true);
copy.appendChild(menuClone);

// Selecione o primeiro DT da dl de Faq
const firstDT = document.querySelector(".faq dl dt:first-child");
console.log(firstDT.innerText);

// Selecione o DD referente ao primeiro DT
const firstDD = firstDT.nextElementSibling;
console.log(firstDD.innerText);

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector(".faq");
const animais = document.querySelector(".animais");

faq.innerHTML = animais.innerHTML;
