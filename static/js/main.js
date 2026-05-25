/* ═══════════════════════════════════════════════════════════════
   SURYADIP.DEV — Main JavaScript v3.0
   Features: Particles, sparkles, typing, counters, tilt, carousel,
             magnetic hover, back-to-top, scroll spy, preloader,
             project modal, toast notifications, heatmap, theme picker,
             spotlight effect, split text reveal, floating hero icons
═══════════════════════════════════════════════════════════════ */

/* ── Data ──────────────────────────────────────────────────────── */
const SKILLS = [
  { name: "Python",    icon: "code" },
  { name: "C++",       icon: "cpu" },
  { name: "SQL",       icon: "database" },
  { name: "React",     icon: "layers" },
  { name: "Node.js",   icon: "server" },
  { name: "Postgres",  icon: "table" },
  { name: "ML",        icon: "brain" },
  { name: "Java",      icon: "coffee" },
  { name: "TensorFlow",icon: "activity" },
  { name: "Flask",     icon: "flask-conical" },
  { name: "MongoDB",   icon: "disc" },
  { name: "Git",       icon: "git-branch" },
  { name: "Linux",     icon: "terminal" },
  { name: "Docker",    icon: "box" },
  { name: "REST API",  icon: "plug" },
  { name: "JS",        icon: "file-code" },
];

const EXPERIENCE = [
  {
    role: "DSA Problem Solving",
    company: "Platform Mastery",
    period: "Ongoing",
    desc: "Mastered 500+ problems across LeetCode, Codeforces, and GFG. Strong grip on Dynamic Programming, Graphs, Trees, and Segment Trees.",
  },
  {
    role: "SQL & Database Design",
    company: "Portfolio Tech",
    period: "2024",
    desc: "Optimized complex SQL queries with CTEs and window functions. Designed normalized schemas for scalable relational databases.",
  },
  {
    role: "AI App Development",
    company: "Project Portfolio",
    period: "2024",
    desc: "Developed automation scripts and ML-integrated apps using Python, Pandas, Scikit-learn, and Jupyter environments.",
  },
];

const ACHIEVEMENTS = [
  {
    emoji: "🏆",
    colorClass: "gold",
    text: "Solved 1000+ DSA problems on LeetCode — achieved Knight Badge, ranking in the Top 5% globally.",
    title: "LeetCode Knight",
    subtitle: "Top 5% Global Ranking",
  },
  {
    emoji: "🧠",
    colorClass: "blue",
    text: "Built 15+ AI/ML models for predictive analytics, NLP, and computer vision projects with TensorFlow and Scikit-learn.",
    title: "AI/ML Builder",
    subtitle: "15+ Production Models",
  },
  {
    emoji: "🚀",
    colorClass: "green",
    text: "Shipped 20+ full-stack applications and open-source projects with React, Node.js, Flask, and PostgreSQL.",
    title: "Full Stack Shipper",
    subtitle: "20+ Projects Deployed",
  },
  {
    emoji: "🎓",
    colorClass: "pink",
    text: "Maintaining 9+ CGPA throughout the B.Tech program while actively competing on Codeforces and LeetCode.",
    title: "Academic Excellence",
    subtitle: "9+ CGPA Consistently",
  },
];

const EDUCATION = [
  {
    degree: "B.Tech in Computer Science",
    school: "University Name",
    year: "2021 – 2025",
    detail: "Focused on AI/ML, Data Structures & Algorithms, and Database Systems. Active member of the coding club.",
    gpa: "9+ CGPA",
  },
  {
    degree: "Higher Secondary (12th)",
    school: "School Name",
    year: "2019 – 2021",
    detail: "Science stream with Mathematics. Cleared national-level competitive exams.",
    gpa: "90%+",
  },
  {
    degree: "Secondary (10th)",
    school: "School Name",
    year: "2019",
    detail: "Strong foundation in Mathematics and Computer Science.",
    gpa: "95%+",
  },
];

