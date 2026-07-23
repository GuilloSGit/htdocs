# /cierre — Portfolio (ga-software.dev / repo `htdocs`)

Repo único, sitio estático (HTML/CSS/JS vanilla, sin build step, sin `package.json`). Push a `master` dispara deploy automático en Vercel a `ga-software.dev` — tratar el push como una acción visible en producción, no como un commit local más.

## 1. Estado git

```bash
git status
git diff --stat
git log --oneline -5
```

## 2. Actualizar memoria del proyecto

Memoria en `~/.claude/projects/-Users-guillermoandrada-Projects-htdocs/memory/`:

- `MEMORY.md` — índice, un renglón por memoria.
- `repositioning-2026-07.md` — por qué el portfolio dice lo que dice hoy (posicionamiento, qué proyectos entraron/salieron y por qué).
- `i18n-architecture.md` — cómo funciona el sistema de idiomas hecho a mano (ES default en HTML + `I18N_EN/FR/PT` en `i18n.js`, dropdown en vez de toggle binario).

Si esta sesión cambió posicionamiento, proyectos mostrados, o el mecanismo de idiomas — actualizar la memoria correspondiente (o crear una nueva si es un tema distinto). Si fue un cambio menor de contenido sin decisiones nuevas, no hace falta tocar memoria.

## 3. Actualizar documentación del repo

Este repo no tiene `CLAUDE.md`/`AGENTS.md` propio — la única doc es `README.md`. Actualizar solo si cambió la stack, la estructura de archivos, o las features listadas (ej: agregar un idioma, cambiar de CSS puro a un framework, etc). No inflar el README con detalle que ya vive en el código.

## 4. Verificación obligatoria (no hay test suite — esto reemplaza a "npm test")

```bash
cd /Users/guillermoandrada/Projects/htdocs

# JS sin errores de sintaxis
node --check app.js && echo "app.js OK"
node --check i18n.js && echo "i18n.js OK"

# site.webmanifest es JSON válido (ya hubo un bug real acá: rutas de íconos duplicando "assets/assets/")
python3 -c "import json; json.load(open('assets/site.webmanifest')); print('manifest OK')"

# Paridad de claves entre los 4 idiomas — si se tocó i18n.js, esto NO puede fallar
node -e "
global.window = {};
require('./i18n.js');
const en = Object.keys(window.I18N_EN);
['I18N_FR','I18N_PT'].forEach(k => {
  const other = Object.keys(window[k]);
  console.log(k, other.length === en.length && en.every(x => other.includes(x)) ? 'OK' : 'MISMATCH');
});
"

# Todo data-i18n del HTML resuelve en el diccionario EN (si falta una clave, avisa)
node -e "
global.window = {};
require('./i18n.js');
const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const keys = [...html.matchAll(/data-i18n=\"([^\"]+)\"/g)].map(m => m[1]);
const missing = keys.filter(k => !(k in window.I18N_EN));
console.log(missing.length ? 'MISSING: ' + missing.join(', ') : 'All ' + keys.length + ' keys OK');
"
```

Si hubo cambios visuales (nueva sección, nuevo componente, cambio de layout), levantar un server local y revisar con el navegador/Puppeteer antes de dar por terminado — no alcanza con que el JS no tire error de sintaxis:

```bash
python3 -m http.server 8098 &
# revisar en los 4 idiomas si el cambio toca texto/i18n
# pkill -f "http.server 8098" al terminar
```

No commitear/pushear si algo de esto falla.

## 5. Commit (+ push si corresponde)

Conventional Commits, sin `Co-Authored-By` si el usuario no lo pidió explícitamente (chequear preferencia real antes de asumir).

**Push**: el repo tiene remoto (`origin` → `github.com/GuilloSGit/htdocs`) y está conectado a Vercel con deploy automático — pushear es publicar cambios en el sitio en vivo. Preguntar antes de pushear salvo que el usuario ya haya dicho explícitamente "pusheá" en esta sesión.

## 6. Prompt autónomo para la próxima sesión

Al cerrar, dejar un prompt que la próxima sesión pueda tirar sin preguntar contexto:

```
Retomo el portfolio (~/Projects/htdocs, ga-software.dev). Leer memoria en
~/.claude/projects/-Users-guillermoandrada-Projects-htdocs/memory/ antes de
tocar nada — ahí está por qué el sitio dice lo que dice y cómo funciona el
i18n a mano (ES default + I18N_EN/FR/PT + dropdown de idioma). Último estado:
[completar con qué se hizo en esta sesión y qué quedó pendiente].
```

### Último estado conocido (2026-07-22)

- Reposicionamiento a "Full Stack Developer · Ingeniero en Sistemas" + Pay Alert/Galpón Digital + FR/PT: hecho y en producción.
- SEO: `sitemap.xml`, `robots.txt` y meta tag de verificación de Google Search Console — hecho y en producción. **Pendiente del lado del usuario**: entrar a Search Console y enviar el sitemap manualmente (no se puede hacer desde acá).
- **Pendiente, sin empezar**: Google Business Profile. Falta que el usuario decida el nombre del negocio a mostrar ("Guille Andrada" vs. brand "GA · software") antes de armar el perfil — ver [[seo-google-2026-07]] en memoria para el resto de los detalles (categoría sugerida, cómo manejar la falta de local físico, qué datos reusar del sitio).
