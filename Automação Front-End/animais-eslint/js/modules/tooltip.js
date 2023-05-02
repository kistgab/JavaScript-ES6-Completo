export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  const onMouseMove = {
    handleEvent(evt) {
      this.tooltipBox.style.top = `${evt.pageY + 20}px`;
      this.tooltipBox.style.left = `${evt.pageX + 15}px`;
    },
  };

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  function createTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);

    return tooltipBox;
  }

  function onMouseOver() {
    const tooltipBox = createTooltipBox(this);

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }

  tooltips.forEach((item) => item.addEventListener("mouseover", onMouseOver));
}
