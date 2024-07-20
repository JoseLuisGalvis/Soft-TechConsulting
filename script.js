// Seleccionamos la sección y la imagen
const section = document.getElementById("nosotros");
const img = section.querySelector("img");

// Función para detectar cuando la sección entra en la viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Agregamos un listener al evento scroll
window.addEventListener("scroll", () => {
  if (isElementInViewport(section)) {
    // Agregamos la clase animate cuando la sección entra en la viewport
    img.classList.add("animate");
  }
});
