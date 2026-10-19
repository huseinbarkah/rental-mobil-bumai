/**
 * Bumai Rentcar (BMR) — Main Application Script
 * Minimal, accessible, vanilla JavaScript for global navbar & hero interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initServicesCarousel();
  initWhyCarousel();
  initFaqAccordion();
  initDynamicYear();
});

function initNavbar() {
  const header = document.getElementById('site-header');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileDrawer = document.getElementById('mobile-nav');
  const backdrop = document.getElementById('mobile-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-cta .btn');

  if (!menuToggle || !mobileDrawer) return;

  // Toggle state helper
  let isOpen = false;

  function openMenu() {
    isOpen = true;
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Tutup menu navigasi');
    mobileDrawer.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    if (backdrop) backdrop.classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  function closeMenu() {
    isOpen = false;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Buka menu navigasi');
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    if (backdrop) backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Toggle click event
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close on backdrop click
  if (backdrop) {
    backdrop.addEventListener('click', () => {
      if (isOpen) closeMenu();
    });
  }

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
      closeMenu();
      menuToggle.focus();
    }
  });

  // Close menu when clicking on any mobile navigation link
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isOpen) {
        closeMenu();
      }
    });
  });

  // Add subtle scrolled state to header on window scroll
  function handleScroll() {
    if (window.scrollY > 12) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
}

/**
 * Initializes responsive layout and mobile carousel for "Mengapa Memilih BMR?" section.
 * - On Desktop (>768px): Static 2-column grid. Disables carousel logic and resets position.
 * - On Mobile (<=768px): Smooth centered carousel with elevated active card and arrow navigation.
 */
function initWhyCarousel() {
  const section = document.getElementById('mengapa-bmr');
  if (!section) return;

  const grid = section.querySelector('.why-grid');
  const cards = Array.from(section.querySelectorAll('.why-card'));
  const prevBtn = section.querySelector('.why-prev-arrow');
  const nextBtn = section.querySelector('.why-next-arrow');

  if (!grid || cards.length === 0) return;

  let activeIndex = 0;
  let isProgrammaticScroll = false;
  let scrollTimeout = null;

  function isMobile() {
    return window.matchMedia('(max-width: 768px)').matches;
  }

  function getPrefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  // Update active card state, elevation, and arrow buttons
  function setActiveCard(index, shouldScroll = false) {
    if (index < 0) index = 0;
    if (index >= cards.length) index = cards.length - 1;

    activeIndex = index;

    cards.forEach((card, i) => {
      if (i === activeIndex && isMobile()) {
        card.classList.add('is-active');
        card.setAttribute('aria-current', 'true');
      } else {
        card.classList.remove('is-active');
        card.removeAttribute('aria-current');
      }
    });

    if (prevBtn) {
      const isDisabled = activeIndex === 0;
      prevBtn.disabled = isDisabled;
      prevBtn.setAttribute('aria-disabled', isDisabled ? 'true' : 'false');
    }
    if (nextBtn) {
      const isDisabled = activeIndex === cards.length - 1;
      nextBtn.disabled = isDisabled;
      nextBtn.setAttribute('aria-disabled', isDisabled ? 'true' : 'false');
    }

    if (shouldScroll && isMobile()) {
      const targetCard = cards[activeIndex];
      const targetLeft = targetCard.offsetLeft - (grid.clientWidth - targetCard.clientWidth) / 2;
      isProgrammaticScroll = true;
      grid.scrollTo({
        left: targetLeft,
        behavior: getPrefersReducedMotion() ? 'auto' : 'smooth'
      });
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isProgrammaticScroll = false;
      }, 400);
    }
  }

  // Detect card closest to center during touch scrolling
  function handleScroll() {
    if (!isMobile() || isProgrammaticScroll) return;

    const gridCenter = grid.scrollLeft + grid.clientWidth / 2;
    let closestIndex = activeIndex;
    let minDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(gridCenter - cardCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveCard(closestIndex, false);
    }
  }

  // Previous arrow click
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (activeIndex > 0) {
        setActiveCard(activeIndex - 1, true);
      }
    });
  }

  // Next arrow click
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (activeIndex < cards.length - 1) {
        setActiveCard(activeIndex + 1, true);
      }
    });
  }

  // Keyboard navigation on grid
  grid.addEventListener('keydown', (e) => {
    if (!isMobile()) return;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (activeIndex > 0) setActiveCard(activeIndex - 1, true);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      if (activeIndex < cards.length - 1) setActiveCard(activeIndex + 1, true);
    }
  });

  // Clicking a card directly centers it on mobile
  cards.forEach((card, index) => {
    card.addEventListener('click', () => {
      if (isMobile() && index !== activeIndex) {
        setActiveCard(index, true);
      }
    });
  });

  // Passive scroll listener with requestAnimationFrame
  let ticking = false;
  grid.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Handle breakpoint transitions
  function handleResize() {
    if (isMobile()) {
      setActiveCard(activeIndex, false);
      const targetCard = cards[activeIndex];
      if (targetCard) {
        const targetLeft = targetCard.offsetLeft - (grid.clientWidth - targetCard.clientWidth) / 2;
        grid.scrollLeft = targetLeft;
      }
    } else {
      grid.scrollLeft = 0;
      cards.forEach(card => {
        card.classList.remove('is-active');
        card.removeAttribute('aria-current');
      });
    }
  }

  let resizeDebounce = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeDebounce);
    resizeDebounce = setTimeout(handleResize, 60);
  }, { passive: true });

  // Initialize state
  if (isMobile()) {
    setActiveCard(0, false);
  }
}

