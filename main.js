// Minimal JS: quote form confirmation (no external dependencies)
(function () {
  const form = document.querySelector('[data-quote-form]');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic client-side UX only. Server handling can be added later.
    const msg = document.querySelector('[data-form-success]');
    if (msg) {
      msg.hidden = false;
      msg.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    form.reset();
  });
})();