const MARQUEE_ITEMS = [
  { name: "Python", icon: "code" },
  { name: "C++", icon: "cpu" },
  { name: "React", icon: "layers" },
  { name: "TensorFlow", icon: "activity" },
  { name: "Node.js", icon: "server" },
  { name: "PostgreSQL", icon: "database" },
  { name: "MongoDB", icon: "disc" },
  { name: "Docker", icon: "box" },
  { name: "Git", icon: "git-branch" },
  { name: "Flask", icon: "flask-conical" },
  { name: "Linux", icon: "terminal" },
  { name: "Java", icon: "coffee" },
  { name: "REST API", icon: "plug" },
  { name: "JavaScript", icon: "file-code" },
  { name: "Machine Learning", icon: "brain" },
  { name: "SQL", icon: "table" },
];

const TYPING_WORDS = [
  "Solve Problems.",
  "Build Solutions.",
  "Ship Code.",
  "Love DSA.",
  "Train Models.",
];

const HERO_ICONS = ["⚡", "🧠", "💻", "🔥", "🚀", "⭐", "🎯", "📊", "🔗", "⚙️", "🐍", "☕"];

// Store project data globally for modal
let PROJECT_DATA = [];

/* ── Init ──────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", async () => {
  lucide.createIcons();
  initPreloader();
  initParticles();
  initSparkles();
  initCursor();
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initScrollSpy();
  initScrollProgress();
  initTypingAnimation();
  initSplitTextReveal();
  initSpotlightEffect();
  initHeroFloatingIcons();
  renderMarquee();
  renderSkills();
  renderExperience();
  renderAchievements();
  renderEducation();
  renderHeatmap();
  initFilterButtons();
  initContactForm();
  initBackToTop();
  initStatCounters();
  initCardTilt();
  initMagneticButtons();
  initProjectModal();
  initThemePicker();
  await loadProjects();
  animateDiffBars();
});

/* ═══════════════════════════════════════════════════════════════
   PRELOADER
═══════════════════════════════════════════════════════════════ */
function initPreloader() {
  const preloader = document.getElementById("preloader");
  if (!preloader) return;
  window.addEventListener("load", () => {
    setTimeout(() => preloader.classList.add("loaded"), 600);
  });
  setTimeout(() => preloader.classList.add("loaded"), 3000);
}

/* ═══════════════════════════════════════════════════════════════
   SCROLL PROGRESS BAR
═══════════════════════════════════════════════════════════════ */
function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    bar.style.width = progress + "%";
  }, { passive: true });
}

