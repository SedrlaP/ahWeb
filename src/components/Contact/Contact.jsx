import "./contact.css"

function Contact() {
  return (
    <div className="contact wrapper">
      <div className="contact__card">
        <h3 className="contact__card-title">autoservis halas</h3>
        <ul>
          <li className="contact__card-text">Adresa: Ulice 1, Město, 624 45</li>
          <li className="contact__card-text">Email: email@email.cz</li>
          <li className="contact__card-text">Telefon: +420 123 456 789</li>
          <li className="contact__card-text">IČO: 124567886765</li>
          <li className="contact__card-text">DIČ: 824545676985</li>
        </ul>
      </div>
      <div className="contact__card">
        <h3 className="contact__card-title">provozní doba</h3>
        <p className="contact__card-text">
          Pondělí-Pátek <span>8:00-16:00</span>
        </p>
        <div className="placeholder"></div>
      </div>
    </div>
  )
}

export default Contact
