// function Button(text, background) {
//   this.text = text;
//   this.background = background;
// }

// Button.prototype.element = function () {
//   const buttonElement = document.createElement("button");
//   buttonElement.innerText = this.text;
//   buttonElement.style.background = this.background;
//   return buttonElement;
// };

// const blueButton = new Button("Comprar", "blue");
// console.log(blueButton.element());

class Button {
  constructor(text, background) {
    this.text = text;
    this.background = background;
  }
  get element() {
    const type = this._elementType || "button";
    const buttonElement = document.createElement(type);
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    return buttonElement;
  }

  appendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element);
    return targetElement;
  }

  // If i Want a constructor Method, i can use the "static" keyword in front of the method, so the only way to access it will be Button.method()
  static createButton(text, background) {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = text;
    buttonElement.style.background = background;
    return buttonElement;
  }
}

const blueButton = new Button("Comprar", "blue");
blueButton.appendTo("body");
const blueButtonStatic = Button.createButton("comprar", "blue");

const grayButton = new Button("Click here", "gray");
const btnGray = grayButton.element;
console.log(grayButton);
console.log(btnGray);
