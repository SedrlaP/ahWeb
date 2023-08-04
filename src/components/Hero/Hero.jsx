import "./hero.css"

function Hero({ title, img }) {
  return (
    <div className="hero">
      <p className="hero__title">{title}</p>
      {img && <img className="hero__img" src={`./src/assets/${img}.png`} />}
    </div>
  )
}

export default Hero
