# TallerForm Application

TallerForm es una aplicación web que utiliza Spring Boot para el backend y una combinación de HTML, CSS, JavaScript y Bootstrap para el frontend. La aplicación permite enviar datos de un formulario a un servidor y mostrar la respuesta.

## Características

- **Backend:** Spring Boot
- **Frontend:** HTML, CSS, JavaScript, Bootstrap
- **Controladores REST:** Implementación de controladores RESTful
- **CORS:** Configuración de CORS para permitir peticiones desde diferentes orígenes

## Estructura del proyecto

- ### Backend

  El backend está construido con Spring Boot y se encarga de manejar las peticiones HTTP. La configuración principal incluye la habilitación de CORS para permitir que la aplicación reciba solicitudes desde varios orígenes específicos, como `http://localhost:4200`, `http://127.0.0.1:5500` y `http://localhost:8080`.

  #### Controlador REST

  El backend incluye un controlador que maneja las peticiones POST a un endpoint específico. Este endpoint recibe un objeto con datos de usuario y devuelve esos mismos datos en la respuesta. Esto permite que el frontend envíe datos y reciba una confirmación de que los datos se procesaron correctamente.

- ### Frontend

  El frontend consiste en un formulario web simple, estilizado con Bootstrap, y un archivo JavaScript que maneja la lógica de enviar los datos del formulario al backend y mostrar la respuesta.

  #### Formulario HTML

  El formulario HTML permite a los usuarios ingresar su nombre, apellido y profesión. Está diseñado para ser simple y fácil de usar, con campos de entrada y un botón de envío.

  #### Lógica JavaScript

  El archivo JavaScript se encarga de capturar los datos ingresados en el formulario, enviarlos al backend usando una petición POST, y luego mostrar la respuesta del servidor en la misma página. Este archivo maneja la interacción del usuario con el formulario, asegurando que los datos se envíen correctamente y que la respuesta se muestre de manera clara y concisa.