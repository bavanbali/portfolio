const skills = [
  { icon: "</>", title: "Programming", items: ["C++", "Java", "Python", "JavaScript"] },
  { icon: "⌘", title: "Web development", items: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js"] },
  { icon: "▤", title: "Database", items: ["MongoDB", "MySQL", "SQLite"] },
  { icon: "⚙", title: "Tools & interests", items: ["Git", "GitHub", "VS Code", "Postman", "AI & ML", "DSA"] },
];

const projects = [
  {
    title: "Job Finder AI",
    description: "Published static demo with job discovery, search, and location/category filters. Firebase sign-in and saved-job data need project configuration.",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    symbol: "⌕",
    github: "https://github.com/BavanBali/JobFinder-AI",
    demo: "https://bavanbali.github.io/JobFinder-AI/",
  },
  {
    title: "StudyMate AI",
    description: "Published student learning demo with study tools and an offline sample quiz. AI features that need Node.js and Ollama are not hosted on GitHub Pages.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Ollama"],
    symbol: "✧",
    github: "https://github.com/BavanBali/StudyMate-AI",
    demo: "https://bavanbali.github.io/StudyMate-AI/",
  },
  {
    title: "Portfolio Project",
    description: "Published HTML, CSS, and JavaScript portfolio starter. Its placeholder project entries are sample content, not verified work.",
    technologies: ["HTML", "CSS", "JavaScript"],
    symbol: "↗",
    github: "https://github.com/BavanBali/portfolio-project",
    demo: "https://bavanbali.github.io/portfolio-project/",
  },
  {
    title: "AI Interview Preparation Platform · Sample idea",
    description: "Sample idea only; this platform is not built or published yet. The concept is to help students practice interview questions and mock interviews.",
    technologies: ["Concept", "Interview practice"],
    symbol: "✳",
    github: "",
    demo: "",
  },
  {
    title: "Student Result Management System · Sample idea",
    description: "Sample idea only; this database project is not built or published yet. No repository or live demo is available.",
    technologies: ["Concept", "Database"],
    symbol: "▤",
    github: "",
    demo: "",
  },
];

const skillsGrid = document.querySelector("#skills-grid");
const projectsGrid = document.querySelector("#projects-grid");

function renderSkills() {
  skillsGrid.innerHTML = skills.map(({ icon, title, items }) => `
    <article class="skill-card">
      <span class="skill-icon" aria-hidden="true">${icon}</span>
      <h3>${title}</h3>
      <div class="skill-tags">${items.map((item) => `<span class="tag">${item}</span>`).join("")}</div>
    </article>
  `).join("");
}

function projectAction(label, href, icon) {
  if (href) {
    return `<a class="project-action" href="${href}" target="_blank" rel="noreferrer">${icon}<span>${label}</span></a>`;
  }
  return `<button class="project-action" type="button" disabled aria-label="${label} link not added yet">${icon}<span>${label} soon</span></button>`;
}

function renderProjects() {
  projectsGrid.innerHTML = projects.map((project, index) => `
    <article class="project-card">
      <div class="project-card-top"><span class="project-number">0${index + 1} / ${String(projects.length).padStart(2, "0")}</span><span class="project-symbol" aria-hidden="true">${project.symbol}</span></div>
      <h3>${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-tags">${project.technologies.map((technology) => `<span class="tag">${technology}</span>`).join("")}</div>
      <div class="project-links">
        ${projectAction("GitHub", project.github, '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3H3v10h10v-3M8 2h6v6m0-6L7 9"></path></svg>')}
        ${projectAction("Live demo", project.demo, '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M9 2h5v5m0-5L7 9"></path><path d="M12 9v4H2V3h4"></path></svg>')}
      </div>
    </article>
  `).join("");
}

renderSkills();
renderProjects();

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  navigation.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
  navigation.classList.toggle("is-open", !isOpen);
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

const themeToggle = document.querySelector(".theme-toggle");
themeToggle.addEventListener("click", () => {
  const lightTheme = document.documentElement.dataset.theme !== "light";
  document.documentElement.dataset.theme = lightTheme ? "light" : "dark";
  themeToggle.setAttribute("aria-label", lightTheme ? "Switch to dark theme" : "Switch to light theme");
});

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav-link")];
const activeSectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      const active = link.getAttribute("href") === `#${entry.target.id}`;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach((section) => activeSectionObserver.observe(section));

const backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("is-visible", window.scrollY > 500);
}, { passive: true });

document.querySelector("#current-year").textContent = new Date().getFullYear();

const titles = [
  "Aspiring Software Developer",
  "Web Development Enthusiast",
  "AI & Problem-Solving Enthusiast",
];
const typedTitle = document.querySelector("#typed-title");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let titleIndex = 0;
let characterIndex = titles[0].length;
let deleting = true;

function typeTitle() {
  const title = titles[titleIndex];
  characterIndex += deleting ? -1 : 1;
  typedTitle.textContent = title.slice(0, characterIndex);

  let delay = deleting ? 40 : 75;
  if (characterIndex === 0) {
    deleting = false;
    titleIndex = (titleIndex + 1) % titles.length;
    delay = 350;
  } else if (characterIndex === titles[titleIndex].length) {
    deleting = true;
    delay = 1500;
  }
  window.setTimeout(typeTitle, delay);
}

