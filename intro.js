// ============================================================
// INTRO SPLASH SCREEN CONTROLLER
// ============================================================

(function () {
  const splash = document.getElementById('intro-splash');
  if (!splash) return;

  // Khóa cuộn trang khi Intro đang chạy
  document.body.style.overflow = 'hidden';

  function removeIntro() {
    if (splash.dataset.removed) return;
    splash.dataset.removed = 'true';
    splash.remove();
    document.body.style.overflow = '';
  }

  // Khớp chính xác với timeline: 3.8s bắt đầu fade-out (0.5s) -> 4.3s gỡ bỏ hoàn toàn khỏi DOM
  const introTimeout = setTimeout(() => {
    removeIntro();
  }, 4300);

  // Cho phép người dùng click hoặc bấm phím để bỏ qua nhanh nếu muốn
  splash.addEventListener('click', () => {
    clearTimeout(introTimeout);
    removeIntro();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
      clearTimeout(introTimeout);
      removeIntro();
    }
  });
})();
