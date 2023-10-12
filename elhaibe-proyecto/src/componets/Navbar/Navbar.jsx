import "./Navbar.css";


function Navbar () {
    return (
      <nav>
        <div>
        <ul>
            <li>INICIO</li>
            <li>SECCION 1</li>
            <li>SECCION 2</li>
          </ul>
        </div>
        <div className="botonCarrito">
           <button><img src="./assets/img/carrito.png" alt="carrito" /></button>
        </div>
      </nav>
    )
  }

export default Navbar;