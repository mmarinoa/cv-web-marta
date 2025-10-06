// script.js
document.getElementById("scrollBtn").addEventListener("click", function() {
  document.getElementById("secciones").scrollIntoView({ behavior: "smooth" });
});

function copiarTexto(id) {
  const texto = document.getElementById(id).textContent;
  navigator.clipboard.writeText(texto).then(() => {
    alert(`Copiado: ${texto}`);
  });
}


document.getElementById("mensajeBtn").addEventListener("click", function() {
  document.getElementById("saludo").textContent = "¡Hola Marta! Tu web está viva 🎉";
});
