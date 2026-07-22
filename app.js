/* ============================================================
   app.js — Lógica del sitio (sin dependencias).
   ============================================================ */

/* ------------------------------------------------------------
   1) TUS CV EN GOOGLE DRIVE  ←  EDITÁ ACÁ
   ------------------------------------------------------------
   Pegá el enlace de cada CV. En Drive: clic derecho en el archivo →
   "Compartir" → "Cualquier persona con el enlace" → "Copiar enlace".
   Pegá ese enlace tal cual; el código lo convierte en descarga directa.
   - en  → "Guillermo Andrada FSD.pdf" (inglés)
   - es  → "Guillermo Andrada DFS.pdf" (español)
   Si dejás uno vacío (""), su botón se oculta solo.
------------------------------------------------------------ */
const CV = {
  en: "https://drive.google.com/file/d/1wWklQmMN1vlP5mqylDE4Z5A0XgoxYpnT/view?usp=sharing",
  es: "https://drive.google.com/file/d/1fDw2K8TeveIBcokVy20hgquURtMDmdqh/view?usp=sharing"
};

/* Convierte un enlace de Drive en descarga directa */
function driveDownload(url) {
  if (!url) return "";
  const m = url.match(/\/d\/([^/]+)/) || url.match(/[?&]id=([^&]+)/);
  return m ? `https://drive.google.com/uc?export=download&id=${m[1]}` : url;
}

/* ------------------------------------------------------------
   2) TEMA  (claro / oscuro)
------------------------------------------------------------ */
const root = document.documentElement;
const ICON_SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
const ICON_MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/></svg>';

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  const btn = document.getElementById("theme-btn");
  if (btn) {
    btn.innerHTML = theme === "light" ? ICON_MOON : ICON_SUN;
    btn.setAttribute("aria-label", theme === "light" ? "Modo oscuro" : "Modo claro");
  }
}
function initTheme() {
  const saved = localStorage.getItem("theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  applyTheme(saved || (prefersLight ? "light" : "dark"));
}
function toggleTheme() {
  const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  localStorage.setItem("theme", next);
  applyTheme(next);
}

/* ------------------------------------------------------------
   3) MOVIMIENTO  (animaciones on / off)
------------------------------------------------------------ */
const ICON_MOTION = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h4l2-7 2 14 2-7h4"/></svg>';
const ICON_NOMOTION = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>';

function applyMotion(on) {
  root.classList.toggle("reduce-motion", !on);
  root.classList.toggle("motion-on", on);
  const btn = document.getElementById("motion-btn");
  if (btn) {
    btn.innerHTML = on ? ICON_MOTION : ICON_NOMOTION;
    btn.setAttribute("aria-label", on ? "Desactivar animaciones" : "Activar animaciones");
  }
}
function initMotion() {
  const saved = localStorage.getItem("motion");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  applyMotion(saved ? saved === "on" : !prefersReduced);
}
function toggleMotion() {
  const on = !root.classList.contains("motion-on");
  localStorage.setItem("motion", on ? "on" : "off");
  applyMotion(on);
  if (on) revealAll(); // re-dispara las apariciones
}

/* ------------------------------------------------------------
   4) IDIOMA  (ES por defecto en el HTML / EN, FR, PT desde i18n.js)
------------------------------------------------------------ */
const LANGS = ["es", "en", "fr", "pt"];
const i18nNodes = Array.from(document.querySelectorAll("[data-i18n]"));
const originalES = new Map();
i18nNodes.forEach((el) => {
  originalES.set(el, el.hasAttribute("data-html") ? el.innerHTML : el.textContent);
});

/* Devuelve el string traducido para `key` en el idioma actual, con
   fallback al original en español (vía el elemento, si se pasa). */
function i18nText(key, lang, el) {
  if (lang === "es") return el ? originalES.get(el) : null;
  const dict = window["I18N_" + lang.toUpperCase()];
  return (dict && dict[key]) ?? (el ? originalES.get(el) : null);
}

function setLang(lang) {
  if (!LANGS.includes(lang)) lang = "es";
  root.setAttribute("lang", lang);
  i18nNodes.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = i18nText(key, lang, el);
    if (val == null) return;
    if (el.hasAttribute("data-html")) el.innerHTML = val; else el.textContent = val;
  });
  const label = document.getElementById("lang-label");
  if (label) label.textContent = lang.toUpperCase();
  document.querySelectorAll("#lang-menu button[data-lang]").forEach((btn) => {
    btn.setAttribute("aria-current", String(btn.getAttribute("data-lang") === lang));
  });
  localStorage.setItem("lang", lang);
}
function initLang() {
  const saved = localStorage.getItem("lang");
  if (saved && LANGS.includes(saved)) return setLang(saved);
  const nav = (navigator.language || "es").slice(0, 2).toLowerCase();
  setLang(LANGS.includes(nav) ? nav : "es");
}

