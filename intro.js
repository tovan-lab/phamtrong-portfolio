// ============================================================
// INTRO SPLASH SCREEN CONTROLLER
// ============================================================

(function () {
  const splash = document.getElementById('intro-splash');
  if (!splash) return;

  // Lock scrolling while splash is active
  document.body.style.overflow = 'hidden';

  function dismissIntro() {
    if (splash.dataset.dismissed) return;
    splash.dataset.dismissed = 'true';
    splash.style.transition = 'transform 0.7s cubic-bezier(0.77, 0, 0.175, 1), opacity 0.5s ease';
    splash.style.transform = 'translateY(-100%)';
    splash.style.opacity = '0.98';

    setTimeout(() => {
      splash.style.display = 'none';
      document.body.style.overflow = '';
    }, 750);
  }

  // Automatic cleanup after CSS animation completes (around 5.4s)
  setTimeout(() => {
    dismissIntro();
  }, 5450);

  // Allow skipping on click or pressing Escape / Space / Enter
  const skipBtn = splash.querySelector('.intro-skip-btn');
  if (skipBtn) {
    skipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dismissIntro();
    });
  }

  splash.addEventListener('click', dismissIntro);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
      dismissIntro();
    }
  });
})();
