import "./navbar.css"
import { NavLink, Link } from "react-router-dom"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMobileScreen } from "@fortawesome/free-solid-svg-icons"

function Navbar() {
  const style = {
    color: "#ededed",
    height: "2rem",
  }

  const [isChecked, setIsChecked] = useState(false)

  function closeMenu() {
    setIsChecked(false)
  }

  return (
    <header className="header wrapper">
      <div className="header__upper">
        <div className="header__upper-logo">
          <NavLink
            to={`/`}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={closeMenu}
          >
            Autoservis <br /> Halas
          </NavLink>
        </div>
        <div className="header__upper-tel">
          <FontAwesomeIcon icon={faMobileScreen} style={style} />
          <span>775 338 324</span>
        </div>
        <div className="header__upper-opening">
          <p>Pondělí-Pátek</p>
          <p>
            8:00-12:30 <br />
            13:00-16:30
          </p>
        </div>
      </div>
      <div className="header__lower">
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
            <li className="drop">
              <NavLink
                to={`autoservis#servis`}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeMenu}
              >
                Autoservis &darr;
              </NavLink>
              <div className="nav__dropdown-menu">
                <ul className="nav__dropdown-links">
                  <li>
                    <Link to={`autoservis#klempirna`} onClick={closeMenu}>
                      Klempírna
                    </Link>
                  </li>
                  <li>
                    <Link to={`autoservis#lakovna`} onClick={closeMenu}>
                      Lakovna
                    </Link>
                  </li>
                  <li>
                    <Link to={`autoservis#klimatizace`} onClick={closeMenu}>
                      Čištění a servis klimatizací
                    </Link>
                  </li>
                  <li>
                    <Link to={`autoservis#montaze`} onClick={closeMenu}>
                      Montáže tažných zařízení
                    </Link>
                  </li>
                  <li>
                    <Link to={`autoservis#stkemise`} onClick={closeMenu}>
                      Zajištění STK a emisí
                    </Link>
                  </li>
                  <li>
                    <Link to={`autoservis#krupobiti`} onClick={closeMenu}>
                      Oprava po krupobiti
                    </Link>
                  </li>
                </ul>
              </div>
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
                to={`pojistneudalosti`}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeMenu}
              >
                Pojistné události
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
                to={`onas`}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeMenu}
              >
                O nás
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
      </div>
    </header>
  )
}

export default Navbar
