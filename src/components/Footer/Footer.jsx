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
          <li>+420 123 456 789</li>
          <li>Ulice 140, Město, 624 25</li>
          <li>email@gmail.com</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