if (!reduceMotion) window.setTimeout(typeTitle, 1800);

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent = "";

  if (!contactForm.reportValidity()) {
    formStatus.textContent = "Please review the highlighted fields and try again.";
    return;
  }

  formStatus.textContent = "Your details look good, but this demo does not send messages. Please use the email link instead.";
  contactForm.reset();
});
const skills = [
  { icon: "</>", title: "Programming", items: ["C++", "Java", "Python", "JavaScript"] },
  { icon: "⌘", title: "Web development", items: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js"] },
  { icon: "▤", title: "Database", items: ["MongoDB", "MySQL", "SQLite"] },
  { icon: "⚙", title: "Tools & interests", items: ["Git", "GitHub", "VS Code", "Postman", "AI & ML", "DSA"] },
];

const projects = [
  {
    title: "AI Interview Preparation Platform",
    description: "A student-focused space to practice interview questions, try mock interviews, and build confidence through preparation.",
    technologies: ["JavaScript", "React.js", "AI / ML"],
    symbol: "✳",
    github: "",
    demo: "",
  },
  {
    title: "Job Finder AI",
    description: "A job discovery concept with search, location filters, job categories, and a way to save interesting roles.",
    technologies: ["React.js", "Node.js", "MongoDB"],
    symbol: "⌕",
    github: "",
    demo: "",
  },
  {
    title: "StudyMate AI",
    description: "An educational platform concept to help students find learning resources and organize their study more efficiently.",
    technologies: ["JavaScript", "AI / ML", "Web"],
    symbol: "✧",
    github: "",
    demo: "",
  },
  {
    title: "Student Result Management System",
    description: "A database project concept for organizing student records and academic results in a clear, manageable way.",
    technologies: ["Java", "MySQL", "Database"],
    symbol: "▤",
    github: "",
    demo: "",
  },
  {
    title: "Personal Portfolio Website",
    description: "A responsive personal website for presenting a professional profile, skills, project work, and contact information.",
    technologies: ["HTML", "CSS", "JavaScript"],
    symbol: "↗",
    github: "",
    demo: "",
  },
];

const skillsGrid = document.querySelector("#skills-grid");
const projectsGrid = document.querySelector("#projects-grid");

function renderSkills() {
  skillsGrid.innerHTML = skills.map(({ icon, title, items }) => `
    <article class="skill-card">
      <span class="skill-icon" aria-hidden="true">${icon}</span>
      <h3>${title}</h3>
      <div class="skill-tags">${items.map((item) => `<span class="tag">${item}</span>`).join("")}</div>
    </article>
  `).join("");
}

function projectAction(label, href, icon) {
  if (href) {
    return `<a class="project-action" href="${href}" target="_blank" rel="noreferrer">${icon}<span>${label}</span></a>`;
  }
  return `<button class="project-action" type="button" disabled aria-label="${label} link not added yet">${icon}<span>${label} soon</span></button>`;
}

function renderProjects() {
  projectsGrid.innerHTML = projects.map((project, index) => `
    <article class="project-card">
      <div class="project-card-top"><span class="project-number">0${index + 1} / 05</span><span class="project-symbol" aria-hidden="true">${project.symbol}</span></div>
      <h3>${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-tags">${project.technologies.map((technology) => `<span class="tag">${technology}</span>`).join("")}</div>
      <div class="project-links">
        ${projectAction("GitHub", project.github, '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3H3v10h10v-3M8 2h6v6m0-6L7 9"></path></svg>')}
        ${projectAction("Live demo", project.demo, '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M9 2h5v5m0-5L7 9"></path><path d="M12 9v4H2V3h4"></path></svg>')}
      </div>
    </article>
  `).join("");
}

renderSkills();
renderProjects();

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  navigation.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
  navigation.classList.toggle("is-open", !isOpen);
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

const themeToggle = document.querySelector(".theme-toggle");
themeToggle.addEventListener("click", () => {
  const lightTheme = document.documentElement.dataset.theme !== "light";
  document.documentElement.dataset.theme = lightTheme ? "light" : "dark";
  themeToggle.setAttribute("aria-label", lightTheme ? "Switch to dark theme" : "Switch to light theme");
});

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav-link")];
const activeSectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      const active = link.getAttribute("href") === `#${entry.target.id}`;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach((section) => activeSectionObserver.observe(section));

const backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("is-visible", window.scrollY > 500);
}, { passive: true });

document.querySelector("#current-year").textContent = new Date().getFullYear();

const titles = [
  "Aspiring Software Developer",
  "Web Development Enthusiast",
  "AI & Problem-Solving Enthusiast",
];
const typedTitle = document.querySelector("#typed-title");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let titleIndex = 0;
let characterIndex = titles[0].length;
let deleting = true;

function typeTitle() {
  const title = titles[titleIndex];
  characterIndex += deleting ? -1 : 1;
  typedTitle.textContent = title.slice(0, characterIndex);

  let delay = deleting ? 40 : 75;
  if (characterIndex === 0) {
    deleting = false;
    titleIndex = (titleIndex + 1) % titles.length;
    delay = 350;
  } else if (characterIndex === titles[titleIndex].length) {
    deleting = true;
    delay = 1500;
  }
  window.setTimeout(typeTitle, delay);
}

if (!reduceMotion) window.setTimeout(typeTitle, 1800);

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent = "";

  if (!contactForm.reportValidity()) {
    formStatus.textContent = "Please review the highlighted fields and try again.";
    return;
  }

  formStatus.textContent = "Your details look good, but this demo does not send messages. Please use the email link instead.";
  contactForm.reset();
});
