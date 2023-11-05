import "./errorpage.css"
import { Link } from "react-router-dom"

function ErrorPage() {
  return (
    <div className="error">
      <h3>Chyba!</h3>
      <p>404 - Stránka nenalezena</p>
      <p className="center">
        Stránka, kterou hledáte nejspíše neexistuje, nebo je změněná.
      </p>
      <Link to={`/`} className="error__button">
        ZPĚT NA ÚVODNÍ STRÁNKU
      </Link>
    </div>
  )
}

export default ErrorPage