/* ═══════════════════════════════════════════════════════════════
   PARTICLE CANVAS
═══════════════════════════════════════════════════════════════ */
function initParticles() {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w, h, particles;
  const COUNT = 80;
  const CONN = 120;
  const MOUSE = { x: -1000, y: -1000 };

  function resize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
  function create() {
    particles = [];
    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5, alpha: Math.random() * 0.5 + 0.2,
      });
    }
  }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONN) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(129,140,248,${(1 - dist / CONN) * 0.15})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    particles.forEach((p) => {
      const mdx = p.x - MOUSE.x, mdy = p.y - MOUSE.y;
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mdist < 100) { p.x += mdx * 0.02; p.y += mdy * 0.02; }
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(129,140,248,${p.alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  resize(); create(); draw();
  window.addEventListener("resize", () => { resize(); create(); });
  document.addEventListener("mousemove", (e) => { MOUSE.x = e.clientX; MOUSE.y = e.clientY; });
}

/* ═══════════════════════════════════════════════════════════════
   CURSOR SPARKLE TRAIL
═══════════════════════════════════════════════════════════════ */
function initSparkles() {
  const canvas = document.getElementById("sparkle-canvas");
  if (!canvas) return;
  if ('ontouchstart' in window) return;
  const ctx = canvas.getContext("2d");
  let w, h;
  const sparkles = [];

  function resize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
  resize();
  window.addEventListener("resize", resize);

  let lastX = 0, lastY = 0, throttle = 0;
  document.addEventListener("mousemove", (e) => {
    throttle++;
    if (throttle % 3 !== 0) return;
    const dx = e.clientX - lastX, dy = e.clientY - lastY;
    if (Math.abs(dx) + Math.abs(dy) > 5) {
      for (let i = 0; i < 2; i++) {
        sparkles.push({
          x: e.clientX + (Math.random() - 0.5) * 10,
          y: e.clientY + (Math.random() - 0.5) * 10,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2 - 1,
          life: 1,
          size: Math.random() * 3 + 1,
          color: Math.random() > 0.5 ? "129,140,248" : "192,132,252",
        });
      }
    }
    lastX = e.clientX; lastY = e.clientY;
  });

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (let i = sparkles.length - 1; i >= 0; i--) {
      const s = sparkles[i];
      s.x += s.vx;
      s.y += s.vy;
      s.vy += 0.03;
      s.life -= 0.025;
      if (s.life <= 0) { sparkles.splice(i, 1); continue; }
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${s.color},${s.life * 0.6})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  draw();
}

/* ═══════════════════════════════════════════════════════════════
   SPOTLIGHT EFFECT
═══════════════════════════════════════════════════════════════ */
function initSpotlightEffect() {
  document.addEventListener("mousemove", (e) => {
    const sections = document.querySelectorAll(".spotlight-section");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      section.style.setProperty("--spotlight-x", x + "px");
      section.style.setProperty("--spotlight-y", y + "px");
    });
  });
}

/* ═══════════════════════════════════════════════════════════════
   SPLIT TEXT REVEAL
═══════════════════════════════════════════════════════════════ */
function initSplitTextReveal() {
  document.querySelectorAll(".split-reveal").forEach((el) => {
    let charIndex = 0;

    function wrapNode(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent;
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < text.length; i++) {
          const char = text[i];
          if (char === ' ') {
            fragment.appendChild(document.createTextNode(' '));
          } else {
            const span = document.createElement('span');
            span.className = 'char';
            span.textContent = char;
            span.style.transitionDelay = `${charIndex * 30}ms`;
            charIndex++;
            fragment.appendChild(span);
          }
        }
        node.parentNode.replaceChild(fragment, node);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const children = Array.from(node.childNodes);
        children.forEach(wrapNode);
      }
    }

    const children = Array.from(el.childNodes);
    children.forEach(wrapNode);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
  });
}

/* ═══════════════════════════════════════════════════════════════
   FLOATING HERO ICONS
═══════════════════════════════════════════════════════════════ */
function initHeroFloatingIcons() {
  const container = document.getElementById("hero-float-icons");
  if (!container) return;
  HERO_ICONS.forEach((icon, i) => {
    const el = document.createElement("div");
    el.className = "hero-float-icon";
    el.textContent = icon;
    el.style.left = Math.random() * 100 + "%";
    el.style.animationDelay = (Math.random() * 20) + "s";
    el.style.animationDuration = (15 + Math.random() * 15) + "s";
    el.style.fontSize = (1 + Math.random() * 1.5) + "rem";
    container.appendChild(el);
  });
}

