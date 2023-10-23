import Hero from "../../components/Hero/Hero"

function Pneuservis() {
  return (
    <>
      <Hero title={"Pneuservis"} img={"./src/assets/pneuservis.png"} />
      <div className="wrapper wrapper-block text-formating">
        <p>Správné přezutí a vyvážení kol je základem bezpečné jízdy!</p>
        <p>
          Nezapomínáme ani na geometrii vozu, kterou vám na požádání při výměně
          pneumatik změříme, případně seřídíme!
        </p>
      </div>
    </>
  )
}

export default Pneuservis
