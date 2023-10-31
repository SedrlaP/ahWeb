import "./serviceblob.css"

import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSprayCan,
  faWrench,
  faCar,
  faCarBurst,
  faCarSide,
} from "@fortawesome/free-solid-svg-icons"

function ServiceBlob() {
  const navigate = useNavigate()

  const style = {
    color: "#ededed",
    position: "absolute",
    top: "-25px",
    height: "3rem",
  }
  return (
    <div className="services-container wrapper">
      <button className="blob" onClick={() => navigate("/autoservis")}>
        <FontAwesomeIcon icon={faWrench} style={style} />
        <h3 className="blob__text">AUTOSERVIS</h3>
      </button>
      <button className="blob" onClick={() => navigate("/lakovna")}>
        <FontAwesomeIcon icon={faSprayCan} style={style} />
        <h3 className="blob__text">LAKOVNA</h3>
      </button>
      <button className="blob" onClick={() => navigate("/pneuservis")}>
        <FontAwesomeIcon icon={faCarSide} style={style} />
        <h3 className="blob__text">PNEUSERVIS</h3>
      </button>
      <button className="blob" onClick={() => navigate("/autopujcovna")}>
        <FontAwesomeIcon icon={faCar} style={style} />
        <h3 className="blob__text">
          AUTO <br />
          PŮJČOVNA
        </h3>
      </button>
      <button className="blob" onClick={() => navigate("/pojistneudalosti")}>
        <FontAwesomeIcon icon={faCarBurst} style={style} />
        <h3 className="blob__text">
          POJISTNÉ <br />
          UDÁLOSTI
        </h3>
      </button>
    </div>
  )
}

export default ServiceBlob
