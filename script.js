document.documentElement.classList.add("js");

const translations = {
  en: {
    "meta.title": "Furkan Eskil - Computer Engineer & EEE MSc Student",
    "meta.description":
      "Furkan Eskil, Computer Engineer and Electrical and Electronics Engineering MSc student with an artificial intelligence focus.",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.resume": "Resume",
    "nav.contact": "Contact",
    "profile.name": "Furkan Eskil",
    "hero.title": "Computer Engineer & EEE MSc Student",
    "home.p1":
      "I'm Furkan Eskil, a Computer Engineering graduate from Cukurova University and a thesis-based Electrical and Electronics Engineering MSc student at Mersin University.",
    "home.p2":
      "I worked as a Software Engineer at Maksopus, exploring and prototyping communication between applications and server-side systems. My other experience includes software development internships at Provera, Select Bilisim and Ploud.",
    "home.p3":
      "I am currently focused on my AI-oriented master's studies and especially interested in applications of artificial intelligence within electrical and electronics engineering.",
    "about.lead":
      "My background in computer engineering led me to pursue graduate study in electrical and electronics engineering, where I am interested in exploring applications of artificial intelligence across engineering problems.",
    "resume.title": "Resume",
    "resume.educationLabel": "Education",
    "resume.experienceLabel": "Experience",
    "resume.credentialsLabel": "Certifications & Additional Experience",
    "resume.masterPeriod": "2025-Present",
    "resume.masterTitle": "MSc Electrical and Electronics Engineering",
    "resume.masterDescription":
      "Mersin University, Sep 2025 - Present. Thesis-based program with an artificial intelligence focus.",
    "resume.educationTitle": "BSc Computer Engineering",
    "resume.educationDescription":
      "Cukurova University, graduated June 2025. Language of instruction: English.",
    "resume.educationPeriod": "2025",
    "resume.ploudTitle": "Software Developer Intern, Ploud",
    "resume.ploudDescription":
      "Short-term internship in Istanbul.",
    "resume.ploudPeriod": "Jan-Mar 2025",
    "resume.maksopusTitle": "Software Engineer, Maksopus",
    "resume.maksopusDescription":
      "Explored and prototyped communication between applications and server-side systems.",
    "resume.maksopusPeriod": "Oct 2022-Apr 2023",
    "resume.selectTitle": "Software Developer Intern, Select Bilisim",
    "resume.selectDescription":
      "Short-term remote internship.",
    "resume.selectPeriod": "Jul-Sep 2022",
    "resume.proveraTitle": "Web Application Developer Intern, Provera",
    "resume.proveraDescription":
      "Observed and contributed to web application development processes at a small technopark startup.",
    "resume.proveraPeriod": "Oct 2018-Aug 2019",
    "resume.skillsLabel": "Skills",
    "resume.skillsDescription": "Unix-like systems and command-line tools.",
    "resume.certsTitle": "GNU/Linux 101 and Cisco Network Security Training",
    "resume.certsDescription":
      "M. Akgul Free Software Camp and Cisco Networking Academy.",
    "resume.additionalTitle":
      "University4Society and Adana Entrepreneurship Center",
    "resume.additionalDescription":
      "Placed 3rd at University4Society Startup Weekend, joined the acceleration program and completed an incubation program at AGM.",
    "contact.title": "Say hi",
    "contact.intro":
      "Reach out regarding research projects and artificial intelligence-related opportunities aligned with my graduate studies, or for a thoughtful technical exchange.",
    "side.bio":
      "Computer Engineer and Electrical and Electronics Engineering MSc student from Turkey.",
    "side.focusTitle": "Current focus",
    "side.focusText":
      "Focusing on my AI-oriented master's studies and the application of artificial intelligence within electrical and electronics engineering.",
    "side.roleTitle": "Relevant opportunities",
    "side.roleText":
      "Open to research projects and artificial intelligence-related opportunities aligned with my graduate studies.",
    "side.cta": "Get in touch",
    "footer.quote": '“Be curious. Read widely. Try new things. What people call intelligence just boils down to curiosity.” ― Aaron Swartz',
    "footer.copyright": "©2026 Furkan Eskil.",
  },
  tr: {
    "meta.title": "Furkan Eşkil - Bilgisayar Mühendisi ve EEM Yüksek Lisans Öğrencisi",
    "meta.description":
      "Furkan Eşkil, Bilgisayar Mühendisi ve yapay zeka odaklı Elektrik-Elektronik Mühendisliği tezli yüksek lisans öğrencisi.",
    "nav.home": "Ana Sayfa",
    "nav.about": "Hakkımda",
    "nav.resume": "Özgeçmiş",
    "nav.contact": "İletişim",
    "profile.name": "Furkan Eşkil",
    "hero.title": "Bilgisayar Mühendisi ve Elektrik-Elektronik Mühendisliği Yüksek Lisans Öğrencisi",
    "home.p1":
      "Ben Furkan Eşkil. Çukurova Üniversitesi Bilgisayar Mühendisliği mezunuyum ve Mersin Üniversitesi Elektrik-Elektronik Mühendisliği tezli yüksek lisans öğrencisiyim.",
    "home.p2":
      "Maksopus'ta Yazılım Mühendisi olarak çalıştım; uygulamalar ve sunucu tarafı sistemler arasındaki iletişim üzerine öğrenme ve prototipleme çalışmaları yaptım. Diğer deneyimlerim arasında Provera, Select Bilişim ve Ploud'daki yazılım geliştirme stajları bulunuyor.",
    "home.p3":
      "Şu anda yapay zeka odaklı yüksek lisans çalışmalarıma odaklanıyor ve yapay zekanın elektrik-elektronik mühendisliği içindeki uygulamalarıyla özellikle ilgileniyorum.",
    "about.lead":
      "Bilgisayar mühendisliği geçmişimin ardından, mühendislik problemlerinde yapay zeka uygulamalarını araştırmak amacıyla elektrik-elektronik mühendisliği alanında yüksek lisans yapıyorum.",
    "resume.title": "Özgeçmiş",
    "resume.educationLabel": "Eğitim",
    "resume.experienceLabel": "Deneyim",
    "resume.credentialsLabel": "Sertifikalar ve Ek Deneyim",
    "resume.masterPeriod": "2025-Devam Ediyor",
    "resume.masterTitle": "Elektrik-Elektronik Mühendisliği Tezli Yüksek Lisans",
    "resume.masterDescription":
      "Mersin Üniversitesi, Eylül 2025 - Devam Ediyor. Yapay zeka odaklı tezli program.",
    "resume.educationTitle": "Lisans, Bilgisayar Mühendisliği",
    "resume.educationDescription":
      "Çukurova Üniversitesi, Haziran 2025 mezunu. Eğitim dili: İngilizce.",
    "resume.educationPeriod": "2025",
    "resume.ploudTitle": "Yazılım Geliştirici Stajyeri, Ploud",
    "resume.ploudDescription":
      "İstanbul'da kısa dönem staj.",
    "resume.ploudPeriod": "Ocak-Mart 2025",
    "resume.maksopusTitle": "Yazılım Mühendisi, Maksopus",
    "resume.maksopusDescription":
      "Uygulamalar ve sunucu tarafı sistemler arasındaki iletişim üzerine öğrenme ve prototipleme çalışmaları yaptım.",
    "resume.maksopusPeriod": "Ekim 2022-Nisan 2023",
    "resume.selectTitle": "Yazılım Geliştirici Stajyeri, Select Bilişim",
    "resume.selectDescription":
      "Kısa dönem uzaktan staj.",
    "resume.selectPeriod": "Temmuz-Eylül 2022",
    "resume.proveraTitle": "Web Uygulama Geliştirici, Provera",
    "resume.proveraDescription":
      "Küçük bir teknopark girişiminde web uygulaması geliştirme süreçlerini gözlemledim ve bu süreçlere katkıda bulundum.",
    "resume.proveraPeriod": "Ekim 2018-Ağustos 2019",
    "resume.skillsLabel": "Yetenekler",
    "resume.skillsDescription": "Unix-like sistemler ve komut satırı araçları.",
    "resume.certsTitle": "GNU/Linux 101 ve Cisco Ağ Güvenliği Eğitimi",
    "resume.certsDescription":
      "M. Akgül Özgür Yazılım Kampı ve Cisco Networking Academy.",
    "resume.additionalTitle":
      "University4Society ve Adana Girişimcilik Merkezi",
    "resume.additionalDescription":
      "University4Society Startup Weekend'de 3. oldum, devamındaki hızlandırma programına katıldım ve Adana Girişimcilik Merkezi kuluçka programını tamamladım.",
    "contact.title": "Merhaba",
    "contact.intro":
      "Yüksek lisans çalışmalarımla uyumlu araştırma projeleri, yapay zeka ile ilişkili fırsatlar veya teknik fikir alışverişi için iletişime geçebilirsin.",
    "side.bio":
      "Türkiye'den Bilgisayar Mühendisi ve Elektrik-Elektronik Mühendisliği yüksek lisans öğrencisiyim.",
    "side.focusTitle": "Şu sıralar",
    "side.focusText":
      "Yapay zeka odaklı yüksek lisans çalışmalarıma ve yapay zekanın elektrik-elektronik mühendisliği içindeki uygulamalarına odaklanıyorum.",
    "side.roleTitle": "İlgili fırsatlar",
    "side.roleText":
      "Yüksek lisans çalışmalarımla uyumlu araştırma projelerine ve yapay zeka ile ilişkili fırsatlara açığım.",
    "side.cta": "İletişime geç",
    "footer.quote": '“Be curious. Read widely. Try new things. What people call intelligence just boils down to curiosity.” ― Aaron Swartz',
    "footer.copyright": "©2026 Furkan Eşkil.",
  },
};

