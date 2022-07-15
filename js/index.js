const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".iconos");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("iconos_visible");

  if (navMenu.classList.contains("iconos_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});