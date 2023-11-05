import { useLocation } from "react-router-dom"
import Hero from "../../components/Hero/Hero"
import { useEffect } from "react"

function Autoservis() {
  let location = useLocation()

  useEffect(() => {
    if (
      location.hash === "#servis" ||
      location.hash === "#klempirna" ||
      location.hash === "#lakovna" ||
      location.hash === "#klimatizace" ||
      location.hash === "#montaze" ||
      location.hash === "#stkemise"
    ) {
      const elem = document.querySelector(`${location.hash}`)
      elem.scrollIntoView({ block: "start" })
    }
  }, [location])

  return (
    <section>
      <Hero title={"Autoservis"} img={"autoservis"} id={"servis"} />
      <div className="wrapper wrapper-block text-formating text-spacer">
        <p>
          Náš autoservis vám nabízí kompletní služby pod jednou střechou –
          mechanické, karosářské i lakýrnické práce, diagnostiku vozidel,
          čištění a servis klimatizací, montáže tažných zařízení, seřizování
          geometrie a mnoho dalších služeb.
        </p>
        <p>
          <strong>
            Opravujeme automobily osobní i užitkové, všech značek a jakéhokoliv
            stáří.
          </strong>
          Záleží nám na vašem přání, a proto používáme jak originální díly, tak
          díly neoriginální renomovaných a kvalitních dodavatelů.
        </p>
        <div className="text-block">
          <p>
            • pravidelné servisní prohlídky předepsané a doporučené výrobcem
            vozidla a potvrzení servisní knížky
          </p>
          <p>• výměna olejů, filtrů a provozních kapalin </p>
          <p>• oprava motorů, výměny rozvodových řemenů a kladek </p>
          <p>
            • oprava převodovek manuálních, opravy diferenciálů a rozvodovek
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
      <Hero title={"Klempírna"} img={""} id="klempirna" />
      <div className="wrapper wrapper-block text-formating text-spacer">
        <p>
          Na drobnější <strong>karosářské práce</strong> (promáčklé dveře či
          blatníky) používáme soupravu pro opravy karosérií se spotovacím
          přístrojem a repasním kladivem, která umožňuje rychlé a efektivní
          vyrovnání různých promáčklin na ocelových i hliníkových karosériích
          bez demontáže poškozených dílů. Souprava má navíc funkci elektrického
          prohřívání plechu, jež zaručuje, že opravovaný materiál neztrácí své
          prvotní vlastnosti a tím nedochází k jeho předčasné korozi.
        </p>
        <p>
          Na rozsáhlejší <strong>opravy karosérií</strong> lehkých a užitkových
          vozidel do hmotnosti 2500 kg používáme rovnací stolici včetně měřícího
          systému.
        </p>
      </div>
      <Hero title={"Lakovna"} img={"lakovna"} id="lakovna" />
      <div className="wrapper wrapper-block text-formating text-spacer">
        <p>
          V naší lakovně zajišťujeme{" "}
          <strong>kompletní profesionální lakýrnické práce</strong> – lakování
          jednotlivých dílů i celého vozu.
        </p>
        <p>
          Používáme pouze kvalitní premiový lakovací materiál značky Glasurit +
          RM
        </p>
        <p>
          Ztratil-li váš vůz atraktivní lesklý vzhled, zajišťujeme i leštění
          karoserie!
        </p>
        <p>Veškeré práce provádíme na osobních i užitkových automobilech. </p>
      </div>
      <Hero title={"Čištění a servis klimatizací"} id={"klimatizace"} />
      <div className="wrapper wrapper-block text-formating text-spacer">
        <p>
          Klimatizace vyžaduje stejnou profesionální péči jako jakákoliv jiná
          část vašeho vozu.
        </p>
        <p>
          U nás vaši klimatizaci vyčistíme, opravíme a doplníme chladivem i pro
          nejnovější vozy.
        </p>
        <h2>Plnění klimatizace</h2>
        <div className="text-block">
          <h3>V rámci základního servisu klimatizace provedeme: </h3>
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
          <p>• zkoušku funkčnosti klimatizace</p>

          <h3>Volitelné dodatečné služby </h3>
          <p>• doplnění UV kontrastní látky do chladiva </p>
          <p>• dezinfekce klimatizace ultrazvukovým přístrojem</p>
          <p>• výměna kabinového filtru</p>
        </div>
      </div>
      <Hero title={"Montáže tažných zařízení"} id={"montaze"} />
      <div className="wrapper wrapper-block text-formating text-spacer">
        <p>
          Provádíme certifikovanou <strong>montáž tažných zařízení</strong>{" "}
          značek SVC, BOSAL a dalších, včetně univerzální nebo typové
          elektroinstalace, a to na veškerá osobní i užitková vozidla.
        </p>
        <p>
          Tažná zařízení těchto značek <strong>montujeme</strong> v rámci{" "}
          <strong>jednoho dne</strong>. K tažnému zařízení obdržíte typový list
          a certifikát o odborné montáži, který je nezbytný pro přihlášení na
          dopravním inspektorátu.
        </p>
      </div>
      <Hero title={"Zajištění STK a emisí"} id={"stkemise"} />
      <div className="wrapper wrapper-block text-formating text-spacer">
        <div className="text-block">
          <h2>Příprava na STK</h2>
          <p>
            Prověříme funkčnost a bezpečnost všech systémů – od brzd až po
            světla. Po domluvě s vámi odstraníme případné nedostatky či doplníme
            povinnou výbavu vozu, aby STK proběhla bez jakýchkoliv komplikací.
          </p>
        </div>
        <div className="text-block">
          <h2>Zajištění STK a emisí</h2>
          <p>
            Svůj vůz přivezete k nám do autoservisu spolu s potřebnými doklady:
          </p>
          <p>• velký technický průkaz</p>
          <p>• malý technický průkaz</p>
          <p>• zelená karta (pojištění)</p>
        </div>
        <div className="text-block">
          <h2>Připomínka STK</h2>
          <p>
            Pokud pravidelně zapomínáte na termín ukončení vaší STK, svěřte se
            kompletně do naší péče a <strong>my se postaráme</strong> o to, aby
            vám <strong>technická již nikdy nepropadla!</strong> Naše stálé
            zákazníky před uplynutím platnosti STK vždy v dostatečném předstihu
            kontaktujeme.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Autoservis
