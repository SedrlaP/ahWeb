import "./footer.css"

function Footer() {
  return (
    <footer className="footer wrapper">
      <div className="footer__logo">
        Autoservis <br /> Halas
      </div>
      <div className="footer__service">
        <h3 className="footer__service__title m-bot-1">Služby</h3>
        <ul className="footer__service__navigation">
          <li>Autoservis</li>
          <li>Pojístné události</li>
          <li>Pneuservis</li>
          <li>Autopůjčovna</li>
        </ul>
      </div>
      <div className="footer__contact">
        <h3 className="footer__contact__title m-bot-1">Kontakt</h3>
        <ul className="footer__contact__info">
          <li>+420 123 456 789</li>
          <li>Ulice 140, Město, 624 25</li>
          <li>email@gmail.com</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
