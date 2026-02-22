// src/scripts/typewriter.js
export function initTypewriter(elementId, wordsArray) {
  const dynamicElement = document.getElementById(elementId);
  if (!dynamicElement) return;

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const words = wordsArray;

  function typeEffect() {
    if (!dynamicElement) return;

    const currentWord = words[wordIndex];

    if (isDeleting) {
      dynamicElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      dynamicElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 2000);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 500);
      return;
    }

    const speed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, speed);
  }

  // Iniciar el efecto
  document.addEventListener('DOMContentLoaded', typeEffect);
}