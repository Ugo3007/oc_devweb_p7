import '../styles/housing_details.css'

export default function HousingDetails (props) {
    return (
        <div className="housing-details-container">
            {/* TODO: Carousel */}
            <div className="row">
                <section className="column">
                    <h2>{props.title}</h2>
                    <p>{props.location}</p>
                </section>
                <section className="column">
                    {/* TODO: Contact */}
                </section>
            </div>
            <div className="row">
                <section className="column">
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