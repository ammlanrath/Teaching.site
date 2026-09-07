// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide Icons
  lucide.createIcons();

  // Initialize Modules
  initCursorFollower();
  initThemeManager();
  initRouter();
  initMobileMenu();
  initScrollAnimations();
  initFAQAccordion();
  initTestimonialCarousel();
  initPricingCalculator();
  initSubjectsFilter();
  initHomeCurriculumFilter();
  initHomeFAQAccordion();
  initBookDemoStepper();
  initContactForm();
  initScrollTopBtn();
  initCookieConsent();
  initCardTiltEffect();
  initHeroOrbitInteraction();
  initJourneyGalaxySection();
  initAmbientAnimationPause();
  initMethodologyIndicators();
  initFeatureShowcase();
  initFilterIndicators();
});

/* ==========================================================================
   Global Constants & Data States (Ecosystem Focused)
   ========================================================================== */
const AVAILABLE_SUBJECTS = [
  { id: "math", name: "Mathematics", icon: "book-open" },
  { id: "science", name: "Science (Physics, Chem, Bio)", icon: "flask" },
  { id: "english", name: "English Literature & Grammar", icon: "languages" },
  { id: "hindi", name: "Hindi Literature & Grammar", icon: "file-text" },
  { id: "social", name: "Social Studies (Hist, Geo, Civ)", icon: "globe" },
  { id: "computer", name: "Computer Science", icon: "binary" }
];

const SUBJECT_DETAILS = {
  10: [
    { id: "math", chapters: 15, lectures: "3/week", sundayTest: "Board Pattern Mock", chaptersList: "Quadratic Equations, Trigonometry, Statistics", lessons: "45 Lessons", worksheets: "15 Worksheets", difficulty: "CBSE/ICSE Advanced" },
    { id: "science", chapters: 18, lectures: "3/week", sundayTest: "Combined Objective & Subjective", chaptersList: "Light Reflection, Carbon Compounds, Life Processes", lessons: "54 Lessons", worksheets: "18 Worksheets", difficulty: "Board Core Prep" },
    { id: "english", chapters: 12, lectures: "2/week", sundayTest: "Writing & Grammar Section", chaptersList: "First Flight, Footprints Without Feet, Tenses", lessons: "30 Lessons", worksheets: "12 Worksheets", difficulty: "CBSE Foundation" },
    { id: "hindi", chapters: 10, lectures: "2/week", sundayTest: "Grammar Assessment", chaptersList: "Sparsh, Sanchayan, Sandhi, Samas", lessons: "24 Lessons", worksheets: "10 Worksheets", difficulty: "State Language Level" },
    { id: "social", chapters: 22, lectures: "2/week", sundayTest: "Map Work & Short Qs", chaptersList: "Rise of Nationalism in Europe, Resources, Federalism", lessons: "44 Lessons", worksheets: "15 Worksheets", difficulty: "CBSE/ICSE Core" },
    { id: "computer", chapters: 8, lectures: "2/week", sundayTest: "Coding Practice", chaptersList: "HTML/CSS, Python Basics, Cyber Ethics", lessons: "20 Lessons", worksheets: "8 Worksheets", difficulty: "Programming Intro" }
  ],
  9: [
    { id: "math", chapters: 14, lectures: "3/week", sundayTest: "Class Assessment Test", chaptersList: "Number Systems, Polynomials, Triangles", lessons: "42 Lessons", worksheets: "14 Worksheets", difficulty: "Syllabus Core Prep" },
    { id: "science", chapters: 15, lectures: "3/week", sundayTest: "Chapter-wise MCQ + Theory", chaptersList: "Matter in Our Surroundings, Cell Structure, Force", lessons: "45 Lessons", worksheets: "15 Worksheets", difficulty: "Concept Foundations" },
    { id: "english", chapters: 12, lectures: "2/week", sundayTest: "Grammar Check", chaptersList: "Beehive, Moments, Reading Comprehension", lessons: "24 Lessons", worksheets: "10 Worksheets", difficulty: "Grammar & Composition" },
    { id: "hindi", chapters: 8, lectures: "2/week", sundayTest: "Vocabulary Check", chaptersList: "Kshitij, Kritika, Alankar, Samas", lessons: "20 Lessons", worksheets: "8 Worksheets", difficulty: "Secondary Level" },
    { id: "social", chapters: 18, lectures: "2/week", sundayTest: "Descriptive Assessment", chaptersList: "French Revolution, Physical Features of India, Electoral Politics", lessons: "36 Lessons", worksheets: "12 Worksheets", difficulty: "Secondary Core" },
    { id: "computer", chapters: 6, lectures: "2/week", sundayTest: "Basics Test", chaptersList: "Computer Systems, Word Processing, Scratch Coding", lessons: "16 Lessons", worksheets: "6 Worksheets", difficulty: "Computing Literacy" }
  ],
  8: [
    { id: "math", chapters: 12, lectures: "3/week", sundayTest: "Weekly Quiz", chaptersList: "Rational Numbers, Linear Equations, Mensuration", lessons: "36 Lessons", worksheets: "12 Worksheets", difficulty: "Middle Prep Core" },
    { id: "science", chapters: 13, lectures: "3/week", sundayTest: "Practical Quiz", chaptersList: "Crop Production, Microorganisms, Force & Pressure", lessons: "39 Lessons", worksheets: "13 Worksheets", difficulty: "Introductory Science" },
    { id: "english", chapters: 10, lectures: "2/week", sundayTest: "Comprehension Test", chaptersList: "Honeydew, It So Happened, Paragraph Writing", lessons: "20 Lessons", worksheets: "10 Worksheets", difficulty: "Foundational Grammar" },
    { id: "hindi", chapters: 8, lectures: "2/week", sundayTest: "Basic Grammar", chaptersList: "Vasant, Bharat Ki Khoj, Muhavare", lessons: "16 Lessons", worksheets: "8 Worksheets", difficulty: "Basic Language Prep" },
    { id: "social", chapters: 15, lectures: "2/week", sundayTest: "Short Answers Test", chaptersList: "How When and Where, Land Soil Water, Constitution", lessons: "30 Lessons", worksheets: "10 Worksheets", difficulty: "Introductory Social Sci" },
    { id: "computer", chapters: 6, lectures: "2/week", sundayTest: "Practice Exercise", chaptersList: "Networking Concepts, Access Database, HTML Basics", lessons: "16 Lessons", worksheets: "6 Worksheets", difficulty: "Digital Foundations" }
  ]
};

