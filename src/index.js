import './assets/style.css';


const imageContext = require.context(
  './assets', // 👈 ruta de la carpeta que contiene los archivos
  false, // 👈 le indicamos que no haga búsqueda recursiva
  /\.(png|jpe?g|svg)$/ // 👈 expresión regular para el filtro
);

console.log(imageContext.keys()) // Devuelve un array con las rutas de los archivos

imageContext.keys().forEach((imagePath) => {
  const img = document.createElement("img");
  img.src = imageContext(imagePath);
  img.alt = 'my img';
  console.log(imagePath);
  document.body.appendChild(img);
})