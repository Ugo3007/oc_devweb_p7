import '../styles/card.css'

export default function Card (props) {
    return (
        <div className="card">
            <div className="linear-gradiant"></div>
            <img src={props.src} className="card__image" alt={props.description}/>
            {/* Remplacer par une image quand on aura set les props*/}
            <div className="title"><h3>{props.title}</h3></div>
        </div>
    )
}