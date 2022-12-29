export default function initAnimaNumeros() {
  const observerTarget = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, { attributes: true });

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumeros();
    }
  }

  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");
    numeros.forEach((numero) => {
      const total = Number(numero.innerText);
      const increment = Math.floor(total / 100);
      let count = 0;

      const timer = setInterval(() => {
        count += increment;
        if (count > total) {
          count = total;
          clearInterval(timer);
        }
        numero.innerText = count;
      }, 25 * Math.random());
    });
  }
}
