import '../styles/gallery.css'
import Card from "./Card";

const data = require('../datas/logements.json')

export default function Gallery () {
    // TODO: RenderCard Function
    const renderCard = (title, src, description) => {
        return (
            <Card title={title} src={src} description={description}/>
        )
    }
    // TODO: RenderCard Function

    return (
        <div className="gallery-container">
            {
                data.forEach((value) => {
                    renderCard(value.title, value.cover, value.description)
                })
            }
            <Card title={data[0].title} src={data[0].cover} description={data[0].description}/>
            <Card title={data[1].title} src={data[1].cover} description={data[1].description}/>
            <Card title={data[2].title} src={data[2].cover} description={data[2].description}/>
            <Card title={data[0].title} src={data[0].cover} description={data[0].description}/>
            <Card title={data[1].title} src={data[1].cover} description={data[1].description}/>
            <Card title={data[2].title} src={data[2].cover} description={data[2].description}/>
            <Card title={data[0].title} src={data[0].cover} description={data[0].description}/>
            <Card title={data[1].title} src={data[1].cover} description={data[1].description}/>
            <Card title={data[2].title} src={data[2].cover} description={data[2].description}/>
        </div>
    )
}