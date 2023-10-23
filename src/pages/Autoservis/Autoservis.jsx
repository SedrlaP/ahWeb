import Hero from "../../components/Hero/Hero"

function Autoservis() {
  return (
    <>
      <div className="hero">
        <h2 className="hero__title">Autoservis</h2>
        <img className="hero__img" src={`./assets/autoservis.png`} />
      </div>
      <div className="wrapper wrapper-block text-formating text-spacer">
        <p>
          Náš autoservis vám nabízí kompletní služby pod jednou střechou –
          mechanické, karosářské i lakýrnické práce, diagnostiku vozidel,
          čištění a servis klimatizací, montáže tažných zařízení, seřizování
          geometrie a mnoho dalších služeb.
        </p>
        <p>
          Opravujeme automobily osobní i užitkové, všech značek a jakéhokoliv
          stáří. Záleží nám na vašem přání, a proto používáme jak originální
          díly, tak díly neoriginální renomovaných a kvalitních dodavatelů.
        </p>
        <div className="text-block">
          <p>
            • pravidelné servisní prohlídky předepsané a doporučené výrobcem
            vozidla a potvrzení servisní knížky
          </p>
          <p>• výměna olejů, filtrů a provozních kapalin </p>
          <p>• oprava motorů, výměny rozvodových řemenů a kladek </p>
          <p>
            • oprava převodovek manuálních a automatických, opravy diferenciálů
            a rozvodovek
          </p>
          <p>• výměna spojkových sad a setrvačníků • výměny dílů podvozku </p>
          <p>• oprava brzd a výměna brzdové kapaliny </p>
          <p>• měření a seřízení geometrie náprav </p>
          <p>• opravy a výměny výfuků, katalyzátorů, čištění DPF filtrů </p>
          <p>
            • elektrosoučásti: opravy a výměny startérů a alternátorů,
            zapalování, žhavení, akumulátory a ostatní
          </p>
          <p>• opravy palivových soustav: čerpadla, vstřikovače a vedení </p>
          <p>• diagnostika řídicích jednotek vozidel všech značek </p>
          <p>• výměna autoskel</p>
          <p>• montáž tažných zařízení </p>
        </div>
      </div>
      <div className="hero">
        <h2 className="hero__title">Lakovna</h2>
        <img className="hero__img" src={`./assets/lakovna.png`} />
      </div>
      <div className="wrapper wrapper-block text-formating text-spacer">
        <p>
          V naší lakovně zajišťujeme kompletní profesionální lakýrnické práce –
          lakování jednotlivých dílů i celého vozu.
        </p>
        <p>
          Ztratil-li váš vůz atraktivní lesklý vzhled, zajišťujeme i leštění
          karoserie!
        </p>
        <p>Veškeré práce provádíme na osobních i užitkových automobilech. </p>
      </div>
      <Hero title={"Čištění a servis klimatizací"} />
      <div className="wrapper wrapper-block text-formating text-spacer">
        <p>
          Klimatizace vyžaduje stejnou profesionální péči jako jakákoliv jiná
          část vašeho vozu.
        </p>
        <p>
          U nás vaši klimatizaci vyčistíme, opravíme a doplníme chladivem i pro
          nejnovější vozy.
        </p>
        <div className="text-block">
          <h4>V rámci základního servisu klimatizace provedeme: </h4>
          <p>• odsátí a recyklace starého chladiva ze systému klimatizace </p>
          <p>
            • zbavení mechanických nečistot a vlhkosti vakuací chladicího
            systému
          </p>
          <p>
            • kontrolu těsnosti okruhu autoklimatizace (opravu okruhu v případě
            detekce úniků chladiva)
          </p>
          <p>• tlakové zkoušky jednotlivých částí okruhu klimatizace </p>
          <p>• plnění okruhu speciálním olejem </p>
          <p>• plnění okruhu autoklimatizace chladivem R134a nebo 1234yf </p>
          <p>• zkoušku funkčnosti klimatizace Volitelné dodatečné služby </p>
          <p>• doplnění UV kontrastní látky do chladiva </p>
          <p>
            • dezinfekce klimatizace ultrazvukovým přístrojem značky
            MagnetiMareli
          </p>
          <p>• výměna kabinového filtru</p>
        </div>
      </div>
    </>
  )
}

export default Autoservis
