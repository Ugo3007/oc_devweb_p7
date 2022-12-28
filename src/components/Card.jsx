import '../styles/card.css'

export default function Card (props) {
    return (
        <div className="card">
            <div className="linear-gradiant"></div>
            <div className="card__image"></div>
            {/* Remplacer par une image quand on aura set les props*/}
            <div className="title"><h3>Titre de la location</h3></div>
        </div>
    )
}