export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    events.forEach((evt) => {
      setTimeout(() => {
        html.addEventListener(evt, handleOutsideClick);
      }, 0);
    });
    element.setAttribute(outside, "");
  }

  function handleOutsideClick(evt) {
    if (!element.contains(evt.target)) {
      element.removeAttribute(outside);
      events.forEach((evt) => html.removeEventListener(evt, handleOutsideClick));
      callback();
    }
  }
}
