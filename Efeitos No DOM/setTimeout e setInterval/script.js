// Mude a cor da tela para azul e depois para vermelho a cada 2s.
setInterval(() => {
  document.body.classList.toggle("green");
}, 5000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
let timer;
const cronCounter = document.querySelector("span");
const allButtons = Array.from(document.querySelectorAll("button"));
allButtons.forEach((btn) => btn.addEventListener("click", handleCronometerControl));

function handleCronometerControl(evt) {
  function finishTimer(finishType = "FINISH") {
    clearInterval(timer);
    finishType.toUpperCase() === "FINISH" ? (cronCounter.innerText = "0") : null;
    startBtn.disabled = false;
  }

  function startTimer() {
    const startBtn = allButtons.find((btn) => btn.dataset.cronometer === "start");
    startBtn.disabled = true;
    timer = setInterval(() => {
      cronCounter.innerText++;
    }, 1000);
  }

  if (this.dataset.cronometer) {
    switch (this.dataset.cronometer) {
      case "start":
        startTimer();
        break;

      case "pause":
        finishTimer("Pause");
        break;

      case "finish":
        finishTimer();
        break;
    }
  }
}
