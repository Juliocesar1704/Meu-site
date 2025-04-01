let lastScrollTop = 0; // Guarda a posição de rolagem anterior

// Efeito de esconder o cabeçalho ao rolar para baixo
window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  let header = document.getElementById("greets");

  // Verifica se rolou para baixo e se a rolagem é maior que a posição anterior
  if (currentScroll > lastScrollTop) {
    // Se rolou para baixo, esconde o cabeçalho
    header.style.top = "-100px"; // Ajuste o valor conforme o tamanho do seu cabeçalho
  } else {
    // Se rolou para cima, mostra o cabeçalho
    header.style.top = "0";
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evita valores negativos
});