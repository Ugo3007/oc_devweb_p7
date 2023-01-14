import '../styles/housing_details.css'
import Contact from "../components/Housing/Contact";
import Tag from "../components/Housing/Tag";
import Rating from "../components/Housing/Rating";
import Collapsible from "../components/Housing/Collapsible";
import Carousel from "../components/Carousel";
import {Navigate} from "react-router-dom";

export default function HousingDetails () {
    const data = require('../datas/logements.json')
    const obj = data.find(o => o.id === window.location.pathname.split('/')[2])
    if (obj !== undefined) {
        obj.map((value) => {
            return (
                <div className="housing-details-container">
                    <Carousel img={value.pictures}/>
                    <div className="row first-row">
                        <div className="column column1">
                            <div>
                                <h2>{value.title}</h2>
                                <p>{value.location}</p>
                            </div>
                            <Tag tagname={value.tags}/>
                        </div>
                        <div className="column column2">
                            <Contact src={value.host.picture} hostname={value.host.name}/>
                            <Rating numberOfStars={value.rating}/>
                        </div>
                    </div>
                    <div className="row">
                        <Collapsible collapsibleTitle="Description" collapsibleContent={value.description}/>
                        <Collapsible collapsibleTitle="Équipements" collapsibleContent={value.equipments}/>
                    </div>
                </div>
            )
        })
    } else {
        return <Navigate to="/error-page" replace/>
    }
}