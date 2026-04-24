# CV Profesional - Willian Ruiz

## 📋 Descripción
Este es un curriculum vitae moderno y profesional desarrollado en HTML, CSS y JavaScript. Cuenta con un diseño responsivo, animaciones suaves y funcionalidades interactivas.

## ✨ Características

### 🎨 Diseño Moderno
- **Diseño responsivo** que se adapta a cualquier dispositivo
- **Gradientes y efectos visuales** modernos
- **Animaciones suaves** al hacer scroll
- **Tipografía profesional** con Google Fonts (Inter)
- **Iconos de Font Awesome** para mejor presentación

### 🚀 Funcionalidades Interactivas
- **Click para copiar** información de contacto
- **Efectos hover** en elementos interactivos
- **Animaciones de entrada** para las secciones
- **Botón de impresión** integrado
- **Efecto de escritura** en el nombre principal
- **Notificaciones** de confirmación

### 📱 Totalmente Responsivo
- Optimizado para **desktop, tablet y móvil**
- **Diseño adaptativo** que mantiene la legibilidad
- **Estilos específicos para impresión**

## 🛠️ Personalización

### 1. Información Personal
Edita el archivo `index.html` y actualiza:

```html
<!-- Sección de contacto -->
<h1 class="name">Willian Ruiz</h1>
<h2 class="title">Desarrollador de Software | Especialista en Tecnología</h2>

<!-- Información de contacto -->
<span>willian.ruiz@email.com</span>
<span>+57 (XXX) XXX-XXXX</span>
<span>Colombia</span>
<span>linkedin.com/in/willian-ruiz</span>
<span>github.com/willianruiz</span>
```

### 2. Perfil Profesional
Actualiza la sección de resumen profesional:

```html
<p class="summary">
    [Escribe aquí tu perfil profesional personalizado]
</p>
```

### 3. Habilidades Técnicas
Modifica las habilidades en cada categoría:

```html
<div class="skill-category">
    <h4>Lenguajes de Programación</h4>
    <div class="skills-list">
        <span class="skill-tag">JavaScript</span>
        <span class="skill-tag">Python</span>
        <!-- Agrega más habilidades aquí -->
    </div>
</div>
```

### 4. Experiencia Laboral
Actualiza o agrega nuevas experiencias:

```html
<div class="experience-item">
    <div class="experience-header">
        <h4 class="job-title">[Título del Puesto]</h4>
        <span class="company">[Nombre de la Empresa]</span>
        <span class="period">[Período]</span>
    </div>
    <ul class="responsibilities">
        <li>[Responsabilidad 1]</li>
        <li>[Responsabilidad 2]</li>
    </ul>
</div>
```

### 5. Proyectos
Agrega tus proyectos personales:

```html
<div class="project-item">
    <h4 class="project-title">[Nombre del Proyecto]</h4>
    <p class="project-description">[Descripción del proyecto]</p>
    <div class="project-tech">
        <span class="tech-tag">[Tecnología 1]</span>
        <span class="tech-tag">[Tecnología 2]</span>
    </div>
</div>
```

### 6. Formación Académica
Actualiza tu información educativa:

```html
<div class="education-item">
    <h4 class="degree">[Título/Carrera]</h4>
    <span class="institution">[Institución]</span>
    <span class="period">[Período]</span>
    <p class="education-description">[Descripción]</p>
</div>
```

## 🎨 Personalización de Colores

### Colores Principales
Puedes cambiar los colores editando las variables CSS en `styles.css`:

```css
/* Colores principales */
--primary-color: #3498db;      /* Azul principal */
--secondary-color: #2c3e50;    /* Azul oscuro */
--accent-color: #27ae60;       /* Verde para experiencia */
--warning-color: #f39c12;      /* Naranja para educación */
--danger-color: #e74c3c;       /* Rojo para proyectos */
--purple-color: #9b59b6;       /* Púrpura para certificaciones */
--teal-color: #1abc9c;         /* Verde azulado para idiomas */
```

### Gradientes de Fondo
```css
/* Gradiente principal del body */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Gradiente del header */
background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
```

## 📄 Cómo Usar

### 1. Visualización
- Abre `index.html` en cualquier navegador web moderno
- El CV se cargará con todas las animaciones y efectos

### 2. Impresión
- Haz clic en el botón "Imprimir CV" en la esquina inferior derecha
- O usa `Ctrl+P` (Windows) / `Cmd+P` (Mac)
- El CV está optimizado para impresión en formato A4

### 3. Conversión a PDF
- Usa la función de "Imprimir" del navegador
- Selecciona "Guardar como PDF" como destino
- Ajusta los márgenes según sea necesario

## 🔧 Funcionalidades Avanzadas

### JavaScript Interactivo
El archivo `script.js` incluye:

```javascript
// Copiar información de contacto
CVUtils.updateContact('email', 'nuevo@email.com');

// Agregar nueva habilidad
CVUtils.addSkill('Lenguajes', 'TypeScript');

// Resaltar sección
CVUtils.highlightSection('Experiencia');
```

### Animaciones CSS
- **Fade in** al hacer scroll
- **Hover effects** en elementos interactivos
- **Transiciones suaves** entre estados
- **Animación de escritura** en el nombre

## 📱 Compatibilidad

### Navegadores Soportados
- ✅ Chrome 70+
- ✅ Firefox 65+
- ✅ Safari 12+
- ✅ Edge 79+

### Dispositivos
- ✅ Desktop (1920px+)
- ✅ Laptop (1366px - 1919px)
- ✅ Tablet (768px - 1365px)
- ✅ Móvil (320px - 767px)

## 🚀 Mejoras Futuras

### Posibles Extensiones
1. **Modo oscuro/claro** toggle
2. **Múltiples idiomas** (ES/EN)
3. **Generación automática de PDF** con html2pdf.js
4. **Formulario de contacto** integrado
5. **Integración con APIs** de LinkedIn/GitHub
6. **Versión en línea** con hosting

### Librerías Adicionales
```html
<!-- Para generar PDF -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>

<!-- Para animaciones avanzadas -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
```

## 📞 Soporte

Si necesitas ayuda para personalizar tu CV:

1. **Revisa este README** para instrucciones detalladas
2. **Modifica los archivos** según tus necesidades
3. **Prueba en diferentes navegadores** antes de finalizar
4. **Guarda copias de respaldo** antes de hacer cambios grandes

## 📝 Notas Importantes

- **Personaliza toda la información** antes de usar
- **Revisa la ortografía** y gramática
- **Actualiza regularmente** con nueva experiencia
- **Mantén un diseño consistente** al agregar contenido
- **Prueba la impresión** antes de presentar

---

**¡listo! 🎉**


