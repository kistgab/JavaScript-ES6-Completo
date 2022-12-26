function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");
  const activeClass = "ativo";

  if (tabContent.length && tabMenu.length) {
    tabContent[0].classList.add(activeClass);

    function activeTab(index) {
      tabContent.forEach((section) => section.classList.remove(activeClass));
      const animationDirection = tabContent[index].dataset.anime;
      tabContent[index].classList.add(activeClass, animationDirection);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

function initAccordion() {
  const accordionList = document.querySelectorAll("[data-anime='accordion'] dt");
  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    accordionList.forEach((item) => item.addEventListener("click", activeAccordion));

    function activeAccordion(event) {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
  }
}

function initSmoothScroll() {
  const linksInternos = document.querySelectorAll("[data-menu='suave'] a[href^='#']");
  linksInternos.forEach((link) => link.addEventListener("click", scrollToSection));

  function scrollToSection(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
    });

    // forma alternativa
    // window.scrollTo({
    //   top: section.offsetTop,
    //   behavior: "smooth",
    // });
  }
}

function initAnimacaoScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;
    window.addEventListener("scroll", animaScroll);

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        }
      });
    }

    animaScroll();
  }
}

initTabNav();
initAccordion();
initSmoothScroll();
initAnimacaoScroll();