const FAQ_DATA = [
  {
    cat: "academic",
    q: "How are the live online classes conducted?",
    a: "Live classes are hosted inside our premium student dashboard via secure video conference links. Each session is 75 minutes, featuring interactive whiteboards, screen-shares for visual models, and a live Q&A panel for real-time doubt clearing."
  },
  {
    cat: "academic",
    q: "What happens if a student misses a live class?",
    a: "Don't worry. Every live class is recorded in high definition. Within 2 hours of the lecture ending, the recording along with the academic notes and worksheets are uploaded to the student's personal vault folder backed by Google Drive."
  },
  {
    cat: "payments",
    q: "Is there any sign-up contract or registration fee?",
    a: "No, there are no hidden sign-up fees or long-term contracts. Tuition billing operates on a simple, pay-as-you-go monthly subscription per subject. You can choose to pause or cancel your subscription in the billing settings in one click."
  },
  {
    cat: "payments",
    q: "What is your refund policy for trial classes and subscriptions?",
    a: "The ₹100 Demo Class fee is fully refundable up to 24 hours before the selected date slot. For monthly subscriptions (₹1,500/subject), we offer a 3-day satisfaction guarantee. If you are unsatisfied, cancel within 3 days of payment for a full refund."
  },
  {
    cat: "technical",
    q: "What device specifications are required for live classes?",
    a: "Students only need a laptop, tablet, or mobile phone with a functional web browser and an internet connection of 2 Mbps or higher. We recommend using headphones and a stylus-tablet if they wish to write on the shared digital whiteboard."
  },
  {
    cat: "academic",
    q: "Are worksheets and tests aligned with specific school boards?",
    a: "Yes, our syllabus structure is fully mapped to the latest CBSE and ICSE boards. When students register, they select their grade and board to unlock customized homework worksheets and Sunday tests matching their school syllabus."
  }
];

// Galaxy Constellation Milestones Data
const GALAXY_MILESTONES = {
  8: [
    { x: 100, y: 220, id: 1, title: "Foundations", desc: "Unlock key axioms in Math (Rational Numbers) and Science (Cell Biology basics)." },
    { x: 300, y: 280, id: 2, title: "Algebra I", desc: "Linear Equations in one variable, mapping coordinates, and charting variables." },
    { x: 500, y: 160, id: 3, title: "Core Mechanics", desc: "Understand Force, Pressure, and Newtonian vectors in lab models." },
    { x: 700, y: 220, id: 4, title: "Class 8 Milestone", desc: "Comprehensive final evaluation covering CBSE/ICSE mock sitemaps." }
  ],
  9: [
    { x: 100, y: 220, id: 1, title: "Real Numbers", desc: "Master irrational systems, proofs of root numbers, and algebraic expansions." },
    { x: 260, y: 120, id: 2, title: "Polynomial Logic", desc: "Multi-variable expressions, remainder theorem, and graph calculations." },
    { x: 420, y: 300, id: 3, title: "Physics Laws", desc: "Force and Motion equations (s=ut+1/2at²), momentum vectors, and friction." },
    { x: 580, y: 160, id: 4, title: "Cellular Mechanics", desc: "Plastids, lysosomes, and detailed tissue division cycles." },
    { x: 700, y: 220, id: 5, title: "Class 9 Mastery", desc: "95%+ score target assessments preparing for Class 10 boards." }
  ],
  10: [
    { x: 100, y: 220, id: 1, title: "Trigonometry", desc: "Ratio theorems, identity derivations, and height & distance boards problems." },
    { x: 230, y: 90, id: 2, title: "Quadratic Equations", desc: "Discriminant formula derivations, word equations, and complex roots." },
    { x: 380, y: 310, id: 3, title: "Electromagnetism", desc: "Faraday's laws of induction, Fleming's rules, and motor diagrams." },
    { x: 530, y: 110, id: 4, title: "Organic Chemistry", desc: "Covalent bonds, homologous series, and functional carbon naming rules." },
    { x: 700, y: 220, id: 5, title: "Board Certification", desc: "Full sitemap mocks evaluating time, formatting, and proof presentation." }
  ]
};

/* ==========================================================================
   SPA Router Module
   ========================================================================== */
function initRouter() {
  const views = document.querySelectorAll(".page-view");
  const navLinks = document.querySelectorAll(".nav-links a, .mobile-nav-links a");

  function routeChange() {
    let hash = window.location.hash || "#/";
    
    // Normalize hash route
    if (hash === "#" || hash === "") hash = "#/";

    // Hide mobile drawer if open
    document.getElementById("mobile-drawer").classList.remove("open");
    document.getElementById("mobile-backdrop").classList.remove("visible");

    // Redirect outmoded about/teacher target
    if (hash === "#/about") {
      window.location.hash = "#/how-it-works";
      return;
    }

    let targetView = null;
    let viewId = "page-home"; // fallback default

    if (hash === "#/") viewId = "page-home";
    else if (hash === "#/how-it-works") viewId = "page-how-it-works";
    else if (hash === "#/subjects") viewId = "page-subjects";
    else if (hash === "#/pricing") viewId = "page-pricing";
    else if (hash === "#/book-demo") viewId = "page-book-demo";
    else if (hash === "#/faq") viewId = "page-faq";
    else if (hash === "#/contact") viewId = "page-contact";
    else if (hash === "#/login") viewId = "page-login";
    else if (hash === "#/terms") viewId = "page-terms";
    else if (hash === "#/privacy") viewId = "page-privacy";
    else if (hash === "#/refunds") viewId = "page-refunds";
    else if (hash === "#/booking-success") viewId = "page-booking-success";

    targetView = document.getElementById(viewId);

    // Swap active views
    views.forEach(v => v.classList.remove("active-view"));
    if (targetView) {
      targetView.classList.add("active-view");
    }

    // Update active state in nav link tags
    navLinks.forEach(link => {
      link.classList.remove("active-link");
      const pathAttr = link.getAttribute("href");
      if (pathAttr === hash) {
        link.classList.add("active-link");
      }
    });

    // Reset scroll positions
    window.scrollTo(0, 0);

    // Trigger page-specific initializers
    if (viewId === "page-subjects") {
      renderSubjectsGrid();
    }
  }

  // Bind hash events
  window.addEventListener("hashchange", routeChange);
  // Trigger initial route match
  routeChange();
}

/* ==========================================================================
   Theme Management Module
   ========================================================================== */
function initThemeManager() {
  const toggleBtn = document.getElementById("theme-toggle");
  
  // Set default theme state from storage or system preferences
  const storedTheme = localStorage.getItem("elevate-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
    document.documentElement.classList.add("dark-theme");
  } else {
    document.documentElement.classList.remove("dark-theme");
  }

  toggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-theme");
    const isDark = document.documentElement.classList.contains("dark-theme");
    localStorage.setItem("elevate-theme", isDark ? "dark" : "light");
    createToast("Theme Swapped", `Switched to ${isDark ? 'Dark' : 'Light'} Mode.`, "success");
  });
}

/* ==========================================================================
   Mobile Menu Drawer Module
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-toggle");
  const closeBtn = document.getElementById("mobile-close");
  const backdrop = document.getElementById("mobile-backdrop");
  const drawer = document.getElementById("mobile-drawer");

  function openMenu() {
    drawer.classList.add("open");
    backdrop.classList.add("visible");
  }

  function closeMenu() {
    drawer.classList.remove("open");
    backdrop.classList.remove("visible");
  }

  toggleBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  backdrop.addEventListener("click", closeMenu);
}

/* ==========================================================================
   Scroll Animations & Header Reducer Module
   ========================================================================== */
