# Armada - Página Web del Clan de World of Warcraft

## 📁 Estructura de Imágenes

Para que la página web funcione correctamente, debes crear la siguiente estructura de carpetas y colocar tus imágenes en las ubicaciones indicadas:

```
armada/
├── index.html
├── styles.css
├── script.js
└── images/
    ├── hero-background.jpg       # Imagen principal del hero (1920x1080px recomendado)
    ├── raid-banner.jpg           # Banner de raids (1920x600px recomendado)
    ├── pvp-banner.jpg            # Banner de PvP (1920x600px recomendado)
    ├── clan-banner.jpg           # Banner del clan (1920x600px recomendado)
    ├── gallery/
    │   ├── victory-1.jpg         # Screenshot de victoria/logro
    │   ├── victory-2.jpg         # Screenshot de victoria/logro
    │   ├── victory-3.jpg         # Screenshot de victoria/logro
    │   ├── victory-4.jpg         # Screenshot de victoria/logro
    │   ├── victory-5.jpg         # Screenshot de victoria/logro
    │   └── victory-6.jpg         # Screenshot de victoria/logro
    └── leaders/
        ├── leader-1.jpg          # Avatar/personaje del Guild Master
        ├── leader-2.jpg          # Avatar/personaje del Raid Leader
        ├── leader-3.jpg          # Avatar/personaje del PvP Officer
        └── leader-4.jpg          # Avatar/personaje del Recruitment Officer
```

## 🖼️ Guía de Imágenes

### 1. **hero-background.jpg**
- **Ubicación:** `./images/hero-background.jpg`
- **Descripción:** Imagen principal de fondo para la sección hero
- **Dimensiones recomendadas:** 1920x1080px
- **Sugerencias:** 
  - Imagen épica del clan reunido
  - Landscape de WoW (Stormwind, Orgrimmar, etc.)
  - Boss fight épico

### 2. **raid-banner.jpg**
- **Ubicación:** `./images/raid-banner.jpg`
- **Descripción:** Banner parallax para la sección de raids
- **Dimensiones recomendadas:** 1920x600px
- **Sugerencias:**
  - Screenshot de raid mítica
  - Grupo frente a un boss
  - Interior de una raid

### 3. **pvp-banner.jpg**
- **Ubicación:** `./images/pvp-banner.jpg`
- **Descripción:** Banner parallax para la sección de PvP
- **Dimensiones recomendadas:** 1920x600px
- **Sugerencias:**
  - Arena o campo de batalla
  - Acción de PvP
  - Gladiadores del clan

### 4. **clan-banner.jpg**
- **Ubicación:** `./images/clan-banner.jpg`
- **Descripción:** Banner parallax mostrando unidad del clan
- **Dimensiones recomendadas:** 1920x600px
- **Sugerencias:**
  - Foto grupal del clan
  - Todos los miembros reunidos
  - Celebración de logros

### 5. **Galería (6 imágenes)**
- **Ubicación:** `./images/gallery/victory-1.jpg` hasta `victory-6.jpg`
- **Descripción:** Screenshots de victorias, logros, eventos del clan
- **Dimensiones recomendadas:** 1280x720px (16:9)
- **Sugerencias:**
  - Primera kill de boss mítico
  - Logros de temporada
  - Eventos especiales del clan
  - Torneos PvP ganados
  - Monturas o items épicos conseguidos

### 6. **Líderes (3 imágenes)**
- **Ubicación:** `./images/leaders/leader-1.jpg`, `leader-2.jpg`, `leader-3.jpg`
- **Descripción:** Avatares o renders de los personajes líderes
- **Dimensiones recomendadas:** 500x500px (cuadradas)
- **Sugerencias:**
  - Portrait del personaje
  - Render 3D del modelo del personaje
  - Armory screenshot recortado

## 🎨 Características de la Página

### ✨ Efecto Parallax
- Las secciones de banner tienen efecto parallax al hacer scroll
- Movimiento suave y fluido
- Optimizado con RequestAnimationFrame

### 🎭 Estilo Minimalista
- Paleta de colores oscura con acentos dorados
- Tipografía limpia y moderna
- Espaciado generoso entre elementos
- Animaciones sutiles

### 📱 Responsive
- Adaptada para desktop, tablet y móvil
- Navegación optimizada para todos los dispositivos
- Imágenes responsive

### 🔧 Secciones Incluidas
1. **Hero** - Presentación principal con call-to-action
2. **Sobre Nosotros** - Información del clan y estadísticas
3. **Galería** - Showcase de logros y momentos épicos
4. **Roster** - Líderes del clan
5. **Raids** - Horarios de actividades
6. **Únete** - Requisitos y contacto

## 🚀 Cómo Usar

1. **Crear la estructura de carpetas:**
   ```bash
   mkdir -p images/gallery images/leaders
   ```

2. **Colocar tus imágenes** en las carpetas correspondientes según la estructura indicada

3. **Personalizar el contenido:**
   - Edita `index.html` para cambiar textos, nombres, información de contacto
   - Modifica `styles.css` para ajustar colores (variables CSS en `:root`)
   - Los efectos de parallax están en `script.js`

4. **Abrir en el navegador:**
   - Simplemente abre `index.html` en tu navegador
   - O usa un servidor local para mejor rendimiento:
     ```bash
     # Con Python 3
     python -m http.server 8000
     
     # Con Node.js y http-server
     npx http-server
     ```

## 🎨 Personalización de Colores

En `styles.css`, modifica las variables CSS en `:root`:

```css
:root {
    --primary-color: #1a1a1a;      /* Color de fondo principal */
    --secondary-color: #2d2d2d;    /* Color de fondo secundario */
    --accent-color: #c9a227;       /* Color de acento (dorado) */
    --text-light: #ffffff;         /* Texto claro */
    --text-gray: #b0b0b0;         /* Texto gris */
}
```

## 📝 Notas Adicionales

- **Optimización de imágenes:** Se recomienda comprimir las imágenes antes de subirlas
- **Formatos recomendados:** JPG para fotografías, PNG para logos/gráficos
- **Peso sugerido:** Máximo 500KB por imagen para mejor rendimiento
- **Herramientas útiles:** TinyPNG, Squoosh, ImageOptim

## 💡 Tips para Mejores Resultados

1. Usa imágenes de alta calidad pero optimizadas
2. Mantén consistencia en los tonos y estilos de las imágenes
3. Para los banners parallax, usa imágenes con buen contraste
4. Los portraits de líderes funcionan mejor con fondos oscuros o transparentes
5. Actualiza regularmente la galería con nuevos logros

---

**¡Disfruta tu nueva página web para el clan La Última Armada!** 🛡️⚔️
