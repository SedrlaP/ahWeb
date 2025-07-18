import "./footer.css"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="footer wrapper">
      <div className="footer__logo">
        Autoservis <br /> Halas
      </div>
      <div className="footer__service">
        <h3 className="footer__service__title footer-title-fs m-bot-1">
          Služby
        </h3>
        <ul className="footer__service__navigation footer-text-fs">
          <li>
            <Link to={`autoservis`}>Autoservis</Link>
          </li>
          <li>
            <Link to={`autopujcovna`}>Autopůjčovna</Link>
          </li> 
          <li>
            <Link to={`pneuservis`}>Pneuservis</Link>
          </li>
          <li>
            <Link to={`pojistneudalosti`}>Pojístné události</Link>
          </li>
        </ul>
      </div>
      <div className="footer__contact">
        <h3 className="footer__contact__title footer-title-fs m-bot-1">
          Kontakt
        </h3>
        <ul className="footer__contact__info footer-text-fs">
          <li>+420 775 338 324</li>
          <li>Horní Dubňany 43, 671 73 Horní Dubňany</li>
          <li>renaulthalas@seznam.cz</li>
        </ul>
      </div>
      <div className="footer__cebia">
        <a href="https://cz.cebia.com/?a_box=zua3skne">
          <img src="https://partner.cebia.com/data/kampan/6/300x300.png" width="300" height="300" alt="" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
