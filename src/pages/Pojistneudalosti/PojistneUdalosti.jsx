import Hero from "../../components/Hero/Hero"

function PojistneUdalosti() {
  return (
    <>
      <Hero
        title={"Pojistné události"}
        img={"./src/assets/pojistneudalosti.png"}
      />
      <div className="wrapper wrapper-block text-formating text-spacer">
        <p>Měli jste dopravní nehodu?</p>
        <p>
          Nezoufejte, poradíme vám, jak postupovat a pojistnou událost kompletně
          vyřídíme s našimi smluvními i nesmluvními pojišťovnami za vás!
        </p>
        <div className="text-block">
          <h4>Co zařídíme:</h4>
          <p>
            • V případě havárie a pojistné události za Vás vyřídíme veškeré
            jednání s pojišťovnou.
          </p>
          <p>
            • Kompletně opravíme a nalakujeme poškozené díly dle doporučených
            technologických postupů výrobce zaručujících kvalitu opravy a
            bezpečnost Vaší jízdy.
          </p>
          <p>
            • Po dobu opravy vám můžeme zapůjčit náhradní vozidlo,takže
            zůstanete mobilní.
          </p>
          <p>
            • Zajistíme prohlídku Vašeho poškozeného vozidla technikem
            pojišťovny. Všechny faktury pojišťovně dokládáme výpočtem v odborném
            expertním systému.
          </p>
          <p>
            • Jsme smluvním partnerem pojišťovny KOOPERATIVA a ČPP. Potřebné
            doklady Vyřízení pojistných událostí se neobejde bez dodání nutných
            dokladů.
          </p>
        </div>
        <h3>Co od vás budeme potřebovat? </h3>

        <div className="text-block">
          <h4>Poškozený:</h4>
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
          <h4>Viník:</h4>
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
        <div className="text-block">
          <h4>Připojištěné čelní sklo: </h4>
          <p>• velký a malý technický průkaz </p>
          <p>• řidičský průkaz </p>
          <p>• pojistnou smlouvu </p>
          <p>
            • leasingovou/úvěrovou smlouvu (v případě, že vozidlo je na
            leasing/úvěr)
          </p>
        </div>
        <p>Můžete si stáhnout formulář v pdf Záznam o dopravní nehodě</p>
      </div>
    </>
  )
}

export default PojistneUdalosti