// Application setup starts below; the validation script uses this marker.
const scrollContainer = document.querySelector(".page-scroll");
const navLinks = Array.from(document.querySelectorAll(".nav-link, .mobile-menu a"));
const panelLinks = Array.from(document.querySelectorAll('a[href^="#"]'));
const panels = Array.from(document.querySelectorAll(".main-column > .section[id]"));
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const languageButtons = Array.from(document.querySelectorAll("[data-lang-option]"));
const themeToggle = document.querySelector(".theme-toggle");
const translatableElements = Array.from(document.querySelectorAll("[data-i18n]"));
const metaDescription = document.querySelector('meta[name="description"]');
const openGraphTitle = document.querySelector('meta[property="og:title"]');
const openGraphDescription = document.querySelector('meta[property="og:description"]');
const panelAliases = {
  cv: "resume",
};
const languageStorageKey = "preferred-language";
const themeStorageKey = "preferred-theme";

function getStoredLanguage() {
  try {
    return localStorage.getItem(languageStorageKey);
  } catch {
    return null;
  }
}

function storeLanguage(lang) {
  try {
    localStorage.setItem(languageStorageKey, lang);
  } catch {
    // The site still works if storage is blocked.
  }
}

function getStoredTheme() {
  try {
    return localStorage.getItem(themeStorageKey);
  } catch {
    return null;
  }
}

