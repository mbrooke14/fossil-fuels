import CardGrid from "./components/cardgrid";
import Card from "./components/card";

export default function App() {
	return <CardGrid>
        <Card scalar={1}            unit="secondes" precision="1" cardname="Temps écoulé" />
        <Card scalar={1377}         unit="tonnes"   precision="0" cardname="CO₂ Globale"  />
        <Card scalar={1377 * 0.151} unit="tonnes"   precision="0" cardname="CO₂ Canada"   />
    </CardGrid>;
}
