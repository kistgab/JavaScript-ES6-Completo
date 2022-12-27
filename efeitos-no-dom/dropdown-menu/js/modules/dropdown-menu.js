import outsideClick from "./outsideClick";

export default function initDropDownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");
  const userEvents = ["touchstart", "click"];

  dropdownMenus.forEach((menu) => {
    userEvents.forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(evt) {
    evt.preventDefault();
    this.classList.add("active");

    outsideClick(this, userEvents, () => {
      this.classList.remove("active");
    });
  }
}
