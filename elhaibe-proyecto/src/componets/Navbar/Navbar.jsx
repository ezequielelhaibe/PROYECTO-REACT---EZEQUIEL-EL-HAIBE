import "./Navbar.css";


function Navbar () {
    return (
      <nav>
        <div>
        <ul>
            <li><a href="">INICIO</a></li>
            <li><a href="">SECCION 1</a></li>
            <li><a href="">SECCION 2</a></li>
          </ul>
        </div>
        <div className="botonCarrito">
           <button><img src="./assets/img/carrito.png" alt="carrito" /></button>
        </div>
      </nav>
    )
  }

export default Navbar;