/**
 * Initializes accessible single-open accordion behavior for the FAQ section.
 * Supports click toggle, ARIA expanded state synchronization, and keyboard navigation.
 */
function initFaqAccordion() {
  const triggers = document.querySelectorAll('.faq-trigger');
  if (!triggers.length) return;

  triggers.forEach((trigger, index) => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.faq-item');
      if (!item) return;
      const isCurrentlyOpen = item.classList.contains('is-open');

      // Close all items (single open accordion rule)
      triggers.forEach(t => {
        const parent = t.closest('.faq-item');
        if (parent) {
          parent.classList.remove('is-open');
        }
        t.setAttribute('aria-expanded', 'false');
      });

      // Toggle current item if it was closed
      if (!isCurrentlyOpen) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });

    // Keyboard Arrow navigation between accordion items
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const next = triggers[(index + 1) % triggers.length];
        next.focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prev = triggers[(index - 1 + triggers.length) % triggers.length];
        prev.focus();
      }
    });
  });
}

/**
 * Dynamically updates the copyright year in the footer.
 */
function initDynamicYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/**
 * Bumai Rentcar (BMR) — Editorial Services Carousel
 * Features:
 * - Real photograph cards with 16:10 ratio & editorial styling.
 * - Responsive 3-card (desktop), 2-card (tablet), 1-card (mobile) layout.
 * - Automatic 3-second progression with infinite circular wrapping via clones.
 * - Manual Previous & Next arrow navigation with accessible labels.
 * - Manual play/pause toggle button with ARIA state.
 * - Automatic pause on pointer hover, focus inside carousel, and hidden browser tab.
 * - Strict adherence to prefers-reduced-motion.
 * - Mobile touch swipe gestures (left/right).
 * - Keyboard navigation (ArrowLeft / ArrowRight).
 * - Debounced resize recalculation for zero layout shifts.
 */
