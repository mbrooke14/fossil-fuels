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
                <Card scalar={1}                    unit="secondes" precision="1" cardname="Temps Écoulé" />
                <Card scalar={1377 * 0.91}          unit="tonnes"   precision="0" cardname="CO₂ Globale"  />
                <Card scalar={1377 * 0.91 * 0.0151} unit="tonnes"   precision="0" cardname="CO₂ Canada"   />
            </CardGrid>
        </main>

        <footer>
            <p>Yann-Emmanuel Akadan et Matthew Brookes</p>
        </footer>
    </div>
}
