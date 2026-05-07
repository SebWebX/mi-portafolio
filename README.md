# Portafolio Web — Sebastian Enriquez

Portafolio profesional desarrollado con HTML5, CSS3 y JavaScript vanilla. Diseño minimalista y editorial con animaciones fluidas, diseño responsive y formulario de contacto funcional.

🌐 **[Ver portafolio en vivo](https://sebwebx.github.io/mi-portafolio)**

---

## Tecnologías

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## Características

- **Diseño responsive** — mobile-first con media queries por breakpoints
- **Animaciones scroll reveal** — via IntersectionObserver API
- **Smooth scroll** — navegación fluida entre secciones
- **Menú hamburguesa** — navegación adaptada para móvil
- **Formulario de contacto** — validación con regex y envío via Formspree API
- **CV descargable** — acceso directo al currículum en PDF

---

## Secciones

- **Hero** — presentación con estadísticas
- **Sobre mí** — descripción, quote editorial y chips de tecnologías
- **Habilidades** — bento grid con barras de progreso
- **Proyectos** — tarjetas con thumbnail, descripción y links
- **Contacto** — formulario funcional y links directos
- **Footer** — navegación rápida

---

## Arquitectura CSS

- Metodología **BEM** para nomenclatura de clases
- **CSS Custom Properties** para sistema de tokens de diseño
- Tipografía fluida con `clamp()`, `rem` y `ch`
- Layout con **CSS Grid** y **Flexbox**
- Animaciones con `cubic-bezier` personalizado

---

## Arquitectura JavaScript

Módulos independientes por responsabilidad:

initReveal()      → Animaciones scroll con IntersectionObserver
initNav()         → Sombra del nav + smooth scroll
initHamburger()   → Menú móvil responsive
initForm()        → Validación y envío del formulario

---

## Instalación local

```bash
git clone https://github.com/SebWebX/mi-portafolio.git
cd mi-portafolio
```

Abre `index.html` con Live Server en VS Code.

---

## Contacto

**Sebastian Enriquez** — Frontend Developer
- 📧 sebasweb.devx@gmail.com
- 💼 [LinkedIn](https://www.linkedin.com/in/sebaswebdevx)
- 🐙 [GitHub](https://github.com/SebWebX)
