# AprendiendoAngular

<h2>Primeros pasos</h2>

<h4>Actualizar Node.js</h4>
Desde su página oficial se descargó la última versión de node.js

<h4>Actualizar npm de node(Gestor de paquete)</h4>
Desde la terminal se aplico el siguiente comando
<ul>
  <li>npm install -g npm@latest (De esta forma global se actualizo todos los paquetes de node.js)</li>
  <li>npm cache clean --force (De esta forma se limpia el cache de nuestro node, para evitar que utilice paquetes que esten guardados en cache.)</li>
  <li>npm set audit false (De esta forma desactivamos las auditoria de node sobre los paquetes que queramos instalar con Angular.)</li>
  <li>npm install -g @angular/cli@lastest (Instalamos la ultima versión de angular cli)</li>
</ul>

<h4>Creando proyecto con Angular</h4>
Por consola nos dirigimos a la carpeta de nuestro proyecto y usamos el siguiente comando.

<ul>
  <li>ng new (Este comando crea un nuevo proyecto de Angular)</li>
  <li>Nos pedirá un nombre de carpeta que en este caso lo llamamos 'AprendiendoAngular'</li>
  <li>Nos preguntara si queremos configurar el routing de angular y le decimos que N (Por lo genera eso da fallo y lo haremos de forma manual que así lo podemos controlar mejor)</li>
  <li>Nos preguntara si queremos utilizar un procesador de css, sass, less o etc. Y seleccionamos la hoja de estilo que queramos.</li>
</ul>

Angular así comienza a crear un proyecto de angular.

<br>

<h2>Verificar el correcto funcionamiento de nuestro proyecto</h2>

Para eso ejecutamos dentro de la carpeta que creamos de nuestro proyecto el siguiente comando

ng serve (similar que el npm start y sirve para arrancar el westpac para que nos compile y nos transcriba todos los ficheros de typescripts y los unifique todos. Además nos lanzara un like server que nos va a permitir que nuestro proyecto de angula este en un pequeño servidor web local) 

<br>

<h2>Crear un nuevo componente desde consola</h2>
ng g component components/(Nombre del componente que queremos crear).
Nos crea los componente, html y hasta css por si lo queremos usar, ademas nos actualiza el componente en app.module.ts para que lo podamos usar.
