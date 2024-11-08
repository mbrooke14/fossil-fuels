import CardGrid from "./components/cardgrid";
import Card from "./components/card";

import "./app.css"

const POP = 8_000_000_000

const TON_ANNUAL = 35_000_000_000
const TON_SECOND = TON_ANNUAL / 365 / 24 / 60 / 60

const CAN_CONTRB = 0.0151

const AVR_COST = 50 // USD
const CAN_COST = 65 // CAD

export default function App() {
	return <div id="content">
        <header>
            <h1 id="title">Émissions de CO₂ — Combustibles Fossiles</h1>
        </header>

        <main>
            <CardGrid>
                <Card scalar={TON_SECOND}                           unit="tonnes" precision="0" cardname="CO₂ Globale"  />
                <Card scalar={TON_SECOND * CAN_CONTRB}              unit="tonnes" precision="0" cardname="CO₂ Canada"   />
                <Card scalar={TON_SECOND * CAN_CONTRB / POP * 1000} unit="kg"     precision="7" cardname="CO₂ par personne (mondiale)"   />

                <Card scalar={TON_SECOND * AVR_COST}              unit="USD" precision="0" cardname="Cout Globale" />
                <Card scalar={TON_SECOND * CAN_CONTRB * CAN_COST} unit="CAD" precision="0" cardname="Cout au Canada" />
                <Card scalar={TON_SECOND * AVR_COST / POP}        unit="USD" precision="5" cardname="Cout par personne (mondiale)" />

                <Card scalar={1} unit="secondes" precision="1" cardname="Temps Écoulé" id="time" />
            </CardGrid>
        </main>

        <footer>
            <p>Yann-Emmanuel Akadan et Matthew Brookes</p>
            <p>**Ceci est une estimation qui prends en considération des quantitées moyennes.**</p>
        </footer>
    </div>
}
