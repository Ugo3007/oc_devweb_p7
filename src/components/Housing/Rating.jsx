import '../../styles/Housing/rating.css'
import Star from "./Star";

export default function Rating ({numberOfStars}) {
    return (
        <div className="rating">
            <Star numberOfStars={numberOfStars} starNumber="0"/>
            <Star numberOfStars={numberOfStars} starNumber="1"/>
            <Star numberOfStars={numberOfStars} starNumber="2"/>
            <Star numberOfStars={numberOfStars} starNumber="3"/>
            <Star numberOfStars={numberOfStars} starNumber="4"/>
        </div>
    )
}