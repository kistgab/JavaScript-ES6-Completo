export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");
  const activeClass = "ativo";

  function activeTab(index) {
    tabContent.forEach((section) => section.classList.remove(activeClass));
    const animationDirection = tabContent[index].dataset.anime;
    tabContent[index].classList.add(activeClass, animationDirection);
  }

  if (tabContent.length && tabMenu.length) {
    tabContent[0].classList.add(activeClass);

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
