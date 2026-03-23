/* ========================================
   BELLOWING ACRES — MAIN.JS
   GSAP ScrollTrigger + Premium Interactions
   ======================================== */

(function () {
  'use strict';

  // ── GSAP Setup ──
  gsap.registerPlugin(ScrollTrigger);

  // ── Nav Scroll Effect ──
  const nav = document.getElementById('nav');
  if (nav) {
    ScrollTrigger.create({
      start: 'top -60',
      end: 99999,
      onUpdate: (self) => {
        if (self.direction === 1 || window.scrollY > 60) {
          nav.classList.add('scrolled');
        }
        if (window.scrollY <= 60) {
          nav.classList.remove('scrolled');
        }
      },
    });
  }

  // ── Mobile Nav Toggle ──
  const hamburger = document.getElementById('hamburger');
  const navMobile = document.getElementById('navMobile');

  if (hamburger && navMobile) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navMobile.classList.toggle('open');
      document.body.style.overflow = navMobile.classList.contains('open')
        ? 'hidden'
        : '';
    });

    // Close on link click
    navMobile.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navMobile.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ── Scroll Reveal Animations ──
  // Every element with .anim fades up on scroll
  gsap.utils.toArray('.anim').forEach((el) => {
    gsap.from(el, {
      y: 50,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });
  });

  // ── Staggered Card Animations ──
  gsap.utils.toArray('.cards-grid').forEach((grid) => {
    const cards = grid.querySelectorAll('.glass-card, .animal-card, .help-card, .founder-card, .rescue-card');
    if (cards.length === 0) return;

    gsap.from(cards, {
      y: 70,
      opacity: 0,
      duration: 0.75,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: grid,
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    });
  });

  // ── Counter Animations ──
  document.querySelectorAll('.stat-number').forEach((counter) => {
    const target = parseInt(counter.getAttribute('data-target'), 10);
    const suffix = counter.getAttribute('data-suffix') || '';
    if (isNaN(target)) return;

    const obj = { val: 0 };

    ScrollTrigger.create({
      trigger: counter,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: target,
          duration: 2.2,
          ease: 'power2.out',
          onUpdate: () => {
            counter.textContent = Math.round(obj.val).toLocaleString() + suffix;
          },
        });
      },
    });
  });

  // ── News Badge Stagger ──
  const newsLogos = document.querySelector('.news-logos');
  if (newsLogos) {
    const badges = newsLogos.querySelectorAll('.news-badge');
    gsap.from(badges, {
      scale: 0.85,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(1.4)',
      scrollTrigger: {
        trigger: newsLogos,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }

  // ── Divider Grow Animation ──
  gsap.utils.toArray('.divider').forEach((div) => {
    gsap.from(div, {
      scaleX: 0,
      duration: 1.2,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: div,
        start: 'top 92%',
        toggleActions: 'play none none none',
      },
    });
  });

  // ── Magnetic Button Effect ──
  document.querySelectorAll('.btn-primary, .btn-outline, .btn-gold-outline').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, {
        x: x * 0.2,
        y: y * 0.2,
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)',
      });
    });
  });

  // ── Parallax on Hero Video ──
  // Disabled — keeps hero asset locked in frame
  // If you want a subtle effect later, use y: 30 max

  // ── Why Rescue Section Parallax ──
  const whyRescueVideo = document.querySelector('.why-rescue .hero-video-wrap');
  if (whyRescueVideo) {
    gsap.to(whyRescueVideo, {
      y: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: '.why-rescue',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }

  // ── Quote Card Reveal ──
  const quoteCard = document.querySelector('.quote-card');
  if (quoteCard) {
    gsap.from(quoteCard, {
      x: -40,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: quoteCard,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }

  // ── Smooth Scroll for Anchor Links ──
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
   BELLOWING ACRES — MAIN.JS
   GSAP ScrollTrigger + Premium Interactions
   ======================================== */

(function () {
  'use strict';

  // ── GSAP Setup ──
  gsap.registerPlugin(ScrollTrigger);

  // ── Nav Scroll Effect ──
  const nav = document.getElementById('nav');
  if (nav) {
    ScrollTrigger.create({
      start: 'top -60',
      end: 99999,
      onUpdate: (self) => {
        if (self.direction === 1 || window.scrollY > 60) {
          nav.classList.add('scrolled');
        }
        if (window.scrollY <= 60) {
          nav.classList.remove('scrolled');
        }
      },
    });
  }

  // ── Mobile Nav Toggle ──
  const hamburger = document.getElementById('hamburger');
  const navMobile = document.getElementById('navMobile');

  if (hamburger && navMobile) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navMobile.classList.toggle('open');
      document.body.style.overflow = navMobile.classList.contains('open')
        ? 'hidden'
        : '';
    });

    // Close on link click
    navMobile.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navMobile.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ── Scroll Reveal Animations ──
  // Every element with .anim fades up on scroll
  gsap.utils.toArray('.anim').forEach((el) => {
    gsap.from(el, {
      y: 50,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });
  });

  // ── Staggered Card Animations ──
  gsap.utils.toArray('.cards-grid').forEach((grid) => {
    const cards = grid.querySelectorAll('.glass-card, .animal-card, .help-card, .founder-card, .rescue-card');
    if (cards.length === 0) return;

    gsap.from(cards, {
      y: 70,
      opacity: 0,
      duration: 0.75,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: grid,
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    });
  });

  // ── Counter Animations ──
  document.querySelectorAll('.stat-number').forEach((counter) => {
    const target = parseInt(counter.getAttribute('data-target'), 10);
    const suffix = counter.getAttribute('data-suffix') || '';
    if (isNaN(target)) return;

    const obj = { val: 0 };

    ScrollTrigger.create({
      trigger: counter,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: target,
          duration: 2.2,
          ease: 'power2.out',
          onUpdate: () => {
            counter.textContent = Math.round(obj.val).toLocaleString() + suffix;
          },
        });
      },
    });
  });

  // ── News Badge Stagger ──
  const newsLogos = document.querySelector('.news-logos');
  if (newsLogos) {
    const badges = newsLogos.querySelectorAll('.news-badge');
    gsap.from(badges, {
      scale: 0.85,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(1.4)',
      scrollTrigger: {
        trigger: newsLogos,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }

  // ── Divider Grow Animation ──
  gsap.utils.toArray('.divider').forEach((div) => {
    gsap.from(div, {
      scaleX: 0,
      duration: 1.2,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: div,
        start: 'top 92%',
        toggleActions: 'play none none none',
      },
    });
  });

  // ── Magnetic Button Effect ──
  document.querySelectorAll('.btn-primary, .btn-outline, .btn-gold-outline').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, {
        x: x * 0.2,
        y: y * 0.2,
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)',
      });
    });
  });

  // ── Parallax on Hero Video ──
  // Disabled — keeps hero asset locked in frame
  // If you want a subtle effect later, use y: 30 max

  // ── Why Rescue Section Parallax ──
  const whyRescueVideo = document.querySelector('.why-rescue .hero-video-wrap');
  if (whyRescueVideo) {
    gsap.to(whyRescueVideo, {
      y: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: '.why-rescue',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }

  // ── Quote Card Reveal ──
  const quoteCard = document.querySelector('.quote-card');
  if (quoteCard) {
    gsap.from(quoteCard, {
      x: -40,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: quoteCard,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }

  // ── Smooth Scroll for Anchor Links ──
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        gsap.to(window, {
          scrollTo: {
            y: target,
            offsetY: 80,
          },
          duration: 1,
          ease: 'power3.inOut',
        });
      }
    });
  });

  // ── Stats Section Border Glow ──
  const statsSection = document.querySelector('.stats');
  if (statsSection) {
    ScrollTrigger.create({
      trigger: statsSection,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        statsSection.style.transition = 'border-color 0.8s ease';
        statsSection.style.borderColor = 'rgba(200, 164, 78, 0.35)';
      },
    });
  }

  // ── Newsletter Form Interaction ──
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = newsletterForm.querySelector('.btn');
      const input = newsletterForm.querySelector('input');
      if (btn && input && input.value) {
        const originalText = btn.textContent;
        btn.textContent = 'Subscribed!';
        btn.style.background = 'var(--green)';
        btn.style.color = 'var(--text)';
        input.value = '';
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.style.color = '';
        }, 3000);
      }
    });
  }

  // ── Founder Card 3D Tilt Effect ──
  document.querySelectorAll('.founder-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(card, {
        rotateY: x * 8,
        rotateX: -y * 8,
        duration: 0.4,
        ease: 'power2.out',
        transformPerspective: 800,
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.6)',
      });
    });
  });

  // ── Bubble Particles (Canvas) ──
  const hero = document.querySelector('.hero');
  if (hero) {
    const canvas = document.createElement('canvas');
    canvas.style.cssText =
      'position:absolute;inset:0;z-index:1;pointer-events:none;opacity:0.4;';
    hero.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const particles = [];
    const count = 35;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: -(Math.random() * 0.4 + 0.1),
        opacity: Math.random() * 0.6 + 0.2,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 164, 78, ${p.opacity})`;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }
    animate();
  }

  // ── Preloader / Page Reveal ──
  window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    gsap.from('body', {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
    });
  });
})();
