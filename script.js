document.addEventListener("DOMContentLoaded", function() {
    const fadeIns = document.querySelectorAll('.fade-in');
  
    const checkFadeIn = () => {
      fadeIns.forEach(fadeIn => {
        const rect = fadeIn.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          fadeIn.classList.add('show');
        } else {
          fadeIn.classList.remove('show');
        }
      });
    };
  
    window.addEventListener('scroll', checkFadeIn);
    checkFadeIn(); // Check on page load
  });
  
  