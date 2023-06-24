# Chat web

Un proyecto realizado con NodeJS, Express y Socket.io

Se trata de una aplicación web de chat en tiempo real, con un diseño muy minimalista. La comunicación con el servidor se hace mediante envíos POST y la notificación del servidor a los clientes conectados es mediante web sockets.

## Configuración del entorno

Asegúrate de tener Node.js instalado en tu computadora, una versión reciente.

Instala las dependencias ejecutando el siguiente comando en la terminal:

```shell
npm install
```

## Puesta en marcha

Para poner en marcha el servidor, ejecuta el comando siguiente:

```shell
npm start
```

El servicio se pondrá en marcha desde el terminal. Podrás acceder a el desde la ruta `http://localhost:3000/`. Pruébalo con varios navegadores o desde máquinas diferentes (indicando en este último caso la dirección IP de la máquina que ejecuta el servicio en lugar de localhost).