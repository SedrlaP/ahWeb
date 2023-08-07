import "./navbar.css"
import { NavLink } from "react-router-dom"
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
            <NavLink
              to={`/`}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              Úvod
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`autoservis`}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              Autoservis
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`pneuservis`}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              Pneuservis
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`autopujcovna`}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              Autopůjčovna
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`pojistneudalosti`}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              Pojistné události
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`kontakt`}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              Kontakt
            </NavLink>
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
