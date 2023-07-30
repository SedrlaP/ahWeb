import "./navbar.css"

function Navbar() {
  return (
    <header className="header wrapper">
      <div className="header__logo">
        Autoservis <br /> Halas
      </div>
      <input
        type="checkbox"
        className="header__menu-toggle"
        id="header__menu-toggle"
      />
      <nav className="nav">
        <ul className="nav__links">
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
      <label
        htmlFor="header__menu-toggle"
        className="header__menu-toggle-label"
      >
        <span></span>
      </label>
    </header>
  )
}

export default Navbar