function initScrollAnimations() {
  const header = document.getElementById("main-header");
  const scrollTopBtn = document.getElementById("scroll-to-top");
  
  const handleScroll = throttle(() => {
    const scrollY = window.scrollY;

    if (scrollY > 60) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    if (scrollTopBtn) {
      scrollTopBtn.classList.toggle("visible", scrollY > 400);
    }
    
    checkMethodologyHighlights();
  });

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // Intersection Observer Scroll Reveal
  const reveals = document.querySelectorAll(".reveal");
  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px"
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        
        // Trigger count animation if stat elements reveal
        const statNums = entry.target.querySelectorAll(".stat-number");
        if (statNums.length > 0) {
          statNums.forEach(num => startCountUp(num));
        }
        
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  reveals.forEach(el => observer.observe(el));
}

// Stats Count-Up animation using high-performance requestAnimationFrame
function startCountUp(el) {
  if (el._counting) return;
  el._counting = true;

  const target = parseFloat(el.getAttribute("data-target"));
  const hasDecimal = el.getAttribute("data-decimal") === "true";
  const duration = 1500; // Premium 1.5s animation duration
  const startTime = performance.now();
  
  const animate = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Quadratic Out easing: f(t) = t * (2 - t)
    const easedProgress = progress * (2 - progress);
    const currentVal = easedProgress * target;
    
    if (hasDecimal) {
      el.innerText = (currentVal / 10).toFixed(1) + "%";
    } else {
      const rounded = Math.floor(currentVal);
      if (target === 500) {
        el.innerText = rounded.toLocaleString("en-IN") + "+";
      } else if (target === 15000) {
        el.innerText = rounded.toLocaleString("en-IN") + "+";
      } else {
        el.innerText = rounded.toLocaleString("en-IN");
      }
    }
    
    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      if (hasDecimal) {
        el.innerText = (target / 10).toFixed(1) + "%";
      } else {
        if (target === 500) el.innerText = "500+";
        else if (target === 15000) el.innerText = "15,000+";
        else el.innerText = target.toLocaleString("en-IN");
      }
      el._counting = false;
    }
  };
  
  requestAnimationFrame(animate);
}

// Methodology Sticky Indicator Highlight Sync
function checkMethodologyHighlights() {
  const scrollContainer = document.getElementById("page-how-it-works");
  if (!scrollContainer || !scrollContainer.classList.contains("active-view")) return;

  const cards = document.querySelectorAll(".methodology-scrolling-card");
  const indicators = document.querySelectorAll(".methodology-indicator-item");
  const fillLine = document.getElementById("methodology-timeline-fill");

  let activeIndex = 0;
  const scrollOffset = window.scrollY + window.innerHeight / 2;

  cards.forEach((card, idx) => {
    const cardTop = card.offsetTop;
    if (scrollOffset >= cardTop) {
      activeIndex = idx;
    }
  });

  indicators.forEach((ind, idx) => {
    ind.classList.toggle("active", idx === activeIndex);
  });

  cards.forEach((card, idx) => {
    card.classList.toggle("active-card", idx === activeIndex);
  });

  // Calculate timeline fill height
  if (fillLine && cards.length) {
    const firstCard = cards[0];
    const lastCard = cards[cards.length - 1];
    const totalDistance = lastCard.offsetTop - firstCard.offsetTop;
    const relativeScroll = Math.max(0, Math.min(scrollOffset - firstCard.offsetTop, totalDistance));
    const percent = (relativeScroll / totalDistance) * 100;
    fillLine.style.height = `${percent}%`;
  }
}

/* ==========================================================================
   FAQ Accordion Module (Vertical Split Layout)
   ========================================================================== */
function initFAQAccordion() {
  const container = document.getElementById("faq-accordion-container");
  if (!container) return;
  const tabBtns = document.querySelectorAll(".faq-sticky-sidebar .filter-btn");

  // Render FAQ list items dynamically
  function renderFAQs(filterCat = "all") {
    container.innerHTML = "";
    
    const filtered = filterCat === "all" 
      ? FAQ_DATA 
      : FAQ_DATA.filter(item => item.cat === filterCat);

    filtered.forEach((item, index) => {
      const acc = document.createElement("div");
      acc.className = "accordion-item";
      acc.innerHTML = `
        <button type="button" class="accordion-trigger" aria-expanded="false" id="faq-q-${index}">
          <h4>${item.q}</h4>
          <i data-lucide="chevron-down" class="icon chevron"></i>
        </button>
        <div class="accordion-panel" id="faq-p-${index}" role="region" aria-labelledby="faq-q-${index}">
          <div class="accordion-content">
            <p>${item.a}</p>
          </div>
        </div>
      `;
      container.appendChild(acc);
    });

    lucide.createIcons();
    bindAccordionListeners();
  }

  function bindAccordionListeners() {
    const items = container.querySelectorAll(".accordion-item");
    
    items.forEach(item => {
      const trigger = item.querySelector(".accordion-trigger");
      const panel = item.querySelector(".accordion-panel");

      trigger.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        
        items.forEach(otherItem => {
          otherItem.classList.remove("active");
          otherItem.querySelector(".accordion-panel").style.maxHeight = null;
          otherItem.querySelector(".accordion-trigger").setAttribute("aria-expanded", "false");
        });

        if (!isActive) {
          item.classList.add("active");
          panel.style.maxHeight = panel.scrollHeight + "px";
          trigger.setAttribute("aria-expanded", "true");
        } else {
          item.classList.remove("active");
          panel.style.maxHeight = null;
          trigger.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  tabBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.getAttribute("data-faq-cat");
      renderFAQs(cat);
    });
  });

  renderFAQs();
}

/* ==========================================================================
   Testimonial Carousel Module
   ========================================================================== */
function initTestimonialCarousel() {
  const track = document.getElementById("home-testimonial-track");
  if (!track) return;
  const slides = Array.from(track.children);
  const nextButton = document.getElementById("testimonial-next");
  const prevButton = document.getElementById("testimonial-prev");
  const dotsContainer = document.getElementById("testimonial-dots");

  let currentIndex = 0;

  dotsContainer.innerHTML = "";
  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
    dot.setAttribute("aria-label", `Slide ${index + 1}`);
    dotsContainer.appendChild(dot);
  });

  const dots = Array.from(dotsContainer.children);

  const updateSlidePosition = () => {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  };

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition();
  });

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlidePosition();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlidePosition();
    });
  });
}

/* ==========================================================================
   Pricing Calculator Module (Option Checkboxes)
   ========================================================================== */
