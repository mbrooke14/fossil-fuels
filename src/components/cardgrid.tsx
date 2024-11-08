import "./cardgrid.css"

export default function CardGrid({ children }: {[key: string]: any}) {
    return <div className="card-grid">{children}</div>
}
