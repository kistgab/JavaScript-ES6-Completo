const controles = document.getElementById("controles");
const cssBlock = document.querySelector(".css");
const btn = document.querySelector(".btn");

controles.addEventListener("change", handleChange);

const handleStyle = {
  element: btn,
  height(value) {
    this.element.style.height = `${value}px`;
  },
  width(value) {
    this.element.style.width = `${value}px`;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  fontSize(value) {
    this.element.style.fontSize = `${value}rem`;
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  text(value) {
    this.element.innerText = value;
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = `${value}px`;
  },
};

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;
  handleStyle[name](value);
  saveValues(name, value);
  showCss();
}

function showCss() {
  console.log(btn.style.cssText);
  cssBlock.innerHTML = "<span>" + btn.style.cssText.split("; ").join(";</span><span>");
}

function saveValues(propName, value) {
  localStorage[propName] = value;
}

initValues();

function initValues() {
  const campos = Array.from(controles.elements);
  campos.forEach((campo) => {
    if (localStorage[campo.name]) {
      handleStyle[campo.name](localStorage[campo.name]);
      campo.value = localStorage[campo.name];
    }
  });
  showCss();
}