function initPricingCalculator() {
  const gradeSelect = document.getElementById("calc-grade-select");
  if (!gradeSelect) return;
  const subjectListContainer = document.getElementById("calc-subject-list");
  const priceTotalDisplay = document.getElementById("calc-price-total");
  const subjectsCountDisplay = document.getElementById("calc-subjects-count");

  let selectedSubjects = new Set();
  const FEE_RATE = 1500;

  function drawSubjectPills() {
    subjectListContainer.innerHTML = "";
    
    AVAILABLE_SUBJECTS.forEach(sub => {
      const label = document.createElement("label");
      label.className = `pricing-option-card ${selectedSubjects.has(sub.id) ? 'checked' : ''}`;
      label.style.width = "100%";
      label.style.marginBottom = "var(--space-2)";
      label.innerHTML = `
        <div style="display:flex; align-items:center; gap:var(--space-3);">
          <div class="node-icon-dot">
            <i data-lucide="${sub.icon}" class="icon"></i>
          </div>
          <span style="font-family:var(--font-display); font-size:1.05rem; font-weight:600; color:var(--color-ink);">${sub.name}</span>
        </div>
        <input type="checkbox" value="${sub.id}" class="subject-pill-checkbox" style="width:18px; height:18px; accent-color:var(--color-accent);" ${selectedSubjects.has(sub.id) ? 'checked' : ''}>
      `;
      
      const checkbox = label.querySelector(".subject-pill-checkbox");
      
      // Handle option click state
      label.addEventListener("click", (e) => {
        if (e.target === checkbox) return; // avoid double trigger
        checkbox.checked = !checkbox.checked;
        checkbox.dispatchEvent(new Event("change"));
      });

      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          selectedSubjects.add(sub.id);
          label.classList.add("checked");
        } else {
          selectedSubjects.delete(sub.id);
          label.classList.remove("checked");
        }
        calculateTotal();
      });

      subjectListContainer.appendChild(label);
    });

    lucide.createIcons();
  }

  function calculateTotal() {
    const total = selectedSubjects.size * FEE_RATE;
    subjectsCountDisplay.innerText = `${selectedSubjects.size} subject(s) selected`;
    rollNumbers(priceTotalDisplay, total);
  }

  function rollNumbers(displayEl, targetVal) {
    const startVal = parseInt(displayEl.innerText.replace(/,/g, "")) || 0;
    const duration = 250;
    const startTime = performance.now();

    function animate(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = progress * (2 - progress);
      const currentVal = Math.floor(startVal + (targetVal - startVal) * easedProgress);
      
      displayEl.innerText = currentVal.toLocaleString("en-IN");

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        displayEl.innerText = targetVal.toLocaleString("en-IN");
      }
    }

    requestAnimationFrame(animate);
  }

  gradeSelect.addEventListener("change", () => {
    calculateTotal();
  });

  document.getElementById("calc-checkout-btn").addEventListener("click", (e) => {
    if (selectedSubjects.size === 0) {
      e.preventDefault();
      createToast("No Subjects Selected", "Please tick at least one subject to continue to checkout.", "warning");
      return;
    }
    
    window.selectedDemoGrade = gradeSelect.value;
    window.selectedDemoSubject = AVAILABLE_SUBJECTS.find(s => selectedSubjects.has(s.id))?.name || "Mathematics";
  });

  selectedSubjects.add("math");
  drawSubjectPills();
  calculateTotal();
}

/* ==========================================================================
   Subjects Filtering Module (Subjects Page)
   ========================================================================== */
function initSubjectsFilter() {
  const filterBtns = document.querySelectorAll("#page-subjects .filter-bar .filter-btn");
  
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderSubjectsGrid(btn.getAttribute("data-class"));
    });
  });
}

/* ==========================================================================
   Home Page Curriculum Explorer Module
   ========================================================================== */
function initHomeCurriculumFilter() {
  const filterBtns = document.querySelectorAll("#home-curriculum-section .filter-bar .filter-btn");
  
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderHomeSubjectsGrid(btn.getAttribute("data-home-class"));
    });
  });
  renderHomeSubjectsGrid("10");
}

function renderHomeSubjectsGrid(grade = "10") {
  const grid = document.getElementById("home-subjects-cards-grid");
  if (!grid) return;
  grid.innerHTML = "";

  const courseList = SUBJECT_DETAILS[grade] || [];
  // Show Math, Science, and English preview
  const previewCourses = courseList.slice(0, 3);
  
  previewCourses.forEach(course => {
    const mainSub = AVAILABLE_SUBJECTS.find(s => s.id === course.id);
    if (!mainSub) return;

    const card = document.createElement("div");
    card.className = "card card-hover subject-card reveal revealed card-tilt stagger-1";
    card.style.gridColumn = "span 4";
    card.innerHTML = `
      <div class="subject-header" style="display:flex; align-items:center; gap:var(--space-3);">
        <div class="node-icon-dot">
          <i data-lucide="${mainSub.icon}" class="icon"></i>
        </div>
        <div>
          <div style="display:flex; gap:4px; align-items:center;">
            <span class="badge badge-accent" style="font-size:0.6rem; background-color:var(--color-accent-soft); color:var(--color-accent); padding:2px 8px; border-radius:10px; font-weight:600;">Class ${grade}</span>
            <span class="badge" style="font-size:0.6rem; background-color:var(--color-success-soft); color:var(--color-success); padding:2px 8px; border-radius:10px; font-weight:600;">${course.difficulty}</span>
          </div>
          <h3 style="font-size:1.15rem; font-weight:700; margin-top:2px;">${mainSub.name}</h3>
        </div>
      </div>
      <p style="font-size:0.85rem; margin-top:var(--space-4); min-height:40px;">${course.chaptersList}</p>
      
      <ul class="subject-details" style="margin-top:var(--space-4); list-style:none; display:flex; flex-direction:column; gap:6px; font-size:0.85rem;">
        <li style="display:flex; align-items:center; gap:6px;"><i data-lucide="layers" class="icon" style="width:14px; height:14px;"></i> ${course.chapters} Syllabus Chapters</li>
        <li style="display:flex; align-items:center; gap:6px;"><i data-lucide="book-open" class="icon" style="width:14px; height:14px;"></i> ${course.lessons}</li>
        <li style="display:flex; align-items:center; gap:6px;"><i data-lucide="clipboard-list" class="icon" style="width:14px; height:14px;"></i> ${course.worksheets}</li>
        <li style="display:flex; align-items:center; gap:6px;"><i data-lucide="video" class="icon" style="width:14px; height:14px;"></i> ${course.lectures} Lectures</li>
        <li style="display:flex; align-items:center; gap:6px;"><i data-lucide="check-square" class="icon" style="width:14px; height:14px;"></i> Test: ${course.sundayTest}</li>
      </ul>

      <div class="subject-footer" style="display:flex; align-items:center; justify-content:between; margin-top:var(--space-6); border-top:1px solid var(--color-border); padding-top:var(--space-4);">
        <div class="subject-price" style="font-family:var(--font-display); font-size:1.2rem; font-weight:750; flex:1;">₹1,500<span style="font-size:0.75rem; color:var(--color-ink-muted); font-weight:500;">/mo</span></div>
        <a href="#/book-demo" class="btn btn-secondary btn-sm select-subject-demo" data-sub="${mainSub.name}" data-grade="${grade}">Book Demo</a>
      </div>
    `;

    card.querySelector(".select-subject-demo").addEventListener("click", () => {
      window.selectedDemoGrade = grade;
      window.selectedDemoSubject = mainSub.name;
    });

    grid.appendChild(card);
  });

  lucide.createIcons();
  initCardTiltEffect();
}

/* ==========================================================================
   Home Page FAQ Preview Module
   ========================================================================== */
