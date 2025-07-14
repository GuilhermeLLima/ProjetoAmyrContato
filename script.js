document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contato");
  const mensagemEnvio = document.getElementById("mensagem-envio");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      mensagemEnvio.textContent = "Mensagem enviada com sucesso!";
      form.reset();
    });
  }
});
