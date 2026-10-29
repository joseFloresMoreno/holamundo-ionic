# 📱 ToDo List - Ionic Framework con Angular (Standalone Components)

> **Asignatura:** Desarrollo de Aplicaciones Móviles  
> **Carrera:** Ingeniería en Informática  
> **Semana/Unidad:** Unidad 1 - Semana 3  

---

## 📌 1. Descripción del Proyecto

Este repositorio contiene una aplicación móvil híbrida desarrollada con **Ionic Framework** y **Angular** utilizando arquitectura moderna de **Standalone Components** y control flow nativo (`@for`, `@if`).

El objetivo principal fue construir un gestor de tareas (*ToDo List*) interactivo con operaciones **CRUD en memoria** (Crear, Listar, Actualizar y Eliminar), implementando un diseño de interfaz de usuario basado en la especificación **Soft UI Evolution** (evolución del neumorfismo clásico enfocado en accesibilidad, contraste WCAG AA+ y sombras suaves).

---

## 🚀 2. Características Implementadas

- **Gestión reactiva de tareas (CRUD)**:
  - Formulario con doble enlace de datos mediante `[(ngModel)]` (`FormsModule`).
  - Creación dinámica con generación de identificador temporal (`id` único basado en `Date.now()`).
  - Edición en el mismo formulario mediante vinculación por estado (`editingId`).
  - Eliminación reactiva de registros del array mediante métodos funcionales (`filter`).
- **Diseño UI / UX (Soft UI Evolution)**:
  - Tarjetas elevadas con sombras suaves (`0 2px 12px rgba(0,0,0,0.06)`) y trazo sutil de `1px`.
  - Radio de curvatura de esquinas normalizado a `10px` (`rounded.sm`).
  - Paleta de colores pastel funcional con acento **Soft Blue** (`#87CEEB`) y textos de alto contraste (`#1F2937`) para cumplir estándar WCAG AA+.
  - Acciones de lista simplificadas mediante iconos Ionicons (`pencil-outline`, `trash-outline`) para optimizar el espacio en pantallas móviles.
  - Compatibilidad visual con **Dark Mode** del sistema operativo.

---

## 🛠️ 3. Requisitos Previos de Entorno

Antes de clonar y ejecutar el proyecto, asegúrate de tener instalado en tu equipo:

1. **Node.js**: Versión LTS recomendada (**v20.x o superior**, compatible con Angular 18/19/22).  
   *Verificar en consola:*
   ```bash
   node -v
   npm -v
   ```
2. **Ionic CLI**: Instálalo globalmente vía npm si aún no lo tienes:
   ```bash
   npm install -g @ionic/cli
   ```
   *Verificar instalación:*
   ```bash
   ionic --version
   ```

---

## 📦 4. Instalación y Configuración Local

Sigue estos pasos para clonar y levantar el proyecto en tu máquina local:

### Paso 1: Clonar el repositorio o ingresar a la carpeta del proyecto
```bash
cd holamundo-ionic
```

### Paso 2: Instalar las dependencias de npm
Descarga todas las librerías requeridas por Angular, Ionic y Capacitor:
```bash
npm install
```

> **Nota:** Si durante la instalación surgen alertas de dependencias pares (`peerDependencies`), puedes utilizar:
> ```bash
> npm install --legacy-peer-deps
> ```

---

## 💻 5. Ejecución de la Aplicación

Para iniciar el servidor de desarrollo local con recarga en caliente (*Hot Reload*), ejecuta:

```bash
ionic serve
```

Una vez termine la compilación, la aplicación se abrirá automáticamente en tu navegador en:
```
http://localhost:8100/
```

> 💡 **Consejo de prueba:**  
> Abre las herramientas de desarrollador en el navegador (`F12` o `Ctrl + Shift + I`), activa la **vista de emulación móvil** (icono de smartphone/tablet) y selecciona un dispositivo como *Pixel 7* o *iPhone 14* para validar la experiencia táctil y responsiva.

---

## 📂 6. Estructura Relevante del Código

```text
src/
└── app/
    ├── home/
    │   ├── home.page.html   # Estructura de la vista: formulario y renderizado @for
    │   ├── home.page.scss   # Estilos Soft UI Evolution (sombras, inputs, paleta pastel)
    │   └── home.page.ts     # Lógica Standalone: items array, saveItem(), editItem(), removeItemId()
    ├── app.routes.ts        # Definición de rutas principales
    └── main.ts              # Punto de entrada de la aplicación Angular
design.md                    # Especificación de diseño y lineamientos visuales
```

---

## 🧪 7. Pruebas Funcionales Realizadas

- [x] Carga inicial de items predeterminados de prueba.
- [x] Creación de nueva tarea con validación de campos vacíos.
- [x] Carga de datos de un ítem existente en el formulario al presionar el botón de editar (`pencil-outline`).
- [x] Actualización exitosa en la lista y retorno del formulario a estado inicial.
- [x] Eliminación correcta de elementos por `id`.
- [x] Comprobación de responsividad en resoluciones móviles y de escritorio.

