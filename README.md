# CV Profesional - Willian Ruiz

## Descripcion

Sitio web de curriculum profesional construido con HTML, CSS y JavaScript. Presenta el perfil de Willian Ruiz con enfoque en desarrollo de software empresarial, .NET, WPF, Angular, APIs REST, SQL Server e integraciones de pago y hardware.

## Mejoras aplicadas tomando como base este README

El proyecto fue mejorado siguiendo las recomendaciones que ya aparecian en el README original:

- Se agrego una seccion de resumen ejecutivo para reclutadores.
- Se incorporaron palabras clave ATS visibles en la interfaz.
- Se hizo mas evidente el valor de negocio del perfil.
- Se anadieron soft skills dentro del contenido principal.
- Se dejo activo un modo claro/oscuro.
- Se optimizo la impresion para guardar el CV como PDF.
- Se mejoro la accesibilidad con `skip link`, estados activos y mejor navegacion.
- Se limpio el codigo heredado para alinear HTML, CSS y JavaScript con una sola version del sitio.

## Estructura del proyecto

- `index.html`: contenido principal del CV.
- `styles.css`: diseno visual, responsive, tema oscuro y estilos de impresion.
- `script.js`: interacciones del sitio como menu movil, cambio de tema, animaciones, boton volver arriba y vista de impresion.
- `config.js`: datos principales y enlaces configurables.

## Como usarlo

1. Abre `index.html` en tu navegador.
2. Revisa la seccion de contacto y confirma que enlaces como GitHub y LinkedIn sean los correctos.
3. Si quieres exportarlo a PDF, usa el boton `Descargar PDF`, que abre la vista de impresion del navegador.

## Personalizacion rapida

### Datos principales

Edita `config.js` para actualizar:

- nombre
- rol profesional
- email
- telefonos
- ubicacion
- URL de GitHub
- URL de LinkedIn

### Contenido del CV

Edita `index.html` para actualizar:

- resumen ejecutivo
- experiencia laboral
- habilidades
- proyectos
- educacion
- certificaciones

### Diseno visual

Edita `styles.css` si quieres cambiar:

- paleta de colores
- espaciados
- tipografia
- comportamiento responsive
- apariencia del modo oscuro

## Caracteristicas actuales

- Diseno responsive para escritorio, tablet y movil.
- Navegacion fija con scroll suave.
- Animaciones de entrada para secciones.
- Barras de habilidades animadas.
- Tema claro y oscuro con persistencia local.
- Boton de retorno al inicio.
- Exportacion mediante impresion del navegador.
- Estilos preparados para impresion limpia.

## Siguiente mejora recomendada

La siguiente evolucion natural del proyecto seria agregar una version en ingles y una variante de contenido por tipo de vacante, por ejemplo:

- `.NET Backend`
- `Full Stack .NET + Angular`
- `WPF / Integraciones de hardware`

## Nota

El sitio ahora esta mas alineado con el objetivo del README: no solo mostrar informacion, sino presentar un perfil mas competitivo para procesos de seleccion y portafolio profesional.
