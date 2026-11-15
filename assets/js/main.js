(() => {
  "use strict";

  const data = window.portfolioData;
  if (!data) return;

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const clean = (value) => String(value ?? "").trim();
  const escapeHTML = (value) => clean(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);

  const copy = {
    th: {
      skip: "ข้ามไปยังเนื้อหาหลัก", navHome: "หน้าแรก", navAbout: "ประวัติส่วนตัว", navEducation: "ประวัติการศึกษา", navSkills: "ความสามารถและทักษะ", navProjects: "ผลงานของฉัน", navHonors: "เกียรติบัตรและกิจกรรม", navContact: "ติดต่อฉัน",
      shortHome: "หน้าแรก", shortAbout: "ประวัติ", shortSkills: "ทักษะ", shortProjects: "ผลงาน", shortContact: "ติดต่อ", more: "เพิ่มเติม",
      heroRole: "นักศึกษาเทคโนโลยีสารสนเทศ", greeting: "สวัสดีครับ ผม", interestsLabel: "สิ่งที่สนใจ", interestTech: "เทคโนโลยีสารสนเทศ", interestEngineering: "วิศวกรรมและเทคโนโลยี", viewProjects: "ดูผลงาน", contactMe: "ติดต่อฉัน", scrollMore: "เลื่อนเพื่อดูข้อมูลเพิ่มเติม", gpaLabel: "เกรดเฉลี่ยสะสม", portraitCaption: "นักศึกษาเทคโนโลยีสารสนเทศ", learningNote: "เรียนรู้ผ่านการลงมือทำ",
      aboutKicker: "ตัวตนและแนวคิด", aboutTitle: "ประวัติส่วนตัว", aboutAside: "พื้นฐานที่กำลังต่อยอด<br>สู่การเรียนรู้ด้านเทคโนโลยี", interestTitle: "ความสนใจ", studyGoalTitle: "เป้าหมายในการเรียน", futureGoalTitle: "เป้าหมายในอนาคต", nicknameLabel: "ชื่อเล่น", englishNameLabel: "ชื่อภาษาอังกฤษ", birthLabel: "วันเกิด",
      educationKicker: "เส้นทางการศึกษา", educationTitle: "ประวัติการศึกษา", educationAside: "ความรู้ที่ต่อยอด<br>จากห้องเรียนสู่การลงมือทำ", currentStudy: "กำลังศึกษา", levelLabel: "ระดับการศึกษา", yearLabel: "ปีการศึกษา", gradeCaption: "ผลการเรียนที่แนบมาในแฟ้มสะสมผลงาน",
      skillsKicker: "สิ่งที่กำลังเรียนรู้", skillsTitle: "ความสามารถและทักษะ", skillsAside: "ทักษะที่เกิดจากการศึกษา<br>และการทดลองปฏิบัติ", skillIndex: "ทักษะ",
      projectsKicker: "สิ่งที่ได้ลงมือทำ", projectsTitle: "ผลงานของฉัน", projectsAside: "ภาพและบันทึกจาก<br>กิจกรรมการเรียนรู้ที่ผ่านมา",
      honorsKicker: "การเข้าร่วมและการรับรอง", honorsTitle: "เกียรติบัตรและกิจกรรม", honorsAside: "เอกสารประกอบประสบการณ์<br>การเรียนรู้และการเข้าร่วม", expandCertificate: "ขยายภาพเกียรติบัตร", collapseCertificate: "ย่อภาพเกียรติบัตร", activitiesTitle: "กิจกรรม",
      contactKicker: "พูดคุยและติดต่อ", contactTitle: "ติดต่อฉัน", contactIntro: "ยินดีพูดคุยเกี่ยวกับการเรียนต่อและโอกาสฝึกงาน", contactFoot: "แฟ้มสะสมผลงานด้านเทคโนโลยีสารสนเทศ", emailLabel: "อีเมลหลัก", schoolEmailLabel: "อีเมลสถานศึกษา", githubLabel: "GitHub", facebookLabel: "Facebook", openFacebook: "เปิดหน้า Facebook", locationLabel: "พื้นที่",
      footerText: "© ประภัสพงษ์ ศรีกำพล · แฟ้มสะสมผลงานส่วนตัว · เทคโนโลยีสารสนเทศ", backTop: "กลับสู่ด้านบน ↑", backTopAria: "กลับสู่ด้านบน", pageTitle: "ประภัสพงษ์ ศรีกำพล | แฟ้มสะสมผลงาน"
    },
    en: {
      skip: "Skip to main content", navHome: "Home", navAbout: "About", navEducation: "Education", navSkills: "Skills", navProjects: "Projects", navHonors: "Certificates & Activities", navContact: "Contact",
      shortHome: "Home", shortAbout: "About", shortSkills: "Skills", shortProjects: "Projects", shortContact: "Contact", more: "More",
      heroRole: "Information Technology Student", greeting: "Hello, I’m", interestsLabel: "INTERESTS", interestTech: "Information technology", interestEngineering: "Engineering & technology", viewProjects: "View projects", contactMe: "Contact me", scrollMore: "Scroll to explore", gpaLabel: "Cumulative GPA", portraitCaption: "Information Technology Student", learningNote: "Learning by doing",
      aboutKicker: "PROFILE & APPROACH", aboutTitle: "About", aboutAside: "Building a foundation<br>through technology and practice", interestTitle: "Interests", studyGoalTitle: "Learning goals", futureGoalTitle: "Future goals", nicknameLabel: "Nickname", englishNameLabel: "Name in English", birthLabel: "Date of birth",
      educationKicker: "ACADEMIC PATH", educationTitle: "Education", educationAside: "Knowledge that moves<br>from the classroom into practice", currentStudy: "CURRENT STUDY", levelLabel: "Education level", yearLabel: "Academic year", gradeCaption: "Academic record included in this portfolio",
      skillsKicker: "AREAS OF LEARNING", skillsTitle: "Skills & Knowledge", skillsAside: "Developed through study<br>and hands-on exploration", skillIndex: "SKILL",
      projectsKicker: "SELECTED WORK", projectsTitle: "My Work", projectsAside: "Photos and notes from<br>learning activities and projects",
      honorsKicker: "PARTICIPATION & RECOGNITION", honorsTitle: "Certificates & Activities", honorsAside: "Documents from learning<br>and participation experiences", expandCertificate: "Expand certificate image", collapseCertificate: "Collapse certificate image", activitiesTitle: "Activities",
      contactKicker: "GET IN TOUCH", contactTitle: "Contact", contactIntro: "I welcome conversations about further study and internship opportunities.", contactFoot: "Information Technology Portfolio", emailLabel: "Email", schoolEmailLabel: "School email", githubLabel: "GitHub", facebookLabel: "Facebook", openFacebook: "Open Facebook profile", locationLabel: "Location",
      footerText: "© Prapatpong Srikampol · Personal portfolio · Information Technology", backTop: "Back to top ↑", backTopAria: "Back to top", pageTitle: "Prapatpong Srikampol | Portfolio"
    }
  };

  const translatedData = {
    en: {
      intro: "I am a second-year Vocational Certificate student in Information Technology. I am interested in computers, technology and building new things. I enjoy learning through hands-on practice and applying what I learn to projects.",
      about: {
        introduction: "I am a second-year Vocational Certificate student in Information Technology. I am interested in computers, technology and building new things. I enjoy learning through hands-on practice and applying what I learn to projects.",
        interests: "My interests include information technology, programming, web development and computer networks, as well as IoT, electronics and embedded systems. I am especially interested in how hardware and software work together.",
        studyGoal: "I want to deepen my knowledge and skills in technology, including programming, system design and working with electronic devices. I also hope to learn through projects and practical experience.",
        futureGoal: "I plan to continue my studies in a field related to information technology or engineering, then build on that knowledge through work in technology, software development and innovation."
      },
      education: { level: "Vocational Certificate, Year 2", field: "Information Technology (IT)", institution: "Siam Business Administration Technological College, Saphan Mai" },
      skills: {
        "การเขียนโปรแกรม": ["Programming", "Foundational experience with Python and C#, including variables, conditions, functions and basic program structures."],
        "การพัฒนาเว็บไซต์": ["Web development", "Basic knowledge of HTML, CSS and JavaScript, including webpage design."],
        "การพัฒนาซอฟต์แวร์": ["Software development", "Studied and developed web applications with C# and ASP.NET Core."],
        "การจัดการฐานข้อมูล": ["Database management", "Foundational experience with SQLite databases and SQL."],
        "ระบบเครือข่ายคอมพิวเตอร์": ["Computer networks", "Basic knowledge of IP addressing, DHCP, DNS and network configuration."],
        "ระบบปฏิบัติการ": ["Operating systems", "Experience using Windows 11 and Ubuntu Linux."],
        "การดูแลเซิร์ฟเวอร์": ["Server administration", "Have tried configuring DHCP, DNS and RRAS on Windows Server."],
        "Internet of Things (IoT)": ["Internet of Things (IoT)", "Learning to build connected systems using sensors and microcontrollers."],
        "อิเล็กทรอนิกส์": ["Electronics", "Interested in electronic components and how basic circuits work."],
        "ระบบสมองกลฝังตัว": ["Embedded systems", "Learning to program and control devices with microcontrollers."],
        "ไมโครคอนโทรลเลอร์": ["Microcontrollers", "Have experimented with an Arduino UNO in Tinkercad."],
        "เซนเซอร์": ["Sensors", "Learning about force and temperature sensors."],
        "การบัดกรีอุปกรณ์อิเล็กทรอนิกส์ (Soldering)": ["Electronic component soldering (Soldering)", "Can solder and connect electronic components on circuit boards, including basic circuit assembly."]
      },
      certificates: {
        "การอบรม SMART DRONE GUI WITH PYTHON": ["SMART DRONE GUI WITH PYTHON Training", "A learning and innovation workshop held on 10 September 2026."],
        "การแข่งขันฝีมือแรงงานแห่งชาติ ครั้งที่ 31 ระดับภาค": ["The 31st National Skill Competition — Regional Round", "Participated in the Northern Provinces group in Web Technology."]
      }
    }
  };

  const getLanguage = () => document.documentElement.lang === "en" ? "en" : "th";
  let language = getLanguage();
  const t = (key) => copy[language][key] || copy.th[key] || key;
  const translated = (kind, value, field) => {
    if (kind === "education") {
      const educationKey = Object.keys(translatedData.en.education).find((key) => data.education?.[key] === value);
      return language === "en" && educationKey ? translatedData.en.education[educationKey] : value;
    }
    const entry = translatedData.en?.[kind]?.[value];
    return language === "en" && entry ? (field === "title" ? entry[0] : entry[1]) : value;
  };
  const setText = (selector, value) => $$(selector).forEach((element) => {
    const text = clean(value);
    element.textContent = text;
    element.hidden = !text;
  });
  const setImage = (selector, source) => {
    const image = $(selector);
    if (!image) return;
    if (clean(source)) {
      image.src = source;
      image.addEventListener("error", () => { image.closest("figure, .portrait-wrap")?.setAttribute("hidden", ""); }, { once: true });
    } else {
      image.closest("figure, .portrait-wrap")?.setAttribute("hidden", "");
    }
  };

  const nameParts = clean(data.name).split(/\s+/);
  setText("[data-name]", data.name);
  setText("[data-name-first]", nameParts.shift() || "");
  setText("[data-name-last]", nameParts.join(" "));
  setText("[data-name-en]", data.nameEn);
  setText("[data-intro]", language === "en" ? translatedData.en.intro : data.introduction);
  setImage("[data-portrait]", data.portrait);

  const about = data.about || {};
  const aboutIntro = language === "en" ? translatedData.en.about.introduction : about.introduction;
  setText("[data-about-intro]", aboutIntro);
  const aboutCardsRoot = $(`[data-about-cards]`);
  const aboutItems = [
    ["interests", "interestTitle", "interests"], ["studyGoal", "studyGoalTitle", "studyGoal"], ["futureGoal", "futureGoalTitle", "futureGoal"]
  ].filter(([key]) => clean(about[key]));
  aboutCardsRoot.innerHTML = aboutItems.map(([key, titleKey, translationKey], index) => {
    const description = language === "en" ? translatedData.en.about[translationKey] : about[key];
    return `<article class="about-card reveal"><span class="about-card-index">0${index + 1} / 03</span><h3>${escapeHTML(t(titleKey))}</h3><p>${escapeHTML(description)}</p></article>`;
  }).join("");
  const factValues = [
    ["nicknameLabel", data.nickname, "nickname"], ["englishNameLabel", data.nameEn, "english"], ["birthLabel", data.birthDate, "birth"]
  ].filter(([, value]) => clean(value));
  const factsRoot = $(`[data-facts]`);
  factsRoot.innerHTML = factValues.map(([labelKey, value, key]) => `<div class="fact"><span>${escapeHTML(t(labelKey))}</span><strong>${escapeHTML(value)}</strong><i aria-hidden="true">${key === "birth" ? "◷" : key === "english" ? "Aa" : "@"}</i></div>`).join("");
  $("#about").hidden = !clean(aboutIntro) && !aboutItems.length && !factValues.length;

  const education = data.education || {};
  setText("[data-school]", translated("education", education.institution, "title"));
  setText("[data-level]", translated("education", education.level, "title"));
  setText("[data-field]", translated("education", education.field, "title"));
  setText("[data-gpa]", education.gpa);
  setText("[data-hero-gpa]", education.gpa);
  setText("[data-year]", education.year);
  setImage("[data-grade-image]", education.gradeImage);
  $("[data-year-wrap]").hidden = !clean(education.year);
  $("[data-grade-wrap]").hidden = !clean(education.gpa) && !clean(education.gradeImage);
  $("#education").hidden = ![education.institution, education.level, education.field, education.gpa, education.year, education.gradeImage].some(clean);
  $("[data-gpa-wrap]").hidden = !clean(education.gpa);

  const skillIcons = [
    '<svg viewBox="0 0 24 24"><path d="m8 7-5 5 5 5m8-10 5 5-5 5m-2-13-4 16"/></svg>',
    '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 8h18M7 6h.01M10 6h.01M7 12h10M7 15h7"/></svg>',
    '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.7a8 8 0 0 1-1.7 1l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.7-1l-1.7.7-1.4-2.4 1.4-1.1a8 8 0 0 1 0-2l-1.4-1.1 1.4-2.4 1.7.7a8 8 0 0 1 1.7-1l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.7 1l1.7-.7 1.4 2.4-1.4 1.1a8 8 0 0 1 0 2Z"/></svg>',
    '<svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>',
    '<svg viewBox="0 0 24 24"><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="m8 11 8-4m-8 6 8 4"/></svg>',
    '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4M7 8h4m-4 3h7"/></svg>',
    '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="5" rx="1"/><rect x="3" y="10" width="18" height="5" rx="1"/><rect x="3" y="17" width="18" height="5" rx="1"/><path d="M7 5.5h.01M7 12.5h.01M7 19.5h.01M11 5.5h6M11 12.5h6M11 19.5h6"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M5 12a10 10 0 0 1 14 0m-11 3a6 6 0 0 1 8 0m-5 3a2 2 0 0 1 2 0"/><circle cx="12" cy="20" r="1"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M4 4v5h5m11 11v-5h-5M5 9a8 8 0 0 1 14-3l1 3M19 15a8 8 0 0 1-14 3l-1-3"/></svg>',
    '<svg viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 1v5m6-5v5M9 18v5m6-5v5M1 9h5m-5 6h5m12-6h5m-5 6h5"/></svg>',
    '<svg viewBox="0 0 24 24"><rect x="5" y="5" width="14" height="14" rx="2"/><path d="M9 9h6v6H9zM9 1v4m6-4v4M9 19v4m6-4v4M1 9h4m-4 6h4m14-6h4m-4 6h4"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M14 3a7 7 0 0 0 7 7v9H3V5h9a7 7 0 0 1 2-2Z"/><path d="M8 9v4m4-4v7m4-7v3"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M5 21h5l2-7-4-2-4 7a2 2 0 0 0 1 2ZM8 12l2-5 4 2-2 5m-2-6 2-5m5 6 4 5m-4-2 3-4"/></svg>',
    '<svg viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4"/><circle cx="12" cy="12" r="2"/></svg>'
  ];
  const skills = (data.skills || []).flatMap((group) => group.items || []).filter((item) => clean(typeof item === "string" ? item : item?.title));
  const skillsRoot = $(`[data-skills]`);
  skillsRoot.innerHTML = skills.map((item, index) => {
    const title = typeof item === "string" ? item : item.title;
    const description = typeof item === "string" ? "" : clean(item.description);
    const shownTitle = translated("skills", title, "title");
    const shownDescription = translated("skills", title, "description") || description;
    return `<article class="skill-item reveal"><div class="skill-item-main"><span class="skill-number">${String(index + 1).padStart(2, "0")}</span><span class="skill-icon" aria-hidden="true">${skillIcons[index % skillIcons.length]}</span><div class="skill-copy"><h3>${escapeHTML(shownTitle)}</h3>${shownDescription ? `<p>${escapeHTML(shownDescription)}</p>` : ""}</div></div></article>`;
  }).join("");
  $("#skills").hidden = !skills.length;

  const projects = (data.projects || []).filter((project) => clean(project?.title));
  const projectsRoot = $(`[data-projects]`);
  projectsRoot.innerHTML = projects.map((project, index) => {
    const image = clean(project.image) ? `<figure class="project-image"><img src="${escapeHTML(project.image)}" alt="${escapeHTML(`ภาพประกอบ: ${project.title}`)}" loading="lazy"></figure>` : "";
    const description = clean(project.description) ? `<p>${escapeHTML(project.description)}</p>` : "";
    const link = clean(project.link) ? `<a class="project-link" href="${escapeHTML(project.link)}" target="_blank" rel="noreferrer" aria-label="${escapeHTML(`เปิดลิงก์ผลงาน ${project.title}`)}">↗</a>` : "";
    return `<article class="project-card reveal" style="--card-order:${index}">${image}<div class="project-copy"><span class="project-number">${String(index + 1).padStart(2, "0")} <i aria-hidden="true"></i></span><div><h3>${escapeHTML(project.title)}</h3>${description}</div>${link}</div></article>`;
  }).join("");
  $("#projects").hidden = !projects.length;

  const certificates = (data.certificates || []).filter((item) => clean(item?.title));
  const certificatesRoot = $(`[data-certificates]`);
  certificatesRoot.innerHTML = certificates.map((item, index) => {
    const translation = translatedData.en?.certificates?.[item.title];
    const title = language === "en" && translation ? translation[0] : item.title;
    const description = language === "en" && translation ? translation[1] : clean(item.description);
    const image = clean(item.image) ? `<button class="certificate-image" type="button" aria-expanded="false" aria-label="${escapeHTML(t("expandCertificate"))}"><img src="${escapeHTML(item.image)}" alt="${escapeHTML(`ภาพเกียรติบัตร: ${title}`)}" loading="lazy"><span class="expand-indicator" aria-hidden="true">＋</span></button>` : "";
    return `<article class="certificate-card reveal" style="--card-order:${index}">${image}<div class="certificate-copy"><span class="certificate-number">0${index + 1} / 02</span><h3>${escapeHTML(title)}</h3>${description ? `<p>${escapeHTML(description)}</p>` : ""}</div></article>`;
  }).join("");
  const activities = (data.activities || []).filter((item) => clean(item?.title));
  $(`[data-activities]`).innerHTML = activities.map((item) => `<article class="activity-card"><h4>${escapeHTML(item.title)}</h4>${clean(item.description) ? `<p>${escapeHTML(item.description)}</p>` : ""}</article>`).join("");
  $("#activities").hidden = !activities.length;
  $("#honors").hidden = !certificates.length && !activities.length;

  const contacts = data.contacts || {};
  const contactIcons = {
    emailLabel: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>',
    schoolEmailLabel: '<svg viewBox="0 0 24 24"><path d="M3 10h18M5 10V6l7-3 7 3v4M6 10v9m4-9v9m4-9v9m4-9v9M3 21h18"/></svg>',
    githubLabel: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9 18c-3 1-3-2-4-2m10 4v-3a3 3 0 0 0-.8-2.3c2.6-.3 5.3-1.3 5.3-5.8a4.5 4.5 0 0 0-1.2-3.1 4.2 4.2 0 0 0-.1-3.1S17.2 2.4 14 4a11 11 0 0 0-4 0C6.8 2.4 5.8 2.7 5.8 2.7a4.2 4.2 0 0 0-.1 3.1 4.5 4.5 0 0 0-1.2 3.1c0 4.5 2.7 5.5 5.3 5.8A3 3 0 0 0 9 17v3"/></svg>',
    facebookLabel: '<span class="facebook-glyph">f</span>'
  };
  const contactEntries = [
    { key: "emailLabel", value: contacts.email, href: contacts.email ? `mailto:${contacts.email}` : "" },
    { key: "schoolEmailLabel", value: contacts.schoolEmail, href: contacts.schoolEmail ? `mailto:${contacts.schoolEmail}` : "" },
    { key: "githubLabel", value: contacts.github, href: contacts.github },
    { key: "facebookLabel", value: contacts.facebook, href: contacts.facebook, displayKey: "openFacebook" },
    { key: "locationLabel", value: contacts.location, href: "" }
  ].filter((entry) => clean(entry.value));
  const contactsRoot = $(`[data-contacts]`);
  contactsRoot.innerHTML = contactEntries.map((entry, index) => {
    const external = entry.href && !entry.href.startsWith("mailto:");
    const tag = entry.href ? "a" : "div";
    const href = entry.href ? ` href="${escapeHTML(entry.href)}"${external ? ' target="_blank" rel="noreferrer"' : ""}` : "";
    return `<${tag} class="contact-item reveal"${href}><span class="contact-icon" aria-hidden="true">${contactIcons[entry.key] || "↗"}</span><span class="contact-label">${escapeHTML(t(entry.key))}</span><strong>${escapeHTML(entry.displayKey ? t(entry.displayKey) : entry.value)}</strong><span class="contact-arrow" aria-hidden="true">${external ? "↗" : "→"}</span></${tag}>`;
  }).join("");
  $("#contact").hidden = !contactEntries.length;

  function applyLanguage(nextLanguage, save = true) {
    language = nextLanguage === "en" ? "en" : "th";
    document.documentElement.lang = language;
    $$("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (copy[language][key]) element.innerHTML = copy[language][key];
    });
    $$("[data-i18n-aria]").forEach((element) => element.setAttribute("aria-label", t(element.dataset.i18nAria)));
    document.title = t("pageTitle");
    $$(".language-toggle").forEach((languageButton) => {
      languageButton.textContent = language === "th" ? "EN" : "TH";
      languageButton.setAttribute("aria-label", language === "th" ? "Switch to English" : "เปลี่ยนเป็นภาษาไทย");
      languageButton.setAttribute("title", language === "th" ? "English" : "ภาษาไทย");
    });
    const contactIntro = $(".contact-heading > p:last-child");
    if (contactIntro) contactIntro.textContent = t("contactIntro");
    // Rebuild text driven by the language setting; the source data file stays unchanged.
    setText("[data-intro]", language === "en" ? translatedData.en.intro : data.introduction);
    setText("[data-about-intro]", language === "en" ? translatedData.en.about.introduction : about.introduction);
    aboutItems.forEach(([key, titleKey, translationKey], index) => {
      const card = $$(".about-card")[index];
      if (!card) return;
      card.querySelector("h3").textContent = t(titleKey);
      card.querySelector("p").textContent = language === "en" ? translatedData.en.about[translationKey] : about[key];
    });
    factValues.forEach(([labelKey], index) => {
      const label = $$(".fact > span")[index];
      if (label) label.textContent = t(labelKey);
    });
    setText("[data-level]", translated("education", education.level, "title"));
    setText("[data-field]", translated("education", education.field, "title"));
    setText("[data-school]", translated("education", education.institution, "title"));
    skills.forEach((item, index) => {
      const title = typeof item === "string" ? item : item.title;
      const description = typeof item === "string" ? "" : clean(item.description);
      const itemElement = $$(".skill-item")[index];
      if (!itemElement) return;
      itemElement.querySelector("h3").textContent = translated("skills", title, "title");
      const paragraph = itemElement.querySelector("p");
      if (paragraph) paragraph.textContent = translated("skills", title, "description") || description;
    });
    certificates.forEach((item, index) => {
      const card = $$(".certificate-card")[index];
      if (!card) return;
      const translation = translatedData.en?.certificates?.[item.title];
      card.querySelector("h3").textContent = language === "en" && translation ? translation[0] : item.title;
      const paragraph = card.querySelector("p");
      if (paragraph) paragraph.textContent = language === "en" && translation ? translation[1] : clean(item.description);
      const imageButton = card.querySelector(".certificate-image");
      if (imageButton) {
        imageButton.setAttribute("aria-label", imageButton.getAttribute("aria-expanded") === "true" ? t("collapseCertificate") : t("expandCertificate"));
        imageButton.querySelector("img").alt = `${language === "en" ? "Certificate image:" : "ภาพเกียรติบัตร:"} ${card.querySelector("h3").textContent}`;
      }
    });
    contactEntries.forEach((entry, index) => {
      const label = $$(".contact-item .contact-label")[index];
      const value = $$(".contact-item strong")[index];
      if (label) label.textContent = t(entry.key);
      if (value) value.textContent = entry.displayKey ? t(entry.displayKey) : entry.value;
    });
    if (save) {
      try { localStorage.setItem("portfolio-language", language); } catch (_) { /* ภาษาเปลี่ยนได้ แม้เบราว์เซอร์ไม่อนุญาตให้บันทึก */ }
    }
  }
  applyLanguage(language, false);
  $$(".language-toggle").forEach((button) => button.addEventListener("click", () => applyLanguage(language === "th" ? "en" : "th")));

  const themeButtons = $$(".theme-toggle");
  function applyTheme(theme, save = true) {
    const nextTheme = theme === "light" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    const themeColor = $("meta[name='theme-color']");
    if (themeColor) themeColor.content = nextTheme === "dark" ? "#17151c" : "#f8f6fa";
    themeButtons.forEach((themeButton) => {
      themeButton.setAttribute("aria-pressed", String(nextTheme === "dark"));
      themeButton.setAttribute("aria-label", nextTheme === "dark" ? (language === "th" ? "เปลี่ยนเป็นโหมดสว่าง" : "Switch to light theme") : (language === "th" ? "เปลี่ยนเป็นโหมดมืด" : "Switch to dark theme"));
      themeButton.setAttribute("title", themeButton.getAttribute("aria-label"));
    });
    if (save) {
      try { localStorage.setItem("portfolio-theme", nextTheme); } catch (_) { /* ธีมยังเปลี่ยนได้ในหน้านี้ */ }
    }
  }
  applyTheme(document.documentElement.dataset.theme, false);
  themeButtons.forEach((themeButton) => themeButton.addEventListener("click", () => applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark")));

  const certificateGrid = $(`[data-certificates]`);
  certificateGrid.addEventListener("click", (event) => {
    const button = event.target.closest(".certificate-image");
    if (!button) return;
    const expanded = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(expanded));
    button.closest(".certificate-card").classList.toggle("is-expanded", expanded);
    button.setAttribute("aria-label", expanded ? t("collapseCertificate") : t("expandCertificate"));
    button.querySelector(".expand-indicator").textContent = expanded ? "−" : "＋";
  });

  const desktopNav = $(".desktop-nav");
  const mobileDock = $(".mobile-dock");
  const moreButton = $(".dock-more");
  const moreMenu = $(".mobile-more-menu");
  moreButton.addEventListener("click", () => {
    const opened = moreButton.getAttribute("aria-expanded") === "true";
    moreButton.setAttribute("aria-expanded", String(!opened));
    moreMenu.hidden = opened;
  });
  mobileDock.addEventListener("click", (event) => {
    const link = event.target.closest("a[href^='#']");
    if (!link) return;
    moreMenu.hidden = true;
    moreButton.setAttribute("aria-expanded", "false");
  });
  document.addEventListener("click", (event) => {
    if (!mobileDock.contains(event.target)) {
      moreMenu.hidden = true;
      moreButton.setAttribute("aria-expanded", "false");
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && moreButton.getAttribute("aria-expanded") === "true") {
      moreMenu.hidden = true;
      moreButton.setAttribute("aria-expanded", "false");
      moreButton.focus();
    }
  });

  document.documentElement.classList.add("js-enabled");
  const revealItems = $$(".reveal");
  [".about-card", ".skill-item", ".project-card", ".certificate-card"].forEach((selector) => {
    $$(selector).forEach((element, index) => element.style.setProperty("--reveal-delay", `${Math.min(index, 5) * 55}ms`));
  });
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    revealItems.forEach((element) => element.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });
    revealItems.forEach((element) => revealObserver.observe(element));
  }

  const sections = $$("main section[id]").filter((section) => !section.hidden);
  const navLinks = [...$$(".desktop-nav a[href^='#'], .mobile-dock a[href^='#'], .mobile-more-menu a[href^='#']")];
  const updateActive = (id) => navLinks.forEach((link) => {
    const active = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("is-active", active);
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  if ("IntersectionObserver" in window) {
    const activeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) updateActive(entry.target.id); });
    }, { rootMargin: "-34% 0px -58% 0px", threshold: 0 });
    sections.forEach((section) => activeObserver.observe(section));
  }

  const progress = $(".scroll-progress span");
  const backToTop = $(".back-to-top");
  const header = $(".site-header");
  let lastScroll = window.scrollY;
  let ticking = false;
  const updateScrollState = () => {
    const range = document.documentElement.scrollHeight - window.innerHeight;
    const amount = range > 0 ? Math.min(100, Math.max(0, window.scrollY / range * 100)) : 0;
    progress.style.transform = `scaleX(${amount / 100})`;
    backToTop.classList.toggle("is-visible", window.scrollY > 580);
    const currentY = window.scrollY;
    const focusedInsideHeader = header.contains(document.activeElement);
    if (currentY < 50 || focusedInsideHeader || moreButton.getAttribute("aria-expanded") === "true") {
      header.classList.remove("is-hidden");
    } else if (currentY > lastScroll + 6) {
      header.classList.add("is-hidden");
    } else if (currentY < lastScroll - 5) {
      header.classList.remove("is-hidden");
    }
    lastScroll = currentY;
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateScrollState);
  }, { passive: true });
  updateScrollState();
})();
