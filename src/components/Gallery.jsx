import '../styles/gallery.css'
import Card from "./Card";

const data = require('../datas/logements.json')

// TODO: Housing-details-container border-radius
// TODO: Responsive
export default function Gallery () {
    const renderCard = (id, title, src, description) => {
        return (
            <Card key={id} id={id} title={title} src={src} description={description}/>
        )
    }

    return (
        <section className="gallery-container">
            {
                data.map((value) => {
                    return renderCard(value.id, value.title, value.cover, value.description)
                })
            }
        </section>
    )
}