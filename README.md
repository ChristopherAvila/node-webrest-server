# Marvel & DC Heroes App

Aplicación web desarrollada con **React, Node.js y Express** que permite visualizar y buscar superhéroes de los universos Marvel y DC.

El proyecto integra un frontend interactivo con un backend encargado de gestionar el servidor y servir los recursos de la aplicación.

## Características

- **Listado de héroes:** visualización de superhéroes de Marvel y DC.
- **Buscador:** permite localizar héroes mediante una búsqueda.
- **Servidor backend:** desarrollado con Node.js y Express.
- **Archivos estáticos:** configuración para servir los recursos del frontend.
- **Variables de entorno:** configuración centralizada mediante archivos `.env`.
- **Validación de configuración:** utilización de `env-var` para validar y gestionar las variables de entorno.
- **Protección de rutas públicas:** utilización de `PUBLIC_PATH` como parte de la configuración para controlar el acceso a los recursos públicos.

## Tecnologías utilizadas

### Frontend
- React
- JavaScript

### Backend
- Node.js
- Express.js

### Configuración y dependencias
- dotenv: carga de variables de entorno.
- env-var: lectura y validación de variables de entorno.

## Requisitos previos

Antes de ejecutar el proyecto, necesitas tener instalado:

- Node.js
- npm

## Instalación

1. Clonar el repositorio:

```bash
git clone <REPOSITORY_URL>
```

2. Acceder al directorio del proyecto:

```bash
cd <PROJECT_DIRECTORY>
```

3. Instalar las dependencias:

```bash
npm install
```

4. Configurar las variables de entorno.

Crear un archivo `.env` tomando como referencia el archivo `.env.example` (si está disponible).

## Variables de entorno

La aplicación utiliza variables de entorno para gestionar la configuración del servidor.

| Variable | Descripción |
|---|---|
| `PORT` | Puerto en el que se ejecuta el servidor. |
| `PUBLIC_PATH` | Configuración de la ruta pública utilizada por la aplicación. |
 
El proyecto presenta un env.template, es necesario copiarlo y renombrarlo a .env y trabajar con las variables de entonrno de su agrado.

## Ejecución

Para iniciar la aplicación en modo desarrollo:

```bash
npm run dev
```

## Objetivo del proyecto

Este proyecto tiene como objetivo poner en práctica conceptos de desarrollo web utilizando React para la interfaz de usuario y Node.js con Express para la implementación del servidor backend, además de trabajar con configuración mediante variables de entorno.