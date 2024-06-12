# Plushie Customization and Ranking App

## Descripción

Esta es una aplicación web que permite a los usuarios personalizar peluches, votar por sus personalizaciones favoritas y ver un ranking de las personalizaciones más populares. La aplicación incluye funciones de autenticación para asegurar que solo los usuarios registrados puedan personalizar y votar. Este proyecto es la parte frontend de la aplicación y se conecta a un backend desarrollado en [Sistema-de-gestion-de-peluches](https://github.com/lautaroda/Sistema-de-gestion-de-peluches).

## Características

- **Inicio de Sesión:** Los usuarios pueden iniciar sesión para acceder a las funcionalidades de personalización y votación.
- **Personalización de Peluches:** Los usuarios pueden seleccionar peluches y agregar personalizaciones como color y accesorios.
- **Votación y Ranking:** Los usuarios pueden votar por las personalizaciones de peluches y ver un ranking basado en la popularidad de las personalizaciones.
- **Protección de Rutas:** Algunas rutas están protegidas y requieren autenticación para acceder a ellas.

## Estructura del Proyecto

- **src/components**
  - `CustomizationForm.js`: Formulario para personalizar peluches.
  - `LoginForm.js`: Formulario de inicio de sesión.
  - `PlushieList.js`: Lista de peluches disponibles.
  - `Navbar.js`: Barra de navegación.

- **src/pages**
  - `HomePage.js`: Página principal.
  - `LoginPage.js`: Página de inicio de sesión.
  - `RankingPage.js`: Página de ranking.
  - `CustomizationPage.js`: Página para personalizar peluches.

- **src/routes**
  - `PrivateRoute.js`: Componente para proteger rutas privadas.

- **src/api**
  - `api.js`: Funciones para interactuar con el backend.

- **Agregar .env**
    - Debe agregar un archivo .env con el puerto y guardarlo en la raiz  Ej:
    PORT=3001
## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/lautaroda/Sistema-de-gestion-de-peluches-Frontend
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd sgpfrontend2
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia la aplicación:
   ```bash
   npm start
   ```

## Uso

1. Abre tu navegador y ve a `http://localhost:3001`.
2. Inicia sesión.
3. Navega a la página de personalización para crear y votar por personalizaciones de peluches.
4. Visita la página de ranking para ver las personalizaciones más populares.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

## Contacto

Para cualquier consulta o sugerencia, por favor contacta a [lautarodeangelis@gmail.com].
```
