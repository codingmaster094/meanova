import React from "react";

const page = () => {
  return (
    <div className="pagecontent">
      <div className="container">
        <h1>Impressum</h1>

        <div className="company-info">
          <h2>MeaNova GmbH</h2>

          <div className="contact-info">
            <p>
              Salzstraße 8
              <br />
              85622 Feldkirchen
              <br />
              Deutschland
            </p>
          </div>

          <h4>Vertreten durch:</h4>
          <p>Geschäftsführerin: Laura Marie Fies</p>

          <h4>Kontakt:</h4>
          <p>
            Telefon: 089 189659820
            <br />
            E-Mail: <a href="mailto:info@meanova.de">info@meanova.de</a>
          </p>

          <h4>Registereintrag:</h4>
          <p>
            Eintragung im Handelsregister.
            <br />
            Registergericht: Amtsgericht München
            <br />
            Registernummer: HRB 305746
          </p>

          <h4>Umsatzsteuer-ID:</h4>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: <em>in Vergabe</em>.
          </p>

          <h4>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</h4>
          <p>Laura Marie Fies, Anschrift wie oben.</p>
        </div>

        <div className="section">
          <h3>Verbraucherstreitbeilegung / OS-Plattform</h3>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
            (OS) bereit:
            <br />
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr
            </a>
          </p>
          <p>
            Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen. Unsere E-Mail-Adresse findest du oben.
          </p>
        </div>

        <div className="section">
          <h3>Haftung für Inhalte</h3>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir als Diensteanbieter sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
            </p>
            <p>Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
        </div>

        <div className="section">
          <h3>Haftung für Links</h3>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
            übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich. Rechtswidrige Inhalte waren zum Zeitpunkt der
            Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten
            ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
            Bekanntwerden von Rechtsverletzungen entfernen wir derartige Links umgehend.
          </p>
        </div>

        <div className="section">
          <h3>Urheberrecht</h3>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung der jeweiligen
            Urheberin bzw. des jeweiligen Urhebers. Downloads und Kopien dieser Seite sind nur für
            den privaten, nicht kommerziellen Gebrauch gestattet, sofern nicht anders angegeben.
          </p>
        </div>
      </div>
    </div>
  );
}


export default page;