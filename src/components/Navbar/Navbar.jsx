import "./navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        Autoservis <br /> Halas
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="">Úvod</a>
          </li>
          <li>
            <a href="">Autoservis</a>
          </li>
          <li>
            <a href="">Pneuservis</a>
          </li>
          <li>
            <a href="">Autopůjčovna</a>
          </li>
          <li>
            <a href="">Pojistné událost</a>
          </li>
          <li>
            <a href="">Kontakt</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
