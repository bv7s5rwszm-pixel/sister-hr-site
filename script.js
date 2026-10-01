document.addEventListener('DOMContentLoaded', () => {
  // Работа бургер-меню (для мобильных)
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');

  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Плавный скролл по якорям (чтобы не «прыгало», а ехало)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // отменяем стандартный резкий переход
      
      if (navLinks) {
        navLinks.classList.remove('active'); // закрываем меню на мобильном
      }

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // -80px, потому что у нас фиксированная шапка
          behavior: 'smooth'
        });
      }
    });
  });
});