function initHomeFAQAccordion() {
  const container = document.getElementById("home-faq-accordion-container");
  if (!container) return;

  const homeFAQs = FAQ_DATA.slice(0, 4);
  
  container.innerHTML = "";
  homeFAQs.forEach((item, index) => {
    const acc = document.createElement("div");
    acc.className = "accordion-item";
    acc.innerHTML = `
      <button type="button" class="accordion-trigger" aria-expanded="false" id="home-faq-q-${index}">
        <h4>${item.q}</h4>
        <i data-lucide="chevron-down" class="icon chevron"></i>
      </button>
      <div class="accordion-panel" id="home-faq-p-${index}" role="region" aria-labelledby="home-faq-q-${index}">
        <div class="accordion-content">
          <p>${item.a}</p>
        </div>
      </div>
    `;
    container.appendChild(acc);
  });

  lucide.createIcons();
  
  const items = container.querySelectorAll(".accordion-item");
  items.forEach(item => {
    const trigger = item.querySelector(".accordion-trigger");
    const panel = item.querySelector(".accordion-panel");

    trigger.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      
      items.forEach(otherItem => {
        otherItem.classList.remove("active");
        otherItem.querySelector(".accordion-panel").style.maxHeight = null;
        otherItem.querySelector(".accordion-trigger").setAttribute("aria-expanded", "false");
      });

      if (!isActive) {
        item.classList.add("active");
        panel.style.maxHeight = panel.scrollHeight + "px";
        trigger.setAttribute("aria-expanded", "true");
      } else {
        item.classList.remove("active");
        panel.style.maxHeight = null;
        trigger.setAttribute("aria-expanded", "false");
      }
    });
  });
}

function renderSubjectsGrid(grade = "10") {
  const grid = document.getElementById("subjects-cards-grid");
  if (!grid) return;
  grid.innerHTML = "";

  const courseList = SUBJECT_DETAILS[grade] || [];
  
  courseList.forEach(course => {
    const mainSub = AVAILABLE_SUBJECTS.find(s => s.id === course.id);
    if (!mainSub) return;

    const card = document.createElement("div");
    card.className = "card card-hover subject-card reveal revealed card-tilt stagger-1";
    card.style.gridColumn = "span 4";
    card.innerHTML = `
      <div class="subject-header" style="display:flex; align-items:center; gap:var(--space-3);">
        <div class="node-icon-dot">
          <i data-lucide="${mainSub.icon}" class="icon"></i>
        </div>
        <div>
          <div style="display:flex; gap:4px; align-items:center;">
            <span class="badge badge-accent" style="font-size:0.6rem; background-color:var(--color-accent-soft); color:var(--color-accent); padding:2px 8px; border-radius:10px; font-weight:600;">Class ${grade}</span>
            <span class="badge" style="font-size:0.6rem; background-color:var(--color-success-soft); color:var(--color-success); padding:2px 8px; border-radius:10px; font-weight:600;">${course.difficulty}</span>
          </div>
          <h3 style="font-size:1.15rem; font-weight:700; margin-top:2px;">${mainSub.name}</h3>
        </div>
      </div>
      <p style="font-size:0.85rem; margin-top:var(--space-4); min-height:40px;">${course.chaptersList}</p>
      
      <ul class="subject-details" style="margin-top:var(--space-4); list-style:none; display:flex; flex-direction:column; gap:6px; font-size:0.85rem;">
        <li style="display:flex; align-items:center; gap:6px;"><i data-lucide="layers" class="icon" style="width:14px; height:14px;"></i> ${course.chapters} Syllabus Chapters</li>
        <li style="display:flex; align-items:center; gap:6px;"><i data-lucide="book-open" class="icon" style="width:14px; height:14px;"></i> ${course.lessons}</li>
        <li style="display:flex; align-items:center; gap:6px;"><i data-lucide="clipboard-list" class="icon" style="width:14px; height:14px;"></i> ${course.worksheets}</li>
        <li style="display:flex; align-items:center; gap:6px;"><i data-lucide="video" class="icon" style="width:14px; height:14px;"></i> ${course.lectures} Lectures</li>
        <li style="display:flex; align-items:center; gap:6px;"><i data-lucide="check-square" class="icon" style="width:14px; height:14px;"></i> Test: ${course.sundayTest}</li>
      </ul>

      <div class="subject-footer" style="display:flex; align-items:center; justify-content:between; margin-top:var(--space-6); border-top:1px solid var(--color-border); padding-top:var(--space-4);">
        <div class="subject-price" style="font-family:var(--font-display); font-size:1.2rem; font-weight:750; flex:1;">₹1,500<span style="font-size:0.75rem; color:var(--color-ink-muted); font-weight:500;">/mo</span></div>
        <a href="#/book-demo" class="btn btn-secondary btn-sm select-subject-demo" data-sub="${mainSub.name}" data-grade="${grade}">Book Demo</a>
      </div>
    `;

    card.querySelector(".select-subject-demo").addEventListener("click", () => {
      window.selectedDemoGrade = grade;
      window.selectedDemoSubject = mainSub.name;
    });

    grid.appendChild(card);
  });

  lucide.createIcons();
  // Bind dynamic card tilt
  initCardTiltEffect();
}

/* ==========================================================================
   Book Demo Stepper Form Module
   ========================================================================== */
let calendarDate = new Date();
let selectedBookingDate = null;
let selectedBookingSlot = null;

