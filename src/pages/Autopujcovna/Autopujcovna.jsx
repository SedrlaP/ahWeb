import Hero from "../../components/Hero/Hero"
import "./autopujcovna.css"

function Autopujcovna() {
  const cars = [
    {
      img: "/megane.jpg",
      model: "Renault Megane 1.5 dCi",
      cena: "900",
    },
    {
      img: "/espace.jpg",
      model: "Renault Espace 2.0 dCi",
      cena: "1800",
    },
    {
      img: "/citroen.jpg",
      model: "Citroen C3",
      cena: "700",
    },
  ]

  const cardElements = cars.map((car) => (
    <div key={car.model} className="autopujcovna__card">
      <img src={car.img} />
      <div className="autopujcovna__card-text">
        <p>{car.model}</p>
        <p>{car.cena} Kč/den</p>
        <p>Bez DPH</p>
      </div>
    </div>
  ))

  return (
    <section>
      <Hero title={"Autopůjčovna"} img={"autopujcovna"} />
      <div className="wrapper wrapper-block text-formating text-spacer">
        <p>
          Měli jste nehodu a <strong>potřebujete náhradní vůz</strong>, abyste
          zůstali mobilní? Nenecháme vás na holičkách!
        </p>
        <p>
          Nabízíme vám možnost využití naší autopůjčovny. Máme
          <strong>vozidla všech segmentů</strong> – nižší, střední a vyšší
          třídy. Náhradní vozidlo si lze zapůjčit na jeden den až týden, ale i
          déle – za zvýhodněné ceny.
        </p>
        <div className="text-block">
          <h2>Aktuálně nabízíme:</h2>
          <div className="autopujcovna__card-container">{cardElements}</div>
        </div>
        <p>
          Všechny naše automobily jsou vždy ve 100% stavu a pravidelně
          servisovány. Zpravidla nijak
          <strong>
            neomezujeme ani samostatně neúčtujeme najeté kilometry
          </strong>
          . Všechny vozy jsou pojištěné v rámci celé Evropy proti odcizení a
          havárii.
        </p>
      </div>
    </section>
  )
}

export default Autopujcovna
