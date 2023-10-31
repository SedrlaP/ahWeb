import Hero from "../../components/Hero/Hero"
import "./pojistneu.css"


function PojistneUdalosti() {
  return (
    <>
      <Hero title={"Pojistné události"} img={"pojistneudalosti"} />
      <div className="wrapper wrapper-block text-formating text-spacer">
        <p>Měli jste dopravní nehodu?</p>
        <p>
          Nezoufejte, <strong>poradíme vám, jak postupovat</strong> a <strong>pojistnou událost kompletně
          vyřídíme</strong> s našimi smluvními i nesmluvními pojišťovnami za vás!
        </p>

        <div className="partner">Jsme smluvním partnerem pojištovny KOOPERATIVA a ČPP 
          <div className="partner__logo">
            <img src="./src/assets/logo-koop.svg" alt="kooperativa logo" style={{"max-width":"200px"}}/>
            <img src="./src/assets/logo-cpp.svg" alt="čpp logo" />
          </div>
        </div>
        <div className="text-block">
          <h3>Co zařídíme:</h3>
          <p>
            • v případě havárie a pojistné události za Vás <strong>vyřídíme veškeré
            jednání</strong> s pojišťovnou.
          </p>
          <p>• zajistíme odtah vašeho poškozeného vozu</p>
          <p>
            • <strong>kompletně opravíme a nalakujeme</strong> poškozené díly dle doporučených
            technologických postupů výrobce zaručujících kvalitu opravy a
            bezpečnost Vaší jízdy.
          </p>
          <p>
            • po dobu opravy vám můžeme zapůjčit náhradní vozidlo,takže
            zůstanete mobilní.
          </p>
          <p>
            • zajistíme prohlídku Vašeho poškozeného vozidla technikem
            pojišťovny. Všechny faktury pojišťovně dokládáme výpočtem v odborném
            expertním systému.
          </p>
        </div>
        <div className="text-block">
            <p>
            Vyřízení pojistných událostí se neobejde bez dodání nutných
            dokladů.
            </p>
          </div>
        <h2>Co od vás budeme potřebovat? </h2>
        <div className="divide">
        <div className="text-block">
          <h3>Poškozený:</h3>
          <p>• velký a malý technický průkaz </p>
          <p>• řidičský průkaz </p>
          <p>• záznam o nehodě (pokud byl sepsán účastníky nehody) </p>
          <p>• záznam od policie (pokud byla k nehodě přivolána) </p>
          <p>
            • leasingovou/úvěrovou smlouvu (v případě, že vozidlo je na
            leasing/úvěr)
          </p>
        </div>
        <div className="text-block">
          <h3>Viník:</h3>
          <p>• velký a malý technický průkaz</p>
          <p>• řidičský průkaz </p>
          <p>• pojistnou smlouvu</p>
          <p>• záznam o nehodě (pokud byl sepsán účastníky nehody) </p>
          <p>• záznam od policie (pokud byla k nehodě přivolána) </p>
          <p>
            • leasingovou/úvěrovou smlouvu (v případě, že vozidlo je na
            leasing/úvěr)
          </p>
        </div>
        </div>
        <div className="text-block">
          <h3>Připojištěné čelní sklo: </h3>
          <p>• velký a malý technický průkaz </p>
          <p>• řidičský průkaz </p>
          <p>• pojistnou smlouvu </p>
          <p>
            • leasingovou/úvěrovou smlouvu (v případě, že vozidlo je na
            leasing/úvěr)
          </p>
        </div>
        <p>Můžete si stáhnout formulář v pdf <a href="https://www.autocentrum.cz/data/File/2017/servis/specialista_oprav/formular-o-nehode.pdf" target="_blank" >Záznam o dopravní nehodě</a></p>
      </div>
    </>
  )
}

export default PojistneUdalosti