function storeTheme(theme) {
  try {
    localStorage.setItem(themeStorageKey, theme);
  } catch {
    // The site still works if storage is blocked.
  }
}

function applyTheme(theme) {
  const activeTheme = theme === "dark" ? "dark" : "light";
  const nextTheme = activeTheme === "light" ? "dark" : "light";

  document.documentElement.dataset.theme = activeTheme;

  if (themeToggle) {
    const label = `Switch to ${nextTheme} theme`;
    themeToggle.setAttribute("aria-label", label);
    themeToggle.setAttribute("title", label);
    themeToggle.setAttribute("aria-pressed", String(activeTheme === "dark"));
  }

  storeTheme(activeTheme);
}

function formatFooterQuote(element, translation) {
  const [quote, author] = translation.split(/\s+[―-]\s+(.+)/);

  element.textContent = "";

  const quoteText = document.createElement("span");
  quoteText.className = "footer-quote-text";
  quoteText.textContent = quote;
  element.append(quoteText);

  if (author) {
    const authorText = document.createElement("span");
    authorText.className = "footer-quote-author";
    authorText.textContent = ` - ${author}`;
    element.append(authorText);
  }
}

function applyLanguage(lang) {
  const activeLanguage = translations[lang] ? lang : "en";
  const dictionary = translations[activeLanguage];

  translatableElements.forEach((element) => {
    const translation = dictionary[element.dataset.i18n];

    if (translation && element.dataset.i18n === "footer.quote") {
      formatFooterQuote(element, translation);
    } else if (translation) {
      element.textContent = translation;
    }
  });

  document.documentElement.lang = activeLanguage;
  document.title = dictionary["meta.title"];

  if (metaDescription) {
    metaDescription.setAttribute("content", dictionary["meta.description"]);
  }

  if (openGraphTitle) {
    openGraphTitle.setAttribute("content", dictionary["meta.title"]);
  }

  if (openGraphDescription) {
    openGraphDescription.setAttribute("content", dictionary["meta.description"]);
  }

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langOption === activeLanguage;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  storeLanguage(activeLanguage);
}

function normalizePanelId(id) {
  return panelAliases[id] || id;
}

function isPanelAvailable(id) {
  return id !== "about" || window.matchMedia("(max-width: 1180px)").matches;
}

function hasPanel(id) {
  const panelId = normalizePanelId(id);
  return isPanelAvailable(panelId) && panels.some((panel) => panel.id === panelId);
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
  const target = panels.find((panel) => panel.id === panelId);

  if (!target || !isPanelAvailable(panelId)) {
    return false;
  }

  panels.forEach((panel) => {
    panel.classList.toggle("active-panel", panel.id === panelId);
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${panelId}`);
  });

  if (scrollContainer) {
    scrollContainer.scrollTop = 0;
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

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langOption);
  });
});

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMobileMenu();
  }
});

window.addEventListener("resize", () => {
  const activePanel = panels.find((panel) =>
    panel.classList.contains("active-panel"),
  );

  if (activePanel && !isPanelAvailable(activePanel.id)) {
    setActivePanel("home");
  }
});

const initialPanelId = window.location.hash ? window.location.hash.slice(1) : "home";
applyTheme(getStoredTheme() || "dark");
applyLanguage(getStoredLanguage() || "en");
setActivePanel(initialPanelId, false) || setActivePanel("home", false);
