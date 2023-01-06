import '../styles/housing_details.css'
import Contact from "../components/Housing/Contact";
import Tag from "../components/Housing/Tag";
import Rating from "../components/Housing/Rating";
import Collapsible from "../components/Housing/Collapsible";
import Carousel from "../components/Carousel";


export default function HousingDetails () {
    const data = require('../datas/logements.json')
    const obj = data.find(o => o.id === window.location.pathname.split('/')[2])
    return (
        <div className="housing-details-container">
            <Carousel img={obj.pictures}/>


            <div className="row first-row">
                <div className="column column1">
                    <div>
                        <h2>{obj.title}</h2>
                        <p>{obj.location}</p>
                    </div>
                    <Tag tagname={obj.tags}/>
                </div>
                <div className="column column2">
                    <Contact src={obj.host.picture} hostname={obj.host.name}/>
                    <Rating numberOfStars={obj.rating}/>
                </div>
            </div>
            <div className="row">
                <Collapsible collapsibleTitle="Description" collapsibleContent={obj.description}/>
                <Collapsible collapsibleTitle="Équipements" collapsibleContent={obj.equipments}/>
            </div>
        </div>
    )
}