import '../styles/card.css'
import {Link} from "react-router-dom";

export default function Card (props) {
    return (
        <article className="card">
            <Link to={'/logement/' + props.id}>
                <div className="linear-gradiant"></div>
                <img src={props.src} className="card__image" alt={props.description}/>
                <div className="title"><h3>{props.title}</h3></div>
            </Link>
        </article>
    )
}