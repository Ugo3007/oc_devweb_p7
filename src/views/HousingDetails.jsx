import '../styles/housing_details.css'
import Contact from "../components/Housing/Contact";
import Tag from "../components/Housing/Tag";

const data = require('../datas/logements.json')
export default function HousingDetails () {
    return (
        <div className="housing-details-container">
            {/* TODO: Carousel */}
            <div className="row">
                <section className="column">
                    <h2>{data[0].title}</h2>
                    <p>{data[0].location}</p>
                </section>
                <section className="column">
                    <Contact src={data[0].cover} hostname={data[0].host.name}/>
                </section>
            </div>
            <div className="row">
                <section className="column-row">
                    <Tag tagname={data[0].tags[0]}/>
                    <Tag tagname={data[0].tags[1]}/>
                </section>
                <section className="column">
                    {/* TODO: Notation */}
                </section>
            </div>
            <div className="row">
                {/* TODO: Burger 1 = Description */}
                {/* TODO: Burger 2 = Equipements */}
            </div>
        </div>
    )
}