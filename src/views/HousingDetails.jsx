import '../styles/housing_details.css'
import Contact from "../components/Housing/Contact";

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
                <section className="column">
                    <h2>Coucou</h2>
                    {/* TODO: Tag list */}
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