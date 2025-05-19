# User Management - Arquitectura Monolítica

Este proyecto tiene como único propósito **demostrar cómo se estructura y organiza una arquitectura monolítica** moderna utilizando Node.js con Express en el backend y React en el frontend. **No está orientado a ofrecer funcionalidades avanzadas**, sino a servir como ejemplo didáctico.

## 🧱 ¿Qué es una arquitectura monolítica?

Una arquitectura monolítica consiste en que **todo el sistema (API, lógica de negocio, acceso a datos y frontend) se ejecuta dentro de una única aplicación**. Todo el código está centralizado en un solo proyecto, sin microservicios ni servicios distribuidos.

## 🧩 Capas del backend (Node + Express)

El backend está separado en **capas bien definidas**, lo que mejora la organización del código:

- **Rutas (`routes`)**: Se encargan de definir los endpoints de la API y redirigir las peticiones al controlador correspondiente.
- **Controladores (`controllers`)**: Reciben la solicitud desde las rutas, validan los datos y coordinan la lógica de negocio. También gestionan las respuestas y los errores.
- **Servicios (`services`)**: Contienen la lógica de negocio pura. Aquí se procesan reglas como evitar duplicados, aplicar validaciones o transformar datos antes de persistirlos.
- **Repositorios (`repositories`)**: Encapsulan el acceso a la base de datos. Esta capa es responsable de buscar, crear, actualizar o eliminar registros.

## 🎯 Objetivo

El objetivo de esta estructura es **mostrar cómo se puede mantener una separación clara de responsabilidades dentro de un único proyecto monolítico**, haciendo el código más escalable y mantenible, aún sin necesidad de adoptar microservicios.

## ▶️ Ejecución básica

1. Instala las dependencias en `backend/` y `frontend/`.
2. Arranca el backend con `npx ts-node -r tsconfig-paths/register src/app.ts`.
3. Arranca el frontend con `npm run dev`.

## ❗ Nota final

Este proyecto **no tiene intención de ser una aplicación final o completa**, sino un recurso práctico para entender la **organización interna de un monolito bien estructurado**.