/* ═══════════════════════════════════════════════════════════════
   CUSTOM CURSOR
═══════════════════════════════════════════════════════════════ */
function initCursor() {
  const cursor   = document.getElementById("cursor");
  const follower = document.getElementById("cursor-follower");
  if (!cursor || !follower) return;
  if ('ontouchstart' in window) { cursor.style.display='none'; follower.style.display='none'; return; }

  let mx=0, my=0, fx=0, fy=0;
  document.addEventListener("mousemove", (e) => {
    mx=e.clientX; my=e.clientY;
    cursor.style.left=mx+"px"; cursor.style.top=my+"px";
  });
  const lerp = (a,b,t) => a+(b-a)*t;
  const loop = () => {
    fx=lerp(fx,mx,0.12); fy=lerp(fy,my,0.12);
    follower.style.left=fx+"px"; follower.style.top=fy+"px";
    requestAnimationFrame(loop);
  };
  loop();

  const interactives = "a, button, .filter-btn, .skill-tag, .project-card, .profile-card, .fact-card, .edu-content, input, textarea, .theme-dot";
  document.addEventListener("mouseenter", (e) => {
    if (e.target.closest(interactives)) {
      cursor.style.transform="translate(-50%,-50%) scale(2.5)";
      cursor.style.opacity="0.5";
      cursor.style.background="var(--secondary)";
      follower.style.transform="translate(-50%,-50%) scale(1.5)";
      follower.style.borderColor="rgba(192,132,252,0.4)";
    }
  }, true);
  document.addEventListener("mouseleave", (e) => {
    if (e.target.closest(interactives)) {
      cursor.style.transform="translate(-50%,-50%) scale(1)";
      cursor.style.opacity="1";
      cursor.style.background="var(--primary)";
      follower.style.transform="translate(-50%,-50%) scale(1)";
      follower.style.borderColor="rgba(129,140,248,0.4)";
    }
  }, true);
}

/* ═══════════════════════════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════════════════════════ */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 80);
  }, { passive: true });
}

/* ═══════════════════════════════════════════════════════════════
   MOBILE MENU
═══════════════════════════════════════════════════════════════ */
function initMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const menu   = document.getElementById("mobile-menu");
  if (!toggle || !menu) return;
  const open  = () => { menu.classList.add("open"); toggle.classList.add("open"); document.body.style.overflow="hidden"; };
  const close = () => { menu.classList.remove("open"); toggle.classList.remove("open"); document.body.style.overflow=""; };
  toggle.addEventListener("click", () => menu.classList.contains("open") ? close() : open());
  menu.querySelectorAll(".mobile-link").forEach((l) => l.addEventListener("click", close));
}

/* ═══════════════════════════════════════════════════════════════
   SCROLL REVEAL
═══════════════════════════════════════════════════════════════ */
function initScrollReveal() {
  const obs = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("reveal-visible"); animateDiffBars(e.target); obs.unobserve(e.target); }
    }),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".scroll-reveal, .scroll-reveal-scale").forEach((el) => obs.observe(el));
}

function animateDiffBars(root = document) {
  root.querySelectorAll(".fill").forEach((bar) => bar.classList.add("active"));
}

/* ═══════════════════════════════════════════════════════════════
   SCROLL SPY
═══════════════════════════════════════════════════════════════ */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link[data-section]");
  const obs = new IntersectionObserver(
    (entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach((link) => link.classList.toggle("active-link", link.dataset.section === id));
      }
    }),
    { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
  );
  sections.forEach((s) => obs.observe(s));
}

/* ═══════════════════════════════════════════════════════════════
   TYPING ANIMATION
═══════════════════════════════════════════════════════════════ */
function initTypingAnimation() {
  const target = document.getElementById("typing-target");
  if (!target) return;
  let wordIndex=0, charIndex=0, isDeleting=false;
  function type() {
    const word = TYPING_WORDS[wordIndex];
    if (isDeleting) { charIndex--; target.textContent=word.substring(0,charIndex); }
    else { charIndex++; target.textContent=word.substring(0,charIndex); }
    let delay = isDeleting ? 40 : 80;
    if (!isDeleting && charIndex === word.length) { delay=2000; isDeleting=true; }
    else if (isDeleting && charIndex === 0) { isDeleting=false; wordIndex=(wordIndex+1)%TYPING_WORDS.length; delay=300; }
    setTimeout(type, delay);
  }
  setTimeout(type, 1200);
}

