document.documentElement.classList.add("js");

const translations = {
  en: {
    "meta.title": "Furkan Eskil - Computer Engineer",
    "meta.description":
      "Furkan Eskil, Computer Engineer focused on backend systems, APIs, networked software and pragmatic engineering.",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.resume": "Resume",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "profile.name": "Furkan Eskil",
    "hero.title": "Computer Engineer",
    "home.p1":
      "I'm Furkan Eskil, a Computer Engineer from Turkey and a Cukurova University graduate. I work around backend systems, APIs and network programming, with a focus on programming languages, data structures, algorithms, databases, Unix-based systems, Git, request/response flows, WebSocket communication and socket programming.",
    "home.p2":
      "Professionally, I worked on inventory management and RESTful API endpoints at Ploud, OCPP 1.6/WebSocket communication for EV charging systems at Maksopus, and backend fundamentals around MVC architecture and ORM usage at Provera. In these roles, I focused on data flow, endpoint design and backend integration points.",
    "home.p3":
      "I like learning close to the metal of the problem: reading documentation, tracing how data moves, testing assumptions, and breaking things down until the system feels explainable. Outside of coding, I write and think about software architecture, engineering tradeoffs, and the parts of real-world development that do not fit neatly into tutorials.",
    "about.lead":
      "The part I enjoy most is turning uncertainty into structure: finding the shape of a problem, designing the path forward, and building the thing.",
    "about.credentialsTitle": "Experience & Credentials",
    "about.educationTitle": "BSc Computer Engineering",
    "about.education": "Cukurova University, graduated June 2025",
    "about.ploudTitle": "Software Engineering Intern",
    "about.ploud": "Ploud, Istanbul, Jan 2025 - Mar 2025",
    "about.maksopusTitle": "Software Engineer",
    "about.maksopus": "Maksopus, Adana, Oct 2022 - Apr 2023",
    "about.skillsTitle": "Skills",
    "projects.title": "Personal Projects",
    "projects.intro":
      "Personal projects and small software projects I built for learning.",
    "projects.rps.description":
      "A multiplayer Rock Paper Scissors CLI built as a hands-on network programming exercise. It uses a TCP server, terminal clients, threaded message handling, score tracking and basic disconnect behavior.",
    "projects.asteroids.description":
      "A small Asteroids-style game built with Pygame. The code is organized around sprites, collision checks, asteroid spawning and projectile behavior, with a small logger for inspecting runtime state while developing.",
    "projects.site.title": "Personal GitHub Pages Site",
    "projects.site.description":
      "This site: a static personal portfolio built with plain HTML, CSS and minimal vanilla JavaScript. The interesting constraint is the fixed app-shell layout, panel-based navigation, no framework and no build step.",
    "common.repository": "Repository",
    "resume.title": "Resume",
    "resume.educationLabel": "Education",
    "resume.educationTitle": "BSc Computer Engineering",
    "resume.educationDescription":
      "Cukurova University, graduated June 2025. Language of instruction: English.",
    "resume.ploudTitle": "Software Developer Intern, Ploud",
    "resume.ploudDescription":
      "Built an admin interface for inventory and category management, including search and filtering, and implemented RESTful API endpoints for CRUD operations and structured data flow.",
    "resume.maksopusTitle": "Software Engineer, Maksopus",
    "resume.maksopusDescription":
      "Worked on server-side OCPP 1.6/WebSocket communication between EV charging stations and the backend, including real-time session tracking, status updates and REST endpoints for mobile charging flows.",
    "resume.proveraTitle": "Web Application Developer Intern, Provera",
    "resume.proveraDescription":
      "Gained foundational backend development experience at a small-scale technopark startup, working around RESTful API design, MVC architecture and ORM usage.",
    "resume.languagesLabel": "Languages",
    "resume.languagesDescription":
      "Programming languages I use for building services, command-line tools and personal projects.",
    "resume.backendLabel": "Backend",
    "resume.backendDescription":
      "Comfortable with request/response flows, WebSocket communication, socket programming, threading and backend services.",
    "resume.foundationsLabel": "Foundations",
    "resume.foundationsTitle": "Data structures, algorithms, OOP, DBMS, SQL",
    "resume.foundationsDescription":
      "Grounded in core computer science concepts, database fundamentals and day-to-day tools such as Unix-based systems and Git.",
    "resume.certsLabel": "Certs",
    "resume.certsDescription":
      "Built a practical base in command line usage, Unix-based systems, system administration, networking and network security fundamentals.",
    "resume.additionalLabel": "Additional",
    "resume.additionalDescription":
      "Placed 3rd at University4Society Startup Weekend, joined the acceleration program and completed an incubation program at AGM.",
    "contact.title": "Say hi",
    "contact.intro":
      "Reach out for software engineering work, API design, networked systems, practical product problems or a thoughtful technical exchange.",
    "side.bio":
      "Computer Engineer from Turkey. Interested in software engineering, backend systems, network programming and turning unclear problems into working software.",
    "side.focusTitle": "Current focus",
    "side.focusText":
      "Continuing to improve in backend systems, API design and network programming, while growing my professional network.",
    "side.roleTitle": "Looking for a role",
    "side.roleText":
      "Looking for a software engineering role where I can work on real product and systems problems. I want to keep learning, take ownership and contribute to a team that cares about the work.",
    "side.cta": "Get in touch",
    "footer.quote": "Creativity is intelligence having fun.",
    "footer.copyright": "©2026 Furkan Eskil.",
  },
  tr: {
    "meta.title": "Furkan Eşkil - Bilgisayar Mühendisi",
    "meta.description":
      "Furkan Eşkil, backend sistemler, API'ler ve ağ programlama üzerine çalışan Bilgisayar Mühendisi.",
    "nav.home": "Ana Sayfa",
    "nav.about": "Hakkımda",
    "nav.resume": "Özgeçmiş",
    "nav.projects": "Projeler",
    "nav.contact": "İletişim",
    "profile.name": "Furkan Eşkil",
    "hero.title": "Bilgisayar Mühendisi",
    "home.p1":
      "Ben Furkan Eşkil. Çukurova Üniversitesi Bilgisayar Mühendisliği mezunuyum. Backend sistemler, API'ler ve ağ programlama üzerine çalışıyorum. Bu alanlarda programlama dilleri, veri yapıları, algoritmalar, veritabanları, Unix tabanlı sistemler, Git, request/response akışları, WebSocket iletişimi ve soket programlamaya özellikle odaklanıyorum.",
    "home.p2":
      "Ploud'da envanter yönetimi ve RESTful API endpoint'leri, Maksopus'ta elektrikli araç şarj sistemleri için OCPP 1.6/WebSocket iletişimi, Provera'da ise MVC ve ORM kullanımı etrafında backend çalışmaları yaptım. Bu işlerde özellikle veri akışı, endpoint tasarımı ve backend tarafındaki entegrasyon noktaları üzerine çalıştım.",
    "home.p3":
      "Yeni bir konuya girerken önce sistemi anlamaya çalışırım: dokümantasyonu okur, verinin nereden nereye aktığını takip eder ve varsayımları test ederim. Kodun dışında yazılım mimarisi, mühendislik tercihleri ve gerçek hayatta geliştirme yaparken karşıma çıkan detaylar üzerine düşünüp yazıyorum.",
    "about.lead":
      "Yazılımda beni motive eden şey, belirsiz bir problemi anlaşılır hale getirip çözüm yolunu adım adım ortaya çıkarmak.",
    "about.credentialsTitle": "Deneyim ve Eğitim",
    "about.educationTitle": "Lisans, Bilgisayar Mühendisliği",
    "about.education": "Çukurova Üniversitesi, Haziran 2025 mezunu",
    "about.ploudTitle": "Yazılım Mühendisliği Stajyeri",
    "about.ploud": "Ploud, İstanbul, Ocak 2025 - Mart 2025",
    "about.maksopusTitle": "Yazılım Mühendisi",
    "about.maksopus": "Maksopus, Adana, Ekim 2022 - Nisan 2023",
    "about.skillsTitle": "Yetenekler",
    "projects.title": "Kişisel Projeler",
    "projects.intro":
      "Kişisel projelerim ve öğrenme amacıyla geliştirdiğim küçük yazılımlar.",
    "projects.rps.description":
      "Ağ programlama pratiği için geliştirdiğim çok oyunculu Rock Paper Scissors terminal uygulaması. TCP server, terminal client'ları, thread kullanımı, skor takibi ve bağlantı kopması durumlarını ele aldım.",
    "projects.asteroids.description":
      "Pygame ile geliştirdiğim küçük bir Asteroids oyunu. Sprite yapısı, çarpışma kontrolleri, oyun içi nesnelerin hareketi ve temel oyun döngüsünü içeriyor.",
    "projects.site.title": "Kişisel Web Sitesi",
    "projects.site.description":
      "Plain HTML, CSS ve az miktarda vanilla JavaScript ile geliştirdiğim kişisel web sitesi. Framework ya da build aracı kullanmadan, GitHub Pages üzerinde doğrudan çalışacak şekilde hazırladım.",
    "common.repository": "Kaynak kod",
    "resume.title": "Özgeçmiş",
    "resume.educationLabel": "Eğitim",
    "resume.educationTitle": "Lisans, Bilgisayar Mühendisliği",
    "resume.educationDescription":
      "Çukurova Üniversitesi, Haziran 2025 mezunu. Eğitim dili: İngilizce.",
    "resume.ploudTitle": "Software Developer Intern, Ploud",
    "resume.ploudDescription":
      "Envanter ve kategori yönetimi üzerine çalıştım; admin arayüzüne arama ve filtreleme özellikleri ekledim, bu özellikleri destekleyen RESTful API endpoint'leri yazdım.",
    "resume.maksopusTitle": "Software Engineer, Maksopus",
    "resume.maksopusDescription":
      "Elektrikli araç şarj istasyonları ile backend arasındaki server-side OCPP 1.6/WebSocket iletişimi üzerinde çalıştım; oturum takibi, durum güncellemeleri ve şarj işlemleri için mobil uygulama ile bağlantı kuran REST endpoint'leri geliştirdim.",
    "resume.proveraTitle": "Web Application Developer Intern, Provera",
    "resume.proveraDescription":
      "Küçük ölçekli bir teknopark girişiminde RESTful API tasarımı, MVC mimarisi ve ORM kullanımı etrafında temel backend geliştirme deneyimi edindim.",
    "resume.languagesLabel": "Diller",
    "resume.languagesDescription":
      "Servisler, komut satırı araçları ve kişisel projeler geliştirirken kullandığım programlama dilleri.",
    "resume.backendLabel": "Backend",
    "resume.backendDescription":
      "Request/response akışları, WebSocket iletişimi, soket programlama, threading ve backend servisleriyle çalıştım.",
    "resume.foundationsLabel": "Temeller",
    "resume.foundationsTitle": "Veri yapıları, algoritmalar, OOP, DBMS, SQL",
    "resume.foundationsDescription":
      "Bilgisayar bilimi temelleri, veritabanı kavramları ve Unix tabanlı sistemler/Git gibi günlük geliştirme araçlarında yetkinlik sahibiyim.",
    "resume.certsLabel": "Sertifikalar",
    "resume.certsDescription":
      "Komut satırı, Unix tabanlı sistemler, sistem yönetimi, ağ ve ağ güvenliği temelleri üzerine pratik eğitimler aldım.",
    "resume.additionalLabel": "Ek",
    "resume.additionalDescription":
      "University4Society Startup Weekend'de 3. oldum, devamındaki hızlandırma programına katıldım ve Adana Girişimcilik Merkezi kuluçka programını tamamladım.",
    "contact.title": "Merhaba",
    "contact.intro":
      "Yazılım mühendisliği işleri, API tasarımı, ağ tabanlı sistemler, pratik ürün problemleri ya da herhangi bir nedenle iletişime geçmek istersen yazabilirsin.",
    "side.bio":
      "Türkiye'den Bilgisayar Mühendisiyim. Backend sistemler, API tasarımı, ağ programlama ve yazılım mühendisliği üzerine çalışıyorum.",
    "side.focusTitle": "Şu sıralar",
    "side.focusText":
      "Backend sistemler, API tasarımı ve ağ programlama tarafında kendimi geliştirmeye devam ediyorum. Profesyonel ağımı da genişletmek istiyorum.",
    "side.roleTitle": "İş arıyorum",
    "side.roleText":
      "Yazılım mühendisliği alanında, gerçek ürün ve sistem problemleri üzerinde çalışabileceğim bir pozisyon arıyorum. Öğrenmeye devam edebileceğim ve sorumluluk alabileceğim bir ekipte yer almak isterim.",
    "side.cta": "İletişime geç",
    "footer.quote": "Creativity is intelligence having fun.",
    "footer.copyright": "©2026 Furkan Eşkil.",
  },
};

