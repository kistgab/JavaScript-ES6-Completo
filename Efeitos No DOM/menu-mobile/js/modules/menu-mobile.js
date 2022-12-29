import outsideClick from "./outsideclick.js";

export default function () {
  const menuBtn = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector("[data-menu='list']");
  const events = ["click", "touchStart"];

  if (menuBtn) {
    function toggleMenu(evt) {
      menuList.classList.add("active");
      menuBtn.classList.add("active");

      outsideClick(menuList, events, () => {
        menuList.classList.remove("active");
        menuBtn.classList.remove("active");
      });
    }

    events.forEach((evt) => menuBtn.addEventListener(evt, toggleMenu));
  }
}
