# Portfolio de Guille Andrada

Portafolio personal de desarrollador Full Stack con diseño moderno y responsivo.

## 🚀 Tecnologías Utilizadas

- **HTML5** y **CSS3** con **Tailwind CSS**
- **JavaScript** vanilla con funcionalidades avanzadas
- **Arquitectura modular** con componentes separados
- **Diseño responsivo** y **modo oscuro/claro**
- **Internacionalización** (Español/Inglés)
- **Animaciones** y efectos visuales

## 📁 Estructura del Proyecto

```
portfolio/
├── index.html              # Versión modular para desarrollo
├── index-built.html        # Versión combinada para hosting
├── components/             # Componentes modulares
│   ├── header.html
│   ├── hero.html
│   ├── about.html
│   ├── experience.html
│   ├── projects.html
│   ├── contact.html
│   └── footer.html
├── assets/                 # Recursos estáticos
│   ├── styles.css
│   ├── main.js
│   ├── tailwind-config.js
│   └── profile-tiny.jpeg
└── build.py                # Script para combinar componentes
```

## 🛠️ Desarrollo Local

1. **Con servidor local:**
   ```bash
   python3 -m http.server 8000
   ```
   Abre: http://localhost:8000/index.html

2. **Para hosting estático:**
   Usa `index-built.html` (generado con `python3 build.py`)

## 📱 Características

- ✅ Diseño completamente responsivo
- ✅ Modo oscuro/claro automático
- ✅ Menú móvil interactivo
- ✅ Animaciones de scroll
- ✅ Soporte bilingüe (ES/EN)
- ✅ Formulario de contacto funcional
- ✅ Optimizado para performance

## 🚀 Deployment

Conectado automáticamente con **Vercel** para deployments continuos.

---

Desarrollado con ❤️ por Guille Andrada
