import Banner from "../components/Banner";
import '../styles/homepage.css'
import Gallery from "../components/Gallery";

import banner_image from "../assets/banner.png";

export default function Homepage () {
    return (
        <div className="homepage">
            <Banner img_src={banner_image} divText='Chez vous, /partout et ailleurs'/>
            <Gallery/>
        </div>
    )
}