/* ═══════════════════════════════════════════════════════════════
   STAT COUNTERS
═══════════════════════════════════════════════════════════════ */
function initStatCounters() {
  const counters = document.querySelectorAll("[data-count]");
  const obs = new IntersectionObserver(
    (entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || "";
        const duration = 2000;
        const start = performance.now();
        function update(now) {
          const p = Math.min((now-start)/duration, 1);
          const eased = 1-Math.pow(1-p,3);
          el.textContent = Math.floor(eased*target)+suffix;
          if (p<1) requestAnimationFrame(update);
          else el.textContent = target+suffix;
        }
        requestAnimationFrame(update);
        obs.unobserve(el);
      }
    }),
    { threshold: 0.5 }
  );
  counters.forEach((c) => obs.observe(c));
}

/* ═══════════════════════════════════════════════════════════════
   3D CARD TILT
═══════════════════════════════════════════════════════════════ */
function initCardTilt() {
  const card = document.getElementById("tilt-card");
  if (card) {
    card.addEventListener("mousemove", (e) => {
      const r=card.getBoundingClientRect();
      const x=e.clientX-r.left, y=e.clientY-r.top;
      const rx=((y-r.height/2)/r.height*2)*-8, ry=((x-r.width/2)/r.width*2)*8;
      card.style.transform=`perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
    });
    card.addEventListener("mouseleave", () => { card.style.transform="perspective(1000px) rotateX(0) rotateY(0) scale(1)"; });
  }

  document.addEventListener("mousemove", (e) => {
    const pc = e.target.closest(".project-card");
    if (!pc) return;
    const r=pc.getBoundingClientRect();
    const rx=((e.clientY-r.top-r.height/2)/r.height*2)*-4;
    const ry=((e.clientX-r.left-r.width/2)/r.width*2)*4;
    pc.style.transform=`translateY(-8px) perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  document.addEventListener("mouseleave", (e) => {
    const pc = e.target.closest(".project-card");
    if (pc) pc.style.transform="";
  }, true);
}

/* ═══════════════════════════════════════════════════════════════
   MAGNETIC BUTTONS
═══════════════════════════════════════════════════════════════ */
function initMagneticButtons() {
  document.querySelectorAll(".magnetic-btn").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const r=btn.getBoundingClientRect();
      const x=e.clientX-r.left-r.width/2, y=e.clientY-r.top-r.height/2;
      btn.style.transform=`translate(${x*0.2}px,${y*0.2}px)`;
    });
    btn.addEventListener("mouseleave", () => { btn.style.transform=""; });
  });
}

/* ═══════════════════════════════════════════════════════════════
   BACK TO TOP
═══════════════════════════════════════════════════════════════ */
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;
  window.addEventListener("scroll", () => { btn.classList.toggle("visible", window.scrollY>400); }, { passive: true });
  btn.addEventListener("click", () => { window.scrollTo({top:0,behavior:"smooth"}); });
}