const content = document.querySelector(".page-scroll");
const navLinks = Array.from(document.querySelectorAll(".nav-link, .mobile-menu a"));
const panelLinks = Array.from(document.querySelectorAll('a[href^="#"]'));
const sections = Array.from(document.querySelectorAll(".main-column > .section[id]"));
const projectItems = Array.from(document.querySelectorAll(".project-item"));
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const languageButtons = Array.from(document.querySelectorAll("[data-lang-option]"));
const translatableElements = Array.from(document.querySelectorAll("[data-i18n]"));
const metaDescription = document.querySelector('meta[name="description"]');
const panelAliases = {
  cv: "resume",
};
const languageStorageKey = "preferred-language";

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

function applyLanguage(lang) {
  const activeLanguage = translations[lang] ? lang : "en";
  const dictionary = translations[activeLanguage];

  translatableElements.forEach((element) => {
    const translation = dictionary[element.dataset.i18n];

    if (translation) {
      element.textContent = translation;
    }
  });

  document.documentElement.lang = activeLanguage;
  document.title = dictionary["meta.title"];

  if (metaDescription) {
    metaDescription.setAttribute("content", dictionary["meta.description"]);
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

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langOption);
  });
});

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
applyLanguage(getStoredLanguage() || "en");
setActivePanel(initialPanelId, false) || setActivePanel("home", false);
