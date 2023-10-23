import "./hero.css"

function Hero({ title, img }) {
  return (
    <div className="hero">
      <h2 className="hero__title">{title}</h2>
      {img && <img className="hero__img" src={`./${img}.png`} />}
    </div>
  )
}

export default Hero
