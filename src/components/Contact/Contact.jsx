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
          <li className="contact__card-text">IČO: 76664490</li>
          <li className="contact__card-text">DIČ: CZ8902285139</li>
          <li className="contact__card-text">
            Facebook: <a target="_blank" href="https://www.facebook.com/profile.php?id=100077845975503">AutoservisHalas</a>
          </li>
        </ul>
      </div>
      <div className="contact__card">
        <h3 className="contact__card-title">provozní doba</h3>
        <div className="two-column">
          <p className="contact__card-text">Pondělí-Pátek:</p>
          <p className="contact__card-text">
            8:00-12:30 <br />
            13:00-16:30
          </p>
        </div>
        <div className="iframe-container">
          <iframe className="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.1119701418897!2d16.20018121856048!3d49.065506273421846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712a645a948a82b%3A0x3cb5f51e381d34ff!2zSG9ybsOtIER1YsWIYW55IDQzLCA2NzEgNzMgSG9ybsOtIER1YsWIYW55!5e0!3m2!1scs!2scz!4v1698911021350!5m2!1scs!2scz" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact
