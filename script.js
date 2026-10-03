/**
 * Captain Arpit — A Pirate's Tale
 * Interactive Scripts: Floating Canvas Particles, Navigation, Scroll Reveal, Form Handling
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. Floating Particle Stars (Ocean Fireflies / Bioluminescence) ── */
  const canvas = document.getElementById('particles-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.15 - 0.1;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.pulse = Math.random() * Math.PI * 2;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulse += 0.02;
        if (this.x < -10 || this.x > canvas.width + 10 || this.y < -10 || this.y > canvas.height + 10) {
          this.reset();
        }
      }
      draw() {
        const alpha = this.opacity * (0.5 + 0.5 * Math.sin(this.pulse));
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 168, 67, ${alpha})`;
        ctx.fill();
        
        // Ambient golden glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 168, 67, ${alpha * 0.1})`;
        ctx.fill();
      }
    }

    const particleCount = window.innerWidth < 768 ? 40 : 80;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  }

  /* ── 2. Navigation Scroll State ── */
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  /* ── 3. Active Nav Link on Scroll ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__links a');
  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navLinks.forEach(l =>
            l.classList.toggle('active', l.getAttribute('href') === `#${e.target.id}`)
          );
        }
      });
    }, { rootMargin: '-40% 0px -60% 0px' });
    sections.forEach(s => navObserver.observe(s));
  }

  /* ── 4. Mobile Menu & Keyboard Accessibility ── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    const closeMobileMenu = () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
      hamburger.setAttribute('aria-expanded', 'false');
    };

    const toggleMobileMenu = () => {
      const isOpen = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = isOpen ? 'hidden' : '';
      hamburger.setAttribute('aria-expanded', String(isOpen));
    };

    hamburger.addEventListener('click', toggleMobileMenu);

    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', closeMobileMenu);
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }

  /* ── 5. Scroll Reveal Animations ── */
  const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const revealObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => revealObs.observe(el));
  } else {
    // Fallback if IntersectionObserver is not supported
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ── 6. Animated Skill Bars ── */
  const skillBars = document.querySelectorAll('.skill-bar__fill');
  if (skillBars.length && 'IntersectionObserver' in window) {
    const skillObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const width = e.target.dataset.width || '0';
          e.target.style.width = width + '%';
          skillObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    skillBars.forEach(b => skillObs.observe(b));
  } else {
    skillBars.forEach(b => {
      b.style.width = (b.dataset.width || '0') + '%';
    });
  }

  /* ── 7. Message in a Bottle Contact Form ── */
  const form = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  if (form && formSuccess) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = document.getElementById('submitBtn');
      if (btn) {
        btn.textContent = 'Launching bottle…';
        btn.disabled = true;
      }
      setTimeout(() => {
        form.style.display = 'none';
        formSuccess.classList.add('show');
      }, 1400);
    });
  }

  /* ── 8. Smooth Scrolling Anchor Links ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});