/* ------------------------------------------------------------
   4b) MENÚ DE IDIOMA (dropdown)
------------------------------------------------------------ */
function initLangMenu() {
  const btn = document.getElementById("lang-btn");
  const menu = document.getElementById("lang-menu");
  if (!btn || !menu) return;

  function closeMenu() {
    menu.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  }
  function openMenu() {
    menu.classList.add("open");
    btn.setAttribute("aria-expanded", "true");
  }

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.contains("open") ? closeMenu() : openMenu();
  });
  menu.querySelectorAll("button[data-lang]").forEach((item) => {
    item.addEventListener("click", () => {
      setLang(item.getAttribute("data-lang"));
      closeMenu();
    });
  });
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && e.target !== btn) closeMenu();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}

/* ------------------------------------------------------------
   5) MENÚ MÓVIL
------------------------------------------------------------ */
function initMenu() {
  const burger = document.getElementById("burger");
  const links = document.getElementById("nav-links");
  if (!burger || !links) return;
  burger.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("open");
      burger.classList.remove("open");
    })
  );
}

/* ------------------------------------------------------------
   6) SCROLL REVEAL
------------------------------------------------------------ */
let observer;
function revealAll() {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
}
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!root.classList.contains("motion-on")) { revealAll(); return; }
  observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); observer.unobserve(e.target); } }),
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  items.forEach((el) => observer.observe(el));
}

/* ------------------------------------------------------------
   7) FORMULARIO DE CONTACTO (Formspree)
------------------------------------------------------------ */
function initForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  const status = document.getElementById("form-status");
  const btn = form.querySelector('button[type="submit"]');
  const t = (key, esDefault) => i18nText(key, root.getAttribute("lang"), null) ?? esDefault;
  const labelSend = () => i18nText("ct.form.send", root.getAttribute("lang"), btn);
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    btn.disabled = true;
    btn.textContent = t("ct.form.sending", "Enviando...");
    status.textContent = ""; status.className = "form-status";
    try {
      const res = await fetch(form.action, {
        method: "POST", body: new FormData(form), headers: { Accept: "application/json" },
      });
      if (res.ok) {
        status.textContent = t("ct.form.ok", "Mensaje enviado correctamente.");
        status.className = "form-status ok"; form.reset();
      } else throw new Error();
    } catch {
      status.textContent = t("ct.form.err", "Hubo un error. Probá de nuevo.");
      status.className = "form-status err";
    } finally {
      btn.disabled = false; btn.textContent = labelSend();
    }
  });
}

/* ------------------------------------------------------------
   8) CV (Google Drive)
------------------------------------------------------------ */
function initCV() {
  [["en", CV.en], ["es", CV.es]].forEach(([k, url]) => {
    const el = document.querySelector(`[data-cv="${k}"]`);
    if (!el) return;
    const href = driveDownload(url);
    if (href) { el.href = href; el.target = "_blank"; el.rel = "noopener"; }
    else el.style.display = "none";
  });
}

/* ------------------------------------------------------------
   INIT
------------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMotion();
  initLang();
  initLangMenu();
  initMenu();
  initReveal();
  initForm();
  initCV();

  document.getElementById("theme-btn")?.addEventListener("click", toggleTheme);
  document.getElementById("motion-btn")?.addEventListener("click", toggleMotion);
});
