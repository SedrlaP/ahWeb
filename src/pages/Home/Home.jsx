import Hero from "../../components/Hero/Hero"
import ServiceBlob from "../../components/ServiceBlob/ServiceBlob"

function Home() {
  return (
    <>
      <Hero title={"Autoservis Halas"} /*img={"home"} */ />
      <ServiceBlob />
    </>
  )
}

export default Home
