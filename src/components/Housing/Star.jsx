import full_star from "../../assets/full-star.png";
import star from "../../assets/star.png";

import '../../styles/Housing/star.css'

export default function Star ({
                                  numberOfStars,
                                  starNumber
                              }) {

    const full = numberOfStars > starNumber;
    return (
        <img className="star" src={full ? full_star : star} alt={full ? 'Étoile pleine' : 'Étoile vide'}/>
    )
}