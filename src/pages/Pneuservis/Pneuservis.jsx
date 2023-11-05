import Hero from "../../components/Hero/Hero"

function Pneuservis() {
  return (
    <section>
      <Hero title={"Pneuservis"} img={"pneuservis"} />
      <div className="wrapper wrapper-block text-formating text-spacer">
        <p><strong>Správné přezutí a vyvážení kol je základem bezpečné jízdy!</strong></p>
        <p>
          Naše zouvací a nazouvací zařízení se postará o osobní i dodávková vozidla.<br/>
          Nezapomínáme ani na geometrii vozu, kterou vám na požádání při výměně
          pneumatik změříme, případně seřídíme!
        </p>

        <div className="text-block">
          <h2>Služby pneuservisu</h2>
          <p>• prodej nových tuzemských i zahraničních pneumatik a disků (aluminiových i plechových)</p>
          <p>• prodej příslušenství ke kolům – šrouby, matice, poklice atd.</p>
          <p>• demontáže, montáže, vyvažování pneumatik pro vozidla osobní, SUV, OFFROAD, 4×4, LT do 3,5 t</p>
          <p>• přezouvání nízkoprofilových pneumatik a pneumatik typu RUNonFLAT – speciálních dojezdových pneu bez montážní páky</p>
          <p>• očištění a konzervace dosedací plochy nábojů kol speciálním konzervačním přípravkem</p>
          <p>• dotažení kol momentovým klíčem na předepsanou hodnotu</p>
          <p>• sezónní uskladnění pneumatik</p>
          <p>• ekologická likvidace starých pneumatik</p>
        </div>
      </div>
    </section>
  )
}

export default Pneuservis
