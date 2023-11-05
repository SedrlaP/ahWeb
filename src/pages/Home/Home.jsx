import Hero from "../../components/Hero/Hero"
import ServiceBlob from "../../components/ServiceBlob/ServiceBlob"
import "./home.css"

function Home() {
  return (
    <section>
      <div className="homepage-hero wrapper wrapper-block">
        <h1>
          Pravidelný servis nebo okamžitá oprava vašeho vozu? <br />
          <br />
          Pomůžeme vám se vším!
        </h1>
      </div>
      <ServiceBlob />
    </section>
  )
}

export default Home
