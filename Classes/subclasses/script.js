class Veiculo {
  constructor(rodas, combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel;
  }

  acelerar() {
    console.log("Acelerou");
  }
}

class Moto extends Veiculo {
  constructor(rodas, combustivel, capacete) {
    super(rodas, combustivel);
    this.capacete = capacete;
  }
  acelerar() {
    console.log("Acelerou rápido");
    super.acelerar();
  }
  empinar() {
    console.log("Moto Empinou com " + this.rodas + " rodas");
  }
}

const honda = new Moto(2, "Gasolina", true);
const civic = new Veiculo(4);
