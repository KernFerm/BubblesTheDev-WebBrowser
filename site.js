(() => {
  const header = document.querySelector('header');
  const navLinks = [...document.querySelectorAll('nav a[href^="#"]')];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  let ticking = false;
  const updateHeader = () => {
    ticking = false;
    header?.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateHeader);
  }, { passive: true });
  updateHeader();

  if ('IntersectionObserver' in window && navLinks.length && sections.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible?.target?.id) return;

      navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${visible.target.id}`);
      });
    }, {
      rootMargin: '-24% 0px -62% 0px',
      threshold: [0.15, 0.35, 0.6]
    });

    sections.forEach((section) => sectionObserver.observe(section));
  }
})();
