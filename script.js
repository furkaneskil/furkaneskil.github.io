document.documentElement.classList.add("js");

const content = document.querySelector(".page-scroll");
const navLinks = Array.from(document.querySelectorAll(".nav-link, .mobile-menu a"));
const panelLinks = Array.from(document.querySelectorAll('a[href^="#"]'));
const sections = Array.from(document.querySelectorAll(".main-column > .section[id]"));
const projectItems = Array.from(document.querySelectorAll(".project-item"));
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const panelAliases = {
  cv: "resume",
};

function normalizePanelId(id) {
  return panelAliases[id] || id;
}

function hasPanel(id) {
  return sections.some((section) => section.id === normalizePanelId(id));
}

function closeMobileMenu() {
  if (!mobileMenu || !menuToggle) {
    return;
  }

  mobileMenu.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

function setActivePanel(id, updateHash = true) {
  const panelId = normalizePanelId(id);
  const target = sections.find((section) => section.id === panelId);

  if (!target) {
    return false;
  }

  sections.forEach((section) => {
    section.classList.toggle("active-panel", section.id === panelId);
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${panelId}`);
  });

  if (content) {
    content.scrollTop = 0;
  }
  closeMobileMenu();

  if (updateHash) {
    history.replaceState(null, "", `#${panelId}`);
  }

  return true;
}

panelLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");

    if (!href || href === "#") {
      return;
    }

    const id = href.slice(1);

    if (!hasPanel(id)) {
      return;
    }

    event.preventDefault();
    setActivePanel(id);
  });
});

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMobileMenu();
  }
});

projectItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) {
      return;
    }

    projectItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.open = false;
      }
    });
  });
});

const initialPanelId = window.location.hash ? window.location.hash.slice(1) : "home";
setActivePanel(initialPanelId, false) || setActivePanel("home", false);
