import '../styles/housing_details.css'
import Contact from "../components/Housing/Contact";
import Tag from "../components/Housing/Tag";
import Rating from "../components/Housing/Rating";
import Collapsible from "../components/Housing/Collapsible";
import Carousel from "../components/Carousel";


const data = require('../datas/logements.json')
export default function HousingDetails () {
    return (
        <div className="housing-details-container">
            <Carousel img={data[0].pictures}/>
            <div className="row">
                <section className="column">
                    <h2>{data[0].title}</h2>
                    <p>{data[0].location}</p>
                </section>
                <section className="column">
                    <Contact src={data[0].host.picture} hostname={data[0].host.name}/>
                </section>
            </div>
            <div className="row">
                <section className="column-row">
                    <Tag tagname={data[0].tags[0]}/>
                    <Tag tagname={data[0].tags[1]}/>
                </section>
                <section className="column">
                    <Rating numberOfStars={data[0].rating}/>
                </section>
            </div>
            <div className="row">
                <Collapsible collapsibleTitle="Description" collapsibleContent={data[0].description}/>
                <Collapsible collapsibleTitle="Équipements" collapsibleContent={data[0].equipments}/>
            </div>
        </div>
    )
}