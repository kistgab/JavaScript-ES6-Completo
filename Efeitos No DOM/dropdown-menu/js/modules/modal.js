export default function initModal() {
  const openButton = document.querySelector("[data-modal='abrir']");
  const closeButton = document.querySelector("[data-modal='fechar']");
  const containerModal = document.querySelector("[data-modal='container']");

  if (openButton && closeButton && closeButton) {
    function toggleModal(evt) {
      evt.preventDefault();
      containerModal.classList.toggle("ativo");
    }

    function clickOutOfModal(evt) {
      if (evt.target === containerModal) {
        toggleModal(evt);
      }
    }

    openButton.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", clickOutOfModal);
  }
}