function initBookDemoStepper() {
  const form = document.getElementById("book-demo-form");
  if (!form) return;

  const panels = document.querySelectorAll(".step-panel");
  const nodes = document.querySelectorAll(".step-node");
  const prevBtn = document.getElementById("stepper-prev");
  const nextBtn = document.getElementById("stepper-next");
  const bar = document.getElementById("stepper-bar");

  let currentStep = 1;

  document.getElementById("cal-prev").addEventListener("click", () => {
    calendarDate.setMonth(calendarDate.getMonth() - 1);
    drawCalendar();
  });
  document.getElementById("cal-next").addEventListener("click", () => {
    calendarDate.setMonth(calendarDate.getMonth() + 1);
    drawCalendar();
  });

  function updateStepperUI() {
    panels.forEach(panel => {
      panel.classList.toggle("active", parseInt(panel.getAttribute("data-step")) === currentStep);
    });

    nodes.forEach(node => {
      const stepIdx = parseInt(node.getAttribute("data-step"));
      node.classList.toggle("active", stepIdx === currentStep);
      node.classList.toggle("completed", stepIdx < currentStep);
    });

    const progressWidths = { 1: 0, 2: 33, 3: 66, 4: 100 };
    bar.style.width = `${progressWidths[currentStep]}%`;

    prevBtn.style.visibility = currentStep === 1 ? "hidden" : "visible";
    nextBtn.innerText = currentStep === 4 ? "Pay ₹100 & Book" : "Continue";

    if (currentStep === 4) {
      document.getElementById("summary-grade").innerText = `Class ${document.getElementById("demo-grade").value}`;
      document.getElementById("summary-subject").innerText = document.getElementById("demo-subject").value;
      const formattedDate = selectedBookingDate ? selectedBookingDate.toLocaleDateString("en-IN", { day: 'numeric', month: 'long', year: 'numeric' }) : "";
      document.getElementById("summary-datetime").innerText = `${formattedDate} at ${selectedBookingSlot}`;
    }
  }

  function validateStep(step) {
    let isValid = true;
    
    document.querySelectorAll(".error-text").forEach(el => el.innerText = "");
    document.querySelectorAll(".input-field").forEach(el => el.classList.remove("input-error"));

    if (step === 1) {
      const grade = document.getElementById("demo-grade");
      const subject = document.getElementById("demo-subject");

      if (!grade.value) {
        document.getElementById("error-demo-grade").innerText = "Grade class selection is required.";
        grade.classList.add("input-error");
        isValid = false;
      }
      if (!subject.value) {
        document.getElementById("error-demo-subject").innerText = "Subject selection is required.";
        subject.classList.add("input-error");
        isValid = false;
      }
    } 
    else if (step === 2) {
      if (!selectedBookingDate || !selectedBookingSlot) {
        document.getElementById("error-demo-slot").innerText = "Please select both a date and an available time slot.";
        isValid = false;
      }
    } 
    else if (step === 3) {
      const name = document.getElementById("demo-name");
      const email = document.getElementById("demo-email");
      const phone = document.getElementById("demo-phone");

      if (name.value.trim().length < 3) {
        document.getElementById("error-demo-name").innerText = "Full name must be at least 3 letters.";
        name.classList.add("input-error");
        isValid = false;
      }
      if (!validateEmail(email.value)) {
        document.getElementById("error-demo-email").innerText = "A valid email address is required.";
        email.classList.add("input-error");
        isValid = false;
      }
      if (!validatePhone(phone.value)) {
        document.getElementById("error-demo-phone").innerText = "Enter a valid 10-digit mobile number.";
        phone.classList.add("input-error");
        isValid = false;
      }
    } 
    else if (step === 4) {
      const agree = document.getElementById("demo-agree");
      if (!agree.checked) {
        document.getElementById("error-demo-agree").innerText = "Agreement consent is required.";
        isValid = false;
      }
    }

    return isValid;
  }

  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!validateStep(currentStep)) return;

    if (currentStep < 4) {
      currentStep++;
      updateStepperUI();
      if (currentStep === 2) {
        drawCalendar();
      }
    } else {
      triggerPaymentFlow();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentStep > 1) {
      currentStep--;
      updateStepperUI();
    }
  });

  window.addEventListener("hashchange", () => {
    if (window.location.hash === "#/book-demo") {
      if (window.selectedDemoGrade) {
        document.getElementById("demo-grade").value = window.selectedDemoGrade;
        document.getElementById("demo-grade").dispatchEvent(new Event("change"));
      }
      if (window.selectedDemoSubject) {
        let matchedVal = window.selectedDemoSubject;
        if (matchedVal.includes("Science")) matchedVal = "Science";
        if (matchedVal.includes("English")) matchedVal = "English";
        if (matchedVal.includes("Hindi")) matchedVal = "Hindi";
        if (matchedVal.includes("Social")) matchedVal = "Social Studies";
        if (matchedVal.includes("Computer")) matchedVal = "Computer Science";
        
        document.getElementById("demo-subject").value = matchedVal;
        document.getElementById("demo-subject").dispatchEvent(new Event("change"));
      }
    } else {
      form.reset();
      currentStep = 1;
      selectedBookingDate = null;
      selectedBookingSlot = null;
      updateStepperUI();
    }
  });
}

function drawCalendar() {
  const monthLabel = document.getElementById("cal-month-year");
  const daysGrid = document.getElementById("cal-days-grid");
  if (!daysGrid) return;
  
  daysGrid.innerHTML = "";
  
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();
  
  monthLabel.innerText = calendarDate.toLocaleDateString("en-IN", { month: 'long', year: 'numeric' });
  
  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  dayNames.forEach(n => {
    const div = document.createElement("div");
    div.className = "calendar-day-name";
    div.innerText = n;
    daysGrid.appendChild(div);
  });

  const firstDayIndex = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  today.setHours(0,0,0,0);

  for (let i = 0; i < firstDayIndex; i++) {
    const span = document.createElement("span");
    daysGrid.appendChild(span);
  }

  for (let day = 1; day <= totalDays; day++) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "calendar-day-btn";
    btn.innerText = day;
    
    const cellDate = new Date(year, month, day);
    
    if (cellDate < today) {
      btn.disabled = true;
    }

    if (selectedBookingDate && cellDate.getTime() === selectedBookingDate.getTime()) {
      btn.classList.add("selected");
    }

    btn.addEventListener("click", () => {
      daysGrid.querySelectorAll(".calendar-day-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedBookingDate = cellDate;
      selectedBookingSlot = null;
      renderTimeSlots();
    });

    daysGrid.appendChild(btn);
  }
}

function renderTimeSlots() {
  const wrap = document.getElementById("demo-time-slots-wrap");
  wrap.innerHTML = "";

  if (!selectedBookingDate) return;

  const slots = ["04:00 PM", "05:30 PM", "07:00 PM", "08:30 PM"];
  
  slots.forEach(slot => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `time-slot-btn ${selectedBookingSlot === slot ? 'selected' : ''}`;
    btn.innerText = slot;
    
    btn.addEventListener("click", () => {
      wrap.querySelectorAll(".time-slot-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedBookingSlot = slot;
    });

    wrap.appendChild(btn);
  });
}

function triggerPaymentFlow() {
  const overlay = document.getElementById("checkout-redirect-screen");
  overlay.classList.add("active");

  setTimeout(() => {
    overlay.classList.remove("active");
    
    const grade = document.getElementById("demo-grade").value;
    const sub = document.getElementById("demo-subject").value;
    document.getElementById("success-message-detail").innerText = `A receipt and dashboard credentials for Class ${grade} ${sub} have been sent to your phone.`;
    
    window.location.hash = "#/booking-success";
    createToast("Demo Confirmed", "Check your phone for zoom credentials.", "success");
    
    startCountdown();
  }, 2200);
}

function startCountdown() {
  const clock = document.getElementById("demo-countdown-clock");
  if (!clock) return;
  let duration = 24 * 60 * 60;

  const timer = setInterval(() => {
    let hours = Math.floor(duration / 3600);
    let minutes = Math.floor((duration % 3600) / 60);
    let seconds = duration % 60;

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    clock.innerText = `${hours}h ${minutes}m ${seconds}s`;

    if (--duration < 0) {
      clearInterval(timer);
      clock.innerText = "CLASS IS LIVE NOW";
      clock.style.color = "var(--color-success)";
    }
  }, 1000);
}

/* ==========================================================================
   Contact Form Module
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    form.querySelectorAll(".error-text").forEach(el => el.innerText = "");
    form.querySelectorAll(".input-field").forEach(el => el.classList.remove("input-error"));

    const name = document.getElementById("contact-name");
    const email = document.getElementById("contact-email");
    const subject = document.getElementById("contact-subject");
    const message = document.getElementById("contact-message");

    if (name.value.trim().length < 3) {
      document.getElementById("error-contact-name").innerText = "Your name must be at least 3 characters.";
      name.classList.add("input-error");
      isValid = false;
    }
    if (!validateEmail(email.value)) {
      document.getElementById("error-contact-email").innerText = "Please enter a valid email address.";
      email.classList.add("input-error");
      isValid = false;
    }
    if (subject.value.trim().length < 4) {
      document.getElementById("error-contact-subject").innerText = "Subject topic must be at least 4 characters.";
      subject.classList.add("input-error");
      isValid = false;
    }
    if (message.value.trim().length < 15) {
      document.getElementById("error-contact-message").innerText = "Write a descriptive message of at least 15 characters.";
      message.classList.add("input-error");
      isValid = false;
    }

    if (isValid) {
      createToast("Sending Message", "Submitting your message to support desk...", "warning");
      
      setTimeout(() => {
        form.reset();
        createToast("Message Transmitted", "Our academic team will respond in 4 hours.", "success");
      }, 1500);
    }
  });
}

/* ==========================================================================
   Scroll-To-Top Button Module
   ========================================================================== */
