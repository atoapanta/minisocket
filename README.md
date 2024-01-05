# Características principales

- Aplicación de chat en tiempo real: Utiliza Socket.IO para mantener una conexión persistente entre el servidor y los clientes, permitiendo la comunicación bidireccional en tiempo real.

- Transpilación de código: Utiliza Babel para convertir el código moderno en un formato que sea compatible con la mayoría de los navegadores.

- Ejecución en Docker: Facilita la configuración y ejecución del servidor en un entorno aislado y reproducible.

# Instalación y ejecución

- Instalación de dependencias: Ejecuta npm install para instalar las dependencias necesarias, como Express y Socket.IO.

- Configuración del entorno: Crea un archivo .env.local con las variables de entorno necesarias, como las credenciales de base de datos y otros parámetros específicos de tu aplicación.

- Configuración de Docker: Utiliza el archivo dockerfile para construir y ejecutar el servidor en un entorno Docker.

- Ejecución del servidor: Ejecuta npm start para iniciar el servidor en el puerto especificado en el archivo .env.local.

# Tecnologías utilizadas

- Node.js: Proporciona un entorno de ejecución JavaScript en el lado del servidor.

- Express: Un framework de desarrollo web para Node.js que simplifica la creación de aplicaciones web.

- Socket.IO: Una biblioteca de JavaScript para aplicaciones web en tiempo real que permite la comunicación bidireccional en tiempo real entre los clientes web y el servidor.

- Babel: Herramienta de transpilación que convierte el código moderno en un formato compatible con la mayoría de los navegadores.

- Docker: Facilita la configuración y ejecución del servidor en un entorno aislado y reproducible.

# Consideraciones

- Asegúrese de configurar correctamente las variables de entorno y el puerto en la plataforma de hospedaje y en el archivo .env.local.

- Verifique que el puerto específico (generalmente 80 o 443) esté configurado en el archivo dockerfile.
