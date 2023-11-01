import "./hero.css"

function Hero({ title, img, id }) {
  return (
    <div className="hero" id={id}>
      <h2 className="hero__title">{title}</h2>
      {img && <img className="hero__img" src={`./src/assets/${img}.png`} />}
    </div>
  )
}

export default Hero
