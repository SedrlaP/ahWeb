import "./navbar.css"
import { Link } from "react-router-dom"
import { useState } from "react"

function Navbar() {
  const [isChecked, setIsChecked] = useState(false)

  function closeMenu() {
    setIsChecked(false)
  }

  return (
    <header className="header wrapper">
      <div className="header__logo">
        Autoservis <br /> Halas
      </div>
      <input
        type="checkbox"
        className="header__menu-toggle"
        id="header__menu-toggle"
        checked={isChecked}
        onChange={() => setIsChecked((state) => !state)}
      />
      <nav className="nav">
        <ul className="nav__links">
          <li>
            <Link to={`/`} onClick={closeMenu}>
              Úvod
            </Link>
          </li>
          <li>
            <Link to={`autoservis`} onClick={closeMenu}>
              Autoservis
            </Link>
          </li>
          <li>
            <Link to={`pneuservis`} onClick={closeMenu}>
              Pneuservis
            </Link>
          </li>
          <li>
            <Link to={`autopujcovna`} onClick={closeMenu}>
              Autopůjčovna
            </Link>
          </li>
          <li>
            <Link to={`pojistneudalosti`} onClick={closeMenu}>
              Pojistné události
            </Link>
          </li>
          <li>
            <Link to={`kontakt`} onClick={closeMenu}>
              Kontakt
            </Link>
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