function initScrollTopBtn() {
  const btn = document.getElementById("scroll-to-top");
  if (!btn) return;

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ==========================================================================
   Cookie Consent Banner Module
   ========================================================================== */
function initCookieConsent() {
  const banner = document.getElementById("cookie-toast");
  if (!banner) return;
  const acceptBtn = document.getElementById("cookie-accept");
  const declineBtn = document.getElementById("cookie-decline");

  const consent = localStorage.getItem("cookie-consent");
  
  if (!consent) {
    setTimeout(() => {
      banner.classList.add("visible");
    }, 2000);
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookie-consent", "accepted");
    banner.classList.remove("visible");
    createToast("Cookies Accepted", "Dashboard preferences synced.", "success");
  });

  declineBtn.addEventListener("click", () => {
    localStorage.setItem("cookie-consent", "declined");
    banner.classList.remove("visible");
  });
}

/* ==========================================================================
   Premium Motion Additions: Cursor Follower & Mouse Parallax
   ========================================================================== */
function initCursorFollower() {
  const follower = document.getElementById("cursor-follower");
  if (!follower) return;

  // Detect touch device and disable custom cursor
  const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
  if (isTouchDevice) {
    follower.style.display = "none";
    return;
  }

  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;
  let isAnimating = false;
  const speed = 0.12;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isAnimating) {
      isAnimating = true;
      requestAnimationFrame(updatePosition);
    }
  }, { passive: true });

  function updatePosition() {
    const dx = mouseX - followerX;
    const dy = mouseY - followerY;
    
    // If extremely close, snap and stop animation loop to conserve resources
    if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) {
      followerX = mouseX;
      followerY = mouseY;
      follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;
      isAnimating = false;
      return;
    }

    followerX += dx * speed;
    followerY += dy * speed;
    
    follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(updatePosition);
  }

  // Event Delegation for hover states (reduces DOM listeners and handles dynamic components)
  document.body.addEventListener("mouseenter", (e) => {
    const target = e.target.closest("a, button, select, input, textarea, .glass-node-card, .galaxy-node-group, .time-slot-btn, .calendar-day-btn, .card");
    if (target) {
      follower.className = "cursor-follower"; // Reset classes
      
      if (target.classList.contains("card") || target.closest(".card")) {
        follower.classList.add("card-hover");
      } else if (target.tagName === "A" && !target.classList.contains("btn")) {
        follower.classList.add("link-hover");
      } else {
        follower.classList.add("btn-hover");
      }
    }
  }, true);

  document.body.addEventListener("mouseleave", (e) => {
    const target = e.target.closest("a, button, select, input, textarea, .glass-node-card, .galaxy-node-group, .time-slot-btn, .calendar-day-btn, .card");
    if (target) {
      follower.className = "cursor-follower";
    }
  }, true);
}

// 3D Card Hover Tilt Effect
function initCardTiltEffect() {
  if (window.matchMedia("(pointer: coarse)").matches) return;

  const cards = document.querySelectorAll(".card-tilt");
  cards.forEach(card => {
    let rect = null;

    const handleEnter = () => {
      rect = card.getBoundingClientRect();
    };

    const handleMove = (e) => {
      if (!rect) rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const width = rect.width;
      const height = rect.height;
      
      const rotateX = ((y - height / 2) / (height / 2)) * -6;
      const rotateY = ((x - width / 2) / (width / 2)) * 6;
      
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };

    const handleLeave = () => {
      card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      rect = null;
    };

    card.removeEventListener("mouseenter", card._tiltEnter);
    card.removeEventListener("mousemove", card._tiltMove);
    card.removeEventListener("mouseleave", card._tiltLeave);
    
    card._tiltEnter = handleEnter;
    card._tiltMove = handleMove;
    card._tiltLeave = handleLeave;
    
    card.addEventListener("mouseenter", handleEnter, { passive: true });
    card.addEventListener("mousemove", handleMove, { passive: true });
    card.addEventListener("mouseleave", handleLeave);
  });
}

// Hero Pointer-Reactive Orbit Interaction
function initHeroOrbitInteraction() {
  const heroSection = document.getElementById("page-home");
  const wrapper = document.querySelector(".orbit-wrapper");
  if (!heroSection || !wrapper) return;

  if (window.matchMedia("(pointer: coarse)").matches) return;

  let rect = null;
  function updateRect() {
    rect = heroSection.getBoundingClientRect();
  }

  window.addEventListener("resize", updateRect, { passive: true });
  heroSection.addEventListener("mouseenter", updateRect, { passive: true });

  const handleMouseMove = throttle((e) => {
    if (!rect) rect = heroSection.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const tiltX = (x / rect.width) * 12;
    const tiltY = (y / rect.height) * 12;

    wrapper.style.transform = `rotateX(${-tiltY}deg) rotateY(${tiltX}deg)`;
  });

  heroSection.addEventListener("mousemove", handleMouseMove, { passive: true });

  heroSection.addEventListener("mouseleave", () => {
    wrapper.style.transform = "rotateX(0deg) rotateY(0deg)";
    rect = null;
  });
}

/* ==========================================================================
   WOW Factor: The Academic Journey Galaxy SVG Controller
   ========================================================================== */
function initJourneyGalaxySection() {
  const container = document.getElementById("journey-galaxy-canvas");
  if (!container) return;
  const btns = document.querySelectorAll(".galaxy-nav-btn");
  const detailPanel = document.getElementById("galaxy-details");
  const detailTitle = document.getElementById("galaxy-details-title");
  const detailDesc = document.getElementById("galaxy-details-desc");

  // Render nodes and SVG paths dynamically
  function drawGradeMilestones(grade = "10") {
    container.innerHTML = "";
    
    const milestones = GALAXY_MILESTONES[grade] || [];
    if (milestones.length === 0) return;

    // 1. Construct SVG Paths
    let pathD = `M ${milestones[0].x} ${milestones[0].y}`;
    for (let i = 1; i < milestones.length; i++) {
      // Create cubic curves for smooth flowing roadmap
      const prev = milestones[i-1];
      const curr = milestones[i];
      const cp1x = prev.x + (curr.x - prev.x) / 2;
      const cp1y = prev.y;
      const cp2x = prev.x + (curr.x - prev.x) / 2;
      const cp2y = curr.y;
      pathD += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
    }

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "galaxy-svg-canvas");
    svg.setAttribute("viewBox", "0 0 800 400");
    svg.innerHTML = `
      <path class="galaxy-svg-path" d="${pathD}"></path>
      <path class="galaxy-svg-path-active" id="active-draw-path" d="${pathD}"></path>
    `;
    container.appendChild(svg);

    // 2. Position nodes
    milestones.forEach((stone, index) => {
      const node = document.createElement("div");
      node.className = `galaxy-node-group ${index === 0 ? 'active' : ''}`;
      node.style.left = `${(stone.x / 800) * 100}%`;
      node.style.top = `${(stone.y / 400) * 100}%`;
      node.innerHTML = `
        <button class="galaxy-node-dot" aria-label="Milestone: ${stone.title}"></button>
        <span class="galaxy-node-label">${stone.title}</span>
      `;
      
      // Bind click triggers
      node.querySelector(".galaxy-node-dot").addEventListener("click", () => {
        container.querySelectorAll(".galaxy-node-group").forEach(n => n.classList.remove("active"));
        node.classList.add("active");
        
        // Show detail info
        detailTitle.innerText = stone.title;
        detailDesc.innerText = stone.desc;
        detailPanel.classList.add("visible");
      });

      container.appendChild(node);
    });

    // Populate initial text info
    detailTitle.innerText = milestones[0].title;
    detailDesc.innerText = milestones[0].desc;
    detailPanel.classList.add("visible");
  }

  // Bind Grade nav tabs
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const grade = btn.getAttribute("data-journey-class");
      drawGradeMilestones(grade);
    });
  });

  // Initial render
  drawGradeMilestones("10");
}

