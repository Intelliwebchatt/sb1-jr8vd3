export const animateOnScroll = () => {
  const elements = document.querySelectorAll('.animate__animated');

  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

    if (isVisible) {
      const animationClass = element.getAttribute('data-animation') || 'animate__bounceIn';
      element.classList.add(animationClass);
    }
  });
};

export const setupScrollAnimation = () => {
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Initial check
};