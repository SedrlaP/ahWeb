import "./contact.css"

function Contact() {
  return (
    <div className="contact wrapper">
      <div className="contact__card">
        <h3 className="contact__card-title">autoservis halas</h3>
        <ul className="contact__card-list">
          <li>Adresa: Ulice 1, Město, 624 45</li>
          <li>Email: email@email.cz</li>
          <li>Telefon: +420 123 456 789</li>
          <li>IČO: 124567886765</li>
          <li>DIČ: 824545676985</li>
        </ul>
      </div>
      <div className="contact__card">
        <h3 className="contact__card-title">provozní doba</h3>
        <p>
          Pondělí-Pátek <span>8:00-16:00</span>
        </p>
        <div className="placeholder"></div>
      </div>
    </div>
  )
}

export default Contact