/* ═══════════════════════════════════════════════════════════════
   TOAST NOTIFICATIONS
═══════════════════════════════════════════════════════════════ */
function showToast(title, msg, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <div class="toast-icon ${type}">
      <i data-lucide="${type === 'success' ? 'check-circle' : 'alert-circle'}"></i>
    </div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${msg}</div>
    </div>
    <button class="toast-close" aria-label="Close">
      <i data-lucide="x"></i>
    </button>
    <div class="toast-progress"></div>
  `;
  container.appendChild(toast);
  lucide.createIcons();

  toast.querySelector(".toast-close").addEventListener("click", () => removeToast(toast));
  setTimeout(() => removeToast(toast), 4000);
}

function removeToast(toast) {
  if (!toast || toast.classList.contains("toast-out")) return;
  toast.classList.add("toast-out");
  setTimeout(() => toast.remove(), 400);
}

/* ═══════════════════════════════════════════════════════════════
   PROJECT MODAL
═══════════════════════════════════════════════════════════════ */
function initProjectModal() {
  const modal     = document.getElementById("project-modal");
  const backdrop  = document.getElementById("modal-backdrop");
  const closeBtn  = document.getElementById("modal-close");
  const closeBtn2 = document.getElementById("modal-close-btn");
  if (!modal) return;

  function closeModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  backdrop?.addEventListener("click", closeModal);
  closeBtn?.addEventListener("click", closeModal);
  closeBtn2?.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
}

function openProjectModal(project) {
  const modal = document.getElementById("project-modal");
  if (!modal) return;

  document.getElementById("modal-img").src = project.img;
  document.getElementById("modal-img").alt = project.title;
  document.getElementById("modal-category").textContent = project.category;
  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-desc").textContent = project.desc;
  document.getElementById("modal-tags").innerHTML = project.tags.map(
    (t) => `<span class="modal-tag">${t}</span>`
  ).join("");
  document.getElementById("modal-github").href = project.github || "#";

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  lucide.createIcons();
}

/* ═══════════════════════════════════════════════════════════════
   THEME ACCENT PICKER
═══════════════════════════════════════════════════════════════ */
function initThemePicker() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const dots = document.getElementById("theme-dots");
  if (!toggleBtn || !dots) return;

  toggleBtn.addEventListener("click", () => {
    dots.classList.toggle("open");
  });

  dots.querySelectorAll(".theme-dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      const theme = dot.dataset.theme;
      if (theme === "indigo") {
        document.documentElement.removeAttribute("data-accent");
      } else {
        document.documentElement.setAttribute("data-accent", theme);
      }
      dots.querySelectorAll(".theme-dot").forEach((d) => d.classList.remove("active-theme"));
      dot.classList.add("active-theme");
      dots.classList.remove("open");
      showToast("Theme Changed", `Accent color set to ${theme}`, "success");
    });
  });

  // Close when clicking elsewhere
  document.addEventListener("click", (e) => {
    if (!e.target.closest("#theme-picker")) dots.classList.remove("open");
  });
}

/* ═══════════════════════════════════════════════════════════════
   GITHUB HEATMAP
═══════════════════════════════════════════════════════════════ */
function renderHeatmap() {
  const grid = document.getElementById("heatmap-grid");
  if (!grid) return;

  // Generate 52 weeks × 7 days = 364 cells
  const cells = [];
  for (let i = 0; i < 364; i++) {
    const level = Math.random();
    let cls = "";
    if (level > 0.85) cls = "l4";
    else if (level > 0.65) cls = "l3";
    else if (level > 0.4) cls = "l2";
    else if (level > 0.2) cls = "l1";
    cells.push(`<div class="heatmap-cell ${cls}" title="Day ${i + 1}"></div>`);
  }
  grid.innerHTML = cells.join("");
}

/* ═══════════════════════════════════════════════════════════════
   MARQUEE
═══════════════════════════════════════════════════════════════ */
function renderMarquee() {
  const track = document.getElementById("marquee-track");
  if (!track) return;
  const buildItems = () =>
    MARQUEE_ITEMS.map((item) =>
      `<div class="marquee-item"><i data-lucide="${item.icon}"></i><span>${item.name}</span></div><span class="marquee-separator">◆</span>`
    ).join("");
  track.innerHTML = buildItems() + buildItems();
  lucide.createIcons();
}

/* ═══════════════════════════════════════════════════════════════
   SKILLS
═══════════════════════════════════════════════════════════════ */
function renderSkills() {
  const container = document.getElementById("skill-cloud");
  if (!container) return;
  container.innerHTML = SKILLS.map(
    (s,i) => `<div class="skill-tag scroll-reveal" style="--delay:${i*40}ms"><i data-lucide="${s.icon}"></i><span>${s.name}</span></div>`
  ).join("");
  lucide.createIcons();
  document.querySelectorAll(".skill-tag").forEach((el) => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("reveal-visible"); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    obs.observe(el);
  });
}

/* ═══════════════════════════════════════════════════════════════
   EXPERIENCE
═══════════════════════════════════════════════════════════════ */
function renderExperience() {
  const list = document.getElementById("experience-list");
  if (!list) return;
  list.innerHTML = EXPERIENCE.map(
    (e,i) => `
    <div class="exp-item scroll-reveal" style="--delay:${i*100}ms">
      <div class="exp-line"><div class="exp-dot"></div><div class="exp-connector"></div></div>
      <div class="exp-content">
        <div class="exp-meta"><h4 class="exp-role">${e.role}</h4><span class="exp-period">${e.period}</span></div>
        <p class="exp-company">${e.company}</p>
        <p class="exp-desc">${e.desc}</p>
      </div>
    </div>`
  ).join("");
}

/* ═══════════════════════════════════════════════════════════════
   ACHIEVEMENTS CAROUSEL
═══════════════════════════════════════════════════════════════ */
function renderAchievements() {
  const track = document.getElementById("testimonials-track");
  const dotsWrap = document.getElementById("testimonial-dots");
  if (!track || !dotsWrap) return;

  track.innerHTML = ACHIEVEMENTS.map(
    (a) => `
    <div class="testimonial-card">
      <div class="testimonial-icon ${a.colorClass}">${a.emoji}</div>
      <div class="testimonial-author">${a.title}</div>
      <div class="testimonial-role">${a.subtitle}</div>
      <p class="testimonial-text">"${a.text}"</p>
    </div>`
  ).join("");

  dotsWrap.innerHTML = ACHIEVEMENTS.map(
    (_,i) => `<button class="t-dot ${i===0?"active":""}" data-index="${i}" aria-label="Slide ${i+1}"></button>`
  ).join("");

  let cur = 0;
  const total = ACHIEVEMENTS.length;
  function goTo(idx) {
    cur = ((idx%total)+total)%total;
    track.style.transform = `translateX(-${cur*100}%)`;
    dotsWrap.querySelectorAll(".t-dot").forEach((d,i) => d.classList.toggle("active", i===cur));
  }
  dotsWrap.addEventListener("click", (e) => { const d=e.target.closest(".t-dot"); if (d) goTo(parseInt(d.dataset.index)); });
  document.getElementById("carousel-prev")?.addEventListener("click", () => goTo(cur-1));
  document.getElementById("carousel-next")?.addEventListener("click", () => goTo(cur+1));

  let auto = setInterval(() => goTo(cur+1), 5000);
  const wrapper = track.closest(".testimonials-wrapper");
  if (wrapper) {
    wrapper.addEventListener("mouseenter", () => clearInterval(auto));
    wrapper.addEventListener("mouseleave", () => { auto = setInterval(() => goTo(cur+1), 5000); });
  }
  lucide.createIcons();
}

/* ═══════════════════════════════════════════════════════════════
   EDUCATION
═══════════════════════════════════════════════════════════════ */
function renderEducation() {
  const container = document.getElementById("education-timeline");
  if (!container) return;
  container.innerHTML = EDUCATION.map(
    (e,i) => `
    <div class="edu-item scroll-reveal" style="--delay:${i*120}ms">
      <div class="edu-line"><div class="edu-dot"></div><div class="edu-connector"></div></div>
      <div class="edu-content">
        <div class="edu-header"><h4 class="edu-degree">${e.degree}</h4><span class="edu-year">${e.year}</span></div>
        <p class="edu-school">${e.school}</p>
        <p class="edu-detail">${e.detail}</p>
        <div class="edu-gpa"><i data-lucide="award" style="width:12px;height:12px"></i>${e.gpa}</div>
      </div>
    </div>`
  ).join("");
  lucide.createIcons();
  container.querySelectorAll(".edu-item").forEach((el) => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("reveal-visible"); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    obs.observe(el);
  });
}

/* ═══════════════════════════════════════════════════════════════
   PROJECTS
═══════════════════════════════════════════════════════════════ */
async function loadProjects(filter = "All") {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  try {
    const res = await fetch("/api/projects");
    const data = await res.json();
    PROJECT_DATA = data;
    renderProjects(data, filter);
  } catch {
    const fallback = [
      { id:1,title:"NeuralCore AI",category:"AI",tags:["Python","TensorFlow","Pandas"],img:"https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",desc:"A custom ML model for predictive analytics with Jupyter-based research.",github:"#"},
      { id:2,title:"DataLink SQL Engine",category:"Web",tags:["PostgreSQL","Node.js","SQL"],img:"https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800",desc:"A high-performance query optimizer for relational databases.",github:"#"},
      { id:3,title:"DevFlow FullStack",category:"Web",tags:["React","Node.js","MongoDB"],img:"https://images.unsplash.com/photo-1551288049-bbbda536ad0a?auto=format&fit=crop&q=80&w=800",desc:"Enterprise project management tool with real-time collaboration features.",github:"#"},
      { id:4,title:"Algo-Viz 3D",category:"DSA",tags:["Three.js","C++","WebAssembly"],img:"https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",desc:"3D visualization of graph algorithms and dynamic programming state transitions.",github:"#"},
      { id:5,title:"Sentiment Bot",category:"AI",tags:["NLTK","Flask","Python"],img:"https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800",desc:"Natural Language Processing tool to analyze customer feedback on scale.",github:"#"},
      { id:6,title:"SwiftCommerce",category:"Web",tags:["Tailwind","Firebase","Redux"],img:"https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",desc:"Fast-loading e-commerce template optimized for core web vitals.",github:"#"},
    ];
    PROJECT_DATA = fallback;
    renderProjects(fallback, filter);
  }
}

function renderProjects(data, filter = "All") {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  const filtered = filter === "All" ? data : data.filter((p) => p.category === filter);

  grid.innerHTML = filtered.map((p) => `
    <div class="project-card scroll-reveal" data-project-id="${p.id}">
      <div class="project-img-wrap">
        <img src="${p.img}" alt="${p.title}" loading="lazy" />
        <div class="project-overlay"></div>
        <span class="project-badge">${p.category}</span>
        <a href="${p.github||'#'}" target="_blank" rel="noopener" class="project-link ext-link" aria-label="GitHub" onclick="event.stopPropagation()">
          <i data-lucide="github"></i>
        </a>
        <span class="project-click-hint">Click to view</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tags">
          ${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("");

  lucide.createIcons();

  // Click to open modal
  grid.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = parseInt(card.dataset.projectId);
      const project = PROJECT_DATA.find((p) => p.id === id);
      if (project) openProjectModal(project);
    });
  });

  // Observe for reveal
  grid.querySelectorAll(".project-card").forEach((card) => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("reveal-visible"); obs.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    obs.observe(card);
  });
}

