import Hero from "../../components/Hero/Hero"

function ONas() {
  return (
    <>
      <Hero title={"O nás"} img={""} />
      <div className="wrapper wrapper-block text-spacer text-formating">
        <h3>Kdo jsme a co nabízíme?</h3>
        <p>Potřebujete opravit váš osobní či užitkový vůz nebo zajistit jeho pravidelný servis? Zastavte se u nás! Jsme autoservis s téměř 30letou tradicí.</p>

        <div className="text-block">
          <h3>Nabízíme vše, co váš automobil potřebuje:</h3>
          <p>• mechanické, karosářské a lakýrnické práce</p>
          <p>• opravy klimatizací</p>
          <p>• montáž tažných zařízení</p>
          <p>• příprava vozů na STK včetně kompletní realizace</p>
          <p>• kompletní pneuservis</p>
          <p>• seřizování geometrie</p>
          <p>• likvidace pojistných událostí včetně výměny autoskel</p>
          <p>• čištění vozů</p>
          <p>• možnost zapůjčení náhradního vozu</p>
          <p>• a mnoho dalšího</p>
        </div>
        <div className="text-block">
          <h3>Profesionální přístup</h3>
          <p>Za uplynulých třicet let jsme získali spoustu zkušeností a používáme jen ty <strong>nejmodernější technologie</strong>.</p>
          <p>Váš vůz si vezmeme pod ochranná křídla a poskytneme mu tu nejlepší péči.</p>
          <p>Po provedeném servisu vám podáme informaci o aktuálním stavu vozidla a <strong>poskytneme další doporučující kroky či nutnost opravy</strong> (výměna oleje, opotřebení brzd, výměna pneumatik atd.).</p>
        </div>
        <div className="text-block">
          <h3>Nezáleží na značce, stáří vozu ani lokalitě!</h3>
          <p>Opravujeme vozy <strong>všech značek a stáří</strong>. Zajistíme pro vás opravu či pravidelný servis s maximální odbornou péčí.</p>
        </div>
        <div className="text-block">
          <h3>Naše partnerské pojišťovny</h3>
          <p>Jsme smluvním partnerem pojišťoven <strong>ČPP, Kooperativa</strong>. Díky tomu můžeme likvidovat pojistné události bez vaší finanční účasti a vyřídit všechny potřebné dokumenty s pojišťovnou za vás. Kalkulace pro výpočet škod je prováděna pomocí systému schváleným pojišťovnami.</p>
          <p>Máte sjednané havarijní pojištění u některé z jiných pojišťoven? Ani to pro nás není překážkou! I za vás vyřídíme veškerou komunikaci a potřebnou dokumentaci s pojišťovnou, včetně prohlídky technikem (i zde bez finanční účasti).</p>
        </div>
      </div>
    </>
  )
}

export default ONas