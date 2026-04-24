document.addEventListener("DOMContentLoaded", () => {
  const config = window.CVConfig || {};
  const body = document.body;
  const nav = document.getElementById("navbar");
  const navMenu = document.getElementById("navMenu");
  const navToggle = document.getElementById("navToggle");
  const themeToggle = document.getElementById("themeToggle");
  const backToTop = document.getElementById("backToTop");
  const downloadBtn = document.getElementById("downloadBtn");
  const yearTarget = document.getElementById("currentYear");

  applyConfig(config);
  initializeTheme();
  initializeMenu();
  initializeScrollState();
  initializeSectionReveal();
  initializeSkillBars();
  initializeDownload();

  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
  }

  function applyConfig(cvConfig) {
    if (!cvConfig.personal || !cvConfig.site) {
      return;
    }

    document.title = cvConfig.site.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", cvConfig.site.description);
    }

    const heroName = document.querySelector(".hero-title");
    const heroRole = document.querySelector(".hero-role");
    const heroDescription = document.querySelector(".hero-description");
    const footerBrand = document.querySelector(".footer-brand p");
    const downloadLabel = downloadBtn?.querySelector("span");

    if (heroName) {
      heroName.textContent = cvConfig.personal.name;
    }

    if (heroRole) {
      heroRole.textContent = cvConfig.personal.role;
    }

    if (heroDescription) {
      heroDescription.innerHTML =
        'Con mas de <strong>3 anos de experiencia</strong> creando soluciones tecnologicas confiables para aplicaciones de escritorio, web y sistemas interactivos.';
    }

    if (footerBrand) {
      footerBrand.textContent = `${cvConfig.personal.name} - ${cvConfig.personal.role}`;
    }

    if (downloadLabel) {
      downloadLabel.textContent = cvConfig.site.pdfLabel;
    }

    bindLink("heroGithub", cvConfig.personal.githubUrl);
    bindLink("contactGithub", cvConfig.personal.githubUrl);
    bindLink("heroLinkedin", cvConfig.personal.linkedinUrl);
    bindLink("contactLinkedin", cvConfig.personal.linkedinUrl);
    bindLink("heroEmail", `mailto:${cvConfig.personal.email}`);
    bindLink("contactEmailButton", `mailto:${cvConfig.personal.email}`);
  }

  function bindLink(id, href) {
    const link = document.getElementById(id);
    if (!link || !href) {
      return;
    }

    link.setAttribute("href", href);
  }

  function initializeTheme() {
    const storedTheme = localStorage.getItem("cv-theme");
    const initialTheme =
      storedTheme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    setTheme(initialTheme);

    themeToggle?.addEventListener("click", () => {
      const nextTheme = body.dataset.theme === "dark" ? "light" : "dark";
      setTheme(nextTheme);
      localStorage.setItem("cv-theme", nextTheme);
    });
  }

  function setTheme(theme) {
    body.dataset.theme = theme;

    if (!themeToggle) {
      return;
    }

    const icon = themeToggle.querySelector("i");
    if (icon) {
      icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
    }

    themeToggle.setAttribute(
      "aria-label",
      theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"
    );
  }

  function initializeMenu() {
    navToggle?.addEventListener("click", () => {
      const isOpen = navMenu?.classList.toggle("is-open");
      navToggle.classList.toggle("is-open", Boolean(isOpen));
      navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (event) => {
        const targetId = anchor.getAttribute("href");
        if (!targetId || targetId === "#") {
          return;
        }

        const target = document.querySelector(targetId);
        if (!target) {
          return;
        }

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        navMenu?.classList.remove("is-open");
        navToggle?.classList.remove("is-open");
        navToggle?.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initializeScrollState() {
    const sections = [...document.querySelectorAll("main section[id], header[id]")];
    const navLinks = [...document.querySelectorAll(".nav-link")];

    const onScroll = () => {
      nav?.classList.toggle("is-scrolled", window.scrollY > 16);
      backToTop?.classList.toggle("is-visible", window.scrollY > 500);

      let currentId = "inicio";

      sections.forEach((section) => {
        const top = section.offsetTop - 140;
        if (window.scrollY >= top) {
          currentId = section.id;
        }
      });

      navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${currentId}`;
        link.classList.toggle("active", isActive);
        if (isActive) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    backToTop?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    onScroll();
  }

  function initializeSectionReveal() {
    const revealItems = document.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
    );

    revealItems.forEach((item) => observer.observe(item));
  }

  function initializeSkillBars() {
    const bars = document.querySelectorAll(".skill-progress");

    if (!("IntersectionObserver" in window)) {
      bars.forEach((bar) => {
        bar.style.width = `${bar.dataset.progress || 0}%`;
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const progress = entry.target.dataset.progress || 0;
          entry.target.style.width = `${progress}%`;
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.3 }
    );

    bars.forEach((bar) => observer.observe(bar));
  }

  function initializeDownload() {
    downloadBtn?.addEventListener("click", () => {
      showToast(
        "Se abrira la vista de impresion para guardar el CV como PDF desde tu navegador."
      );
      window.print();
    });
  }

  function showToast(message) {
    let toast = document.querySelector(".toast");

    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast";
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add("is-visible");

    window.clearTimeout(showToast.timeoutId);
    showToast.timeoutId = window.setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 2600);
  }
});
