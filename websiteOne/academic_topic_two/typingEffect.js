document.addEventListener("DOMContentLoaded", function () {
  const headerText = "🎨 Stable Diffusion, an AI image generation technology 🤖";
  const headerElement = document.querySelector("header h1");
  let currentIndex = 0;

  function typeEffect() {
    if (currentIndex < headerText.length) {
      headerElement.textContent += headerText.charAt(currentIndex);
      currentIndex++;
      setTimeout(typeEffect, 100);
    }
  }

  if (headerElement) {
    headerElement.textContent = "";
    typeEffect();
  }
});
