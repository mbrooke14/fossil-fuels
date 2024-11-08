import CardGrid from "./components/cardgrid";
import Card from "./components/card";

import "./app.css"

export default function App() {
	return <div id="content">
        <header>
            <h1 id="title">Émissions de CO₂ — Combustibles Fossiles</h1>
        </header>

        <main>
            <CardGrid>
                <Card scalar={1} unit="secondes" precision="1" cardname="Temps Écoulé" id="time" />

                <Card scalar={1377 * 0.91}                          unit="tonnes"   precision="0" cardname="CO₂ Globale"  />
                <Card scalar={1377 * 0.91 * 0.0151}                 unit="tonnes"   precision="0" cardname="CO₂ Canada"   />
                <Card scalar={1377 * 0.91 * 0.0151 / 8_000_000_000} unit="tonnes"   precision="7" cardname="CO₂ par personne (mondiale)"   />

                <Card scalar={1377 * 0.91 * 50}                  unit="USD" precision="0" cardname="Cout Globale" />
                <Card scalar={1377 * 0.91 * 0.0151 * 65}         unit="CAD" precision="0" cardname="Cout au Canada" />
                <Card scalar={1377 * 0.91 * 50 / 8_000_000_000 } unit="USD" precision="5" cardname="Cout par personne (mondiale)" />
            </CardGrid>
        </main>

        <footer>
            <p>Yann-Emmanuel Akadan et Matthew Brookes</p>
            <p>**Ceci est une estimation qui prends en considération des quantitées moyennes.**</p>
        </footer>
    </div>
}