/* ═══════════════════════════════════════════════════════════════
   FILTER BUTTONS
═══════════════════════════════════════════════════════════════ */
function initFilterButtons() {
  const btns = document.querySelectorAll(".filter-btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", async () => {
      btns.forEach((b) => b.classList.remove("active-filter"));
      btn.classList.add("active-filter");
      await loadProjects(btn.dataset.filter);
    });
  });
}

/* ═══════════════════════════════════════════════════════════════
   CONTACT FORM (with toast)
═══════════════════════════════════════════════════════════════ */
function initContactForm() {
  const form    = document.getElementById("contact-form");
  const success = document.getElementById("form-success");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = form.querySelector(".btn-submit");
    const textSpan = btn.querySelector(".btn-text");
    btn.disabled = true;
    textSpan.textContent = "Sending…";

    const payload = {
      name:    form.querySelector("[name='name']").value,
      email:   form.querySelector("[name='email']").value,
      message: form.querySelector("[name='message']").value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        form.classList.add("hidden");
        success.classList.remove("hidden");
        lucide.createIcons();
        showToast("Message Sent! 🎉", "I'll get back to you within 24 hours.", "success");
      } else {
        textSpan.textContent = "Send Message";
        btn.disabled = false;
        showToast("Oops!", data.message || "Something went wrong.", "error");
      }
    } catch {
      form.classList.add("hidden");
      success.classList.remove("hidden");
      lucide.createIcons();
      showToast("Message Sent! 🎉", "I'll get back to you soon.", "success");
    }
  });
}