/* ==========================================================================
   Ambient Animation Pause (Performance — off-viewport)
   ========================================================================== */
function initAmbientAnimationPause() {
  const mesh = document.querySelector(".bg-gradient-mesh");
  const heroOrbit = document.querySelector(".hero-constellation-container");
  if (!mesh && !heroOrbit) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    mesh?.classList.add("paused");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const target = entry.target;
        if (entry.isIntersecting) {
          target.classList.remove("paused");
        } else {
          target.classList.add("paused");
        }
      });
    },
    { root: null, threshold: 0, rootMargin: "100px" }
  );

  if (mesh) observer.observe(mesh);
  if (heroOrbit) observer.observe(heroOrbit);
}

/* ==========================================================================
   Methodology Phase Indicator Clicks
   ========================================================================== */
function initMethodologyIndicators() {
  const indicators = document.querySelectorAll(".methodology-indicator-item");
  if (!indicators.length) return;

  indicators.forEach((item) => {
    item.addEventListener("click", () => {
      const phase = item.getAttribute("data-phase");
      const card = document.getElementById(`phase-card-${phase}`);
      if (card) {
        card.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });

    item.setAttribute("role", "button");
    item.setAttribute("tabindex", "0");
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        item.click();
      }
    });
  });
}

/* ==========================================================================
   Click Ripple & Magnetic Buttons Effects
   ========================================================================== */
const handleMagnetics = throttle((e) => {
  if (window.matchMedia("(pointer: coarse)").matches) return;
  const magnetics = document.querySelectorAll(".magnetic-btn");
  
  magnetics.forEach(btn => {
    const rect = btn.getBoundingClientRect();
    const btnX = rect.left + rect.width / 2;
    const btnY = rect.top + rect.height / 2;
    const distX = e.clientX - btnX;
    const distY = e.clientY - btnY;
    const limit = 60;

    if (Math.abs(distX) < limit && Math.abs(distY) < limit) {
      const pullX = distX * 0.25;
      const pullY = distY * 0.25;
      btn.style.transform = `translate3d(${pullX}px, ${pullY}px, 0) scale3d(1.02, 1.02, 1.02)`;
    } else {
      btn.style.transform = "translate3d(0px, 0px, 0) scale3d(1, 1, 1)";
    }
  });
});

document.addEventListener("mousemove", handleMagnetics, { passive: true });

// Click Ripple triggers
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn");
  if (!btn) return;

  const ripple = document.createElement("span");
  ripple.className = "ripple";
  
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
  ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
  
  btn.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 600);
});

/* ==========================================================================
   Utility Helpers & Toast Alert Factory
   ========================================================================== */
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  const re = /^[6-9]\d{9}$/;
  return re.test(phone);
}

function createToast(title, body, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  let iconName = "check-circle";
  if (type === "warning") iconName = "alert-circle";
  if (type === "danger") iconName = "x-circle";

  toast.innerHTML = `
    <i data-lucide="${iconName}" class="icon" style="margin-top:2px;"></i>
    <div class="toast-content" style="flex:1;">
      <h5>${title}</h5>
      <p>${body}</p>
    </div>
    <button type="button" class="toast-close" aria-label="Close Toast Notification">
      <i data-lucide="x" class="icon" style="width:14px; height:14px;"></i>
    </button>
  `;

  toast.querySelector(".toast-close").addEventListener("click", () => {
    toast.classList.remove("visible");
    setTimeout(() => toast.remove(), 300);
  });

  container.appendChild(toast);
  lucide.createIcons();

  setTimeout(() => {
    toast.classList.add("visible");
  }, 10);

  setTimeout(() => {
    if (toast.parentNode) {
      toast.classList.remove("visible");
      setTimeout(() => toast.remove(), 300);
    }
  }, 5000);
}

// Global Throttle Utility for 60 FPS Event Handling
function throttle(fn) {
  let active = false;
  return function(...args) {
    if (active) return;
    active = true;
    requestAnimationFrame(() => {
      fn.apply(this, args);
      active = false;
    });
  };
}

function initFeatureShowcase() {
  const cards = document.querySelectorAll(".feature-showcase-card");
  const screens = document.querySelectorAll(".mockup-screen");
  if (!cards.length) return;

  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      const targetId = card.getAttribute("data-showcase");
      
      cards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");

      screens.forEach(s => s.classList.remove("active"));
      const targetScreen = document.getElementById(`mockup-${targetId}`);
      if (targetScreen) {
        targetScreen.classList.add("active");
      }
    });
  });

  const gradeBtn = document.getElementById("grade-action-btn");
  const gradeStamp = document.getElementById("grade-stamp");
  if (gradeBtn && gradeStamp) {
    gradeBtn.addEventListener("click", () => {
      gradeStamp.classList.add("stamped");
      createToast("Worksheet Graded", "Handwritten reviews and red-line grading applied.", "success");
    });
  }
}

function initFilterIndicators() {
  const filterBars = document.querySelectorAll(".filter-bar");
  
  filterBars.forEach(bar => {
    const indicator = bar.querySelector(".filter-indicator");
    if (!indicator) return;

    function updateIndicator(activeBtn) {
      if (!activeBtn) return;
      indicator.style.width = `${activeBtn.offsetWidth}px`;
      indicator.style.height = `${activeBtn.offsetHeight}px`;
      indicator.style.left = `${activeBtn.offsetLeft}px`;
      indicator.style.top = `${activeBtn.offsetTop}px`;
    }

    const activeBtn = bar.querySelector(".filter-btn.active");
    if (activeBtn) {
      setTimeout(() => updateIndicator(activeBtn), 150);
    }

    const buttons = bar.querySelectorAll(".filter-btn");
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        updateIndicator(btn);
      });
    });

    window.addEventListener("resize", () => {
      const currentActive = bar.querySelector(".filter-btn.active");
      updateIndicator(currentActive);
    });

    // Handle SPA routing views visibility transition
    window.addEventListener("hashchange", () => {
      setTimeout(() => {
        const currentActive = bar.querySelector(".filter-btn.active");
        updateIndicator(currentActive);
      }, 100);
    });
  });
}
