# Portfolio de Guille Andrada

Portafolio personal de desarrollador Full Stack con diseño moderno y responsivo.

## 🚀 Tecnologías Utilizadas

- **HTML5** y **CSS3 puro** (custom properties, sin frameworks ni build step)
- **JavaScript** vanilla con funcionalidades avanzadas
- **Diseño responsivo** y **modo oscuro/claro**
- **Internacionalización** (Español/Inglés/Francés/Portugués)
- **Animaciones** y efectos visuales

## 📁 Estructura del Proyecto

```
htdocs/
├── index.html      # Contenido (español = default) + metadata SEO
├── styles.css      # Estilos (CSS puro, sin build step)
├── app.js          # Lógica: tema, idioma, menú móvil, scroll reveal, formulario
├── i18n.js         # Traducciones EN / FR / PT (overrides sobre el español del HTML)
├── sitemap.xml     # Sitemap (una sola entrada — sitio de una página)
├── robots.txt      # Referencia al sitemap para crawlers
└── assets/         # Imágenes, favicons, thumbnails de proyectos
```

## 🛠️ Desarrollo Local

1. **Con servidor local:**
   ```bash
   python3 -m http.server 8000
   ```
   Abre: http://localhost:8000/index.html

## 📱 Características

- ✅ Diseño completamente responsivo
- ✅ Modo oscuro/claro automático
- ✅ Menú móvil interactivo
- ✅ Animaciones de scroll
- ✅ Soporte multi-idioma (ES/EN/FR/PT)
- ✅ Formulario de contacto funcional
- ✅ Optimizado para performance
- ✅ SEO: sitemap.xml, robots.txt y verificación de Google Search Console

## 🚀 Deployment

Conectado automáticamente con **Vercel** para deployments continuos.

---

Desarrollado con ❤️ por Guille Andrada
