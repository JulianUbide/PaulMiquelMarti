import './App.css'
import imagenDerecha from './assets/derecha.jpg'
import imagenIzquierda from './assets/izquierda.jpg'

function App() {
return (
<main className="contenedor">
<img src={imagenIzquierda} alt="Imagen izquierda" className="imagen"/>

  <a href="tel:+34912345678" className="telefono">
    +34 912 345 678
  </a>

  <img src={imagenDerecha} alt="Imagen derecha" className="imagen"/>
</main>

);
}

export default App;
