// Efecto de animación al hacer scroll
const tarjetas = document.querySelectorAll(".tarjeta");
function mostrarTarjetas() {
  const triggerBottom = window.innerHeight * 0.8;

  tarjetas.forEach((tarjeta, i) => {
    const cajaTop = tarjeta.getBoundingClientRect().top;

    if (cajaTop < triggerBottom) {
      // Añadimos un pequeño retraso para un efecto escalonado
      setTimeout(() => {
        tarjeta.classList.add("visible");
      }, i * 50);
    }
  });
}

window.addEventListener("scroll", mostrarTarjetas);
window.addEventListener("load", mostrarTarjetas);
