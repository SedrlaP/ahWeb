import "./contact.css"

function Contact() {
  return (
    <div className="contact wrapper">
      <div className="contact__card">
        <h3 className="contact__card-title">autoservis halas</h3>
        <ul>
          <li className="contact__card-text">
            Adresa: Horní Dubňany 43, 671 73 Horní Dubňany
          </li>
          <li className="contact__card-text">Email: renaulthalas@seznam.cz</li>
          <li className="contact__card-text">Telefon: +420 775 338 324</li>
          <li className="contact__card-text">IČO: 124567886765</li>
          <li className="contact__card-text">DIČ: 824545676985</li>
          <li className="contact__card-text">
            Facebook: autolakovnahornidubnany
          </li>
        </ul>
      </div>
      <div className="contact__card">
        <h3 className="contact__card-title">provozní doba</h3>
        <div className="two-column">
          <p className="contact__card-text">Pondělí-Pátek:</p>
          <p className="contact__card-text">
            8:00-11:30 <br />
            12:00-16:00
          </p>
        </div>
        <div className="placeholder"></div>
      </div>
    </div>
  )
}

export default Contact