function initServicesCarousel() {
  const carousel = document.getElementById('services-carousel');
  const track = document.getElementById('services-track');
  const prevBtn = document.getElementById('services-prev');
  const nextBtn = document.getElementById('services-next');
  const pauseBtn = document.getElementById('services-pause');
  const dotsContainer = document.getElementById('services-dots');
  const dots = dotsContainer ? Array.from(dotsContainer.querySelectorAll('.services-dot')) : [];

  if (!carousel || !track || !prevBtn || !nextBtn) return;

  const originalCards = Array.from(track.children);
  const cardCount = originalCards.length;
  if (cardCount === 0) return;

  // Prepare clones for seamless infinite looping
  // Layout in track: [Clone 0..N-1, Real 0..N-1, Clone 0..N-1]
  const prefixFragment = document.createDocumentFragment();
  const suffixFragment = document.createDocumentFragment();

  originalCards.forEach((card) => {
    const prefixClone = card.cloneNode(true);
    prefixClone.setAttribute('aria-hidden', 'true');
    prefixClone.removeAttribute('id');
    prefixClone.classList.add('is-clone');
    prefixClone.querySelectorAll('a, button').forEach(el => el.setAttribute('tabindex', '-1'));
    prefixFragment.appendChild(prefixClone);

    const suffixClone = card.cloneNode(true);
    suffixClone.setAttribute('aria-hidden', 'true');
    suffixClone.removeAttribute('id');
    suffixClone.classList.add('is-clone');
    suffixClone.querySelectorAll('a, button').forEach(el => el.setAttribute('tabindex', '-1'));
    suffixFragment.appendChild(suffixClone);
  });

  track.insertBefore(prefixFragment, track.firstChild);
  track.appendChild(suffixFragment);

  const allCards = Array.from(track.children);
  let currentIndex = cardCount; // start at first real card (index cardCount)
  let isAnimating = false;
  let autoSlideTimer = null;
  const AUTO_INTERVAL_MS = 5000;

  // State flags for pausing
  let isHovered = false;
  let isFocused = false;
  let isTabHidden = document.visibilityState === 'hidden';
  let isManuallyPaused = false;
  let motionReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Listen to prefers-reduced-motion changes dynamically
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motionQuery.addEventListener) {
    motionQuery.addEventListener('change', (e) => {
      motionReduced = e.matches;
      if (motionReduced) {
        stopAutoSlide();
      } else {
        checkAndResume();
      }
    });
  }

  // Calculate distance per card
  function getStepWidth() {
    if (!allCards[0]) return 0;
    const cardRect = allCards[0].getBoundingClientRect();
    const style = window.getComputedStyle(track);
    const gap = parseFloat(style.gap) || 24;
    return cardRect.width + gap;
  }

  // Update track position
  function updatePosition(animate = true) {
    const step = getStepWidth();
    const offset = currentIndex * step;

    if (animate && !motionReduced) {
      track.style.transition = 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)';
    } else {
      track.style.transition = 'none';
    }

    track.style.transform = `translateX(-${offset}px)`;
    updateDots();
  }

  // Update active dot indicator
  function updateDots() {
    if (!dots.length) return;
    const realIndex = ((currentIndex - cardCount) % cardCount + cardCount) % cardCount;
    dots.forEach((dot, idx) => {
      const isActive = idx === realIndex;
      dot.classList.toggle('is-active', isActive);
      dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
  }

  // Seamless boundary wrap when animation ends
  track.addEventListener('transitionend', () => {
    isAnimating = false;

    // If moved into suffix clones (>= 2 * cardCount)
    if (currentIndex >= cardCount * 2) {
      currentIndex = currentIndex - cardCount;
      track.style.transition = 'none';
      const step = getStepWidth();
      track.style.transform = `translateX(-${currentIndex * step}px)`;
      track.offsetHeight; // force reflow
    }
    // If moved into prefix clones (< cardCount)
    else if (currentIndex < cardCount) {
      currentIndex = currentIndex + cardCount;
      track.style.transition = 'none';
      const step = getStepWidth();
      track.style.transform = `translateX(-${currentIndex * step}px)`;
      track.offsetHeight; // force reflow
    }
  });

  // Navigation actions
  function goToSlide(targetIndex, animate = true) {
    if (isAnimating) return;
    isAnimating = animate && !motionReduced;
    currentIndex = targetIndex;
    updatePosition(animate);
  }

  function nextSlide() {
    goToSlide(currentIndex + 1, true);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1, true);
  }

  // Auto-slide timer management
  function startAutoSlide() {
    stopAutoSlide();
    if (motionReduced || isManuallyPaused || isHovered || isFocused || isTabHidden) {
      return;
    }
    autoSlideTimer = setInterval(() => {
      nextSlide();
    }, AUTO_INTERVAL_MS);
  }

  function stopAutoSlide() {
    if (autoSlideTimer) {
      clearInterval(autoSlideTimer);
      autoSlideTimer = null;
    }
  }

  function resetAutoSlideTimer() {
    stopAutoSlide();
    startAutoSlide();
  }

  function checkAndResume() {
    if (!motionReduced && !isManuallyPaused && !isHovered && !isFocused && !isTabHidden) {
      startAutoSlide();
    }
  }

  // Event Listeners: Prev / Next buttons
  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoSlideTimer();
  });

  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoSlideTimer();
  });

  // Event Listener: Pause / Play toggle button
  if (pauseBtn) {
    pauseBtn.addEventListener('click', () => {
      isManuallyPaused = !isManuallyPaused;
      pauseBtn.classList.toggle('is-paused', isManuallyPaused);
      if (isManuallyPaused) {
        stopAutoSlide();
        pauseBtn.setAttribute('aria-label', 'Lanjutkan pergeseran otomatis');
        pauseBtn.setAttribute('title', 'Lanjutkan pergeseran otomatis');
      } else {
        pauseBtn.setAttribute('aria-label', 'Jeda pergeseran otomatis');
        pauseBtn.setAttribute('title', 'Jeda pergeseran otomatis');
        checkAndResume();
      }
    });
  }

  // Event Listeners: Dots
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const targetReal = parseInt(dot.getAttribute('data-index'), 10);
      if (isNaN(targetReal)) return;
      goToSlide(cardCount + targetReal, true);
      resetAutoSlideTimer();
    });
  });

  // Pause on hover
  carousel.addEventListener('mouseenter', () => {
    isHovered = true;
    stopAutoSlide();
  });

  carousel.addEventListener('mouseleave', () => {
    isHovered = false;
    checkAndResume();
  });

  // Pause on keyboard focus inside carousel
  carousel.addEventListener('focusin', () => {
    isFocused = true;
    stopAutoSlide();
  });

  carousel.addEventListener('focusout', (e) => {
    if (!carousel.contains(e.relatedTarget)) {
      isFocused = false;
      checkAndResume();
    }
  });

  // Pause on browser tab visibility change
  document.addEventListener('visibilitychange', () => {
    isTabHidden = document.visibilityState === 'hidden';
    if (isTabHidden) {
      stopAutoSlide();
    } else {
      checkAndResume();
    }
  });

  // Keyboard controls when focused within carousel or controls
  carousel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
      resetAutoSlideTimer();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextSlide();
      resetAutoSlideTimer();
    }
  });

  // Touch Swipe Support
  let touchStartX = 0;
  let touchStartY = 0;
  let isTouching = false;

  carousel.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    isTouching = true;
    stopAutoSlide();
  }, { passive: true });

  carousel.addEventListener('touchmove', () => {
    if (!isTouching) return;
  }, { passive: true });

  carousel.addEventListener('touchend', (e) => {
    if (!isTouching) return;
    isTouching = false;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    resetAutoSlideTimer();
  }, { passive: true });

  // Recalculate on window resize (debounced)
  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      updatePosition(false);
    }, 60);
  }, { passive: true });

  // Initialize position and start auto-sliding
  requestAnimationFrame(() => {
    updatePosition(false);
    startAutoSlide();
  });
}


