import "./serviceblob.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faWrench,
  faCar,
  faCarBurst,
  faCarSide,
} from "@fortawesome/free-solid-svg-icons"

function ServiceBlob() {
  const style = {
    color: "#ededed",
    position: "absolute",
    top: "-25px",
    height: "3rem",
  }
  return (
    <div className="services-container wrapper">
      <div className="blob">
        <FontAwesomeIcon icon={faWrench} style={style} />
        <h3 className="blob__text">AUTOSERVIS</h3>
      </div>
      <div className="blob">
        <FontAwesomeIcon icon={faCarSide} style={style} />
        <h3 className="blob__text">PNEUSERVIS</h3>
      </div>
      <div className="blob">
        <FontAwesomeIcon icon={faCar} style={style} />
        <h3 className="blob__text">
          AUTO <br />
          PŮJČOVNA
        </h3>
      </div>
      <div className="blob">
        <FontAwesomeIcon icon={faCarBurst} style={style} />
        <h3 className="blob__text">
          POJISTNÉ <br />
          UDÁLOSTI
        </h3>
      </div>
    </div>
  )
}

export default ServiceBlob
