// Liste 5 objetos nativos
// Object;
// String;
// Number;
// Array;
// Boolean;

// Liste 5 objetos do browser
// Document;
// HTMLCollection;
// NodeList;
// Window.history;
// Window;

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
if (typeof document.webkitHidden !== "undefined") {
  console.log("Existe");
} else {
  console.log("Non exciste");
}

if (typeof document.webkitCancelFullScreen !== "undefined") {
  console.log("Existe");
} else {
  console.log("Non exciste");
}
