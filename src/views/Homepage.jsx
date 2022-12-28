import Banner from "../components/Banner";
import '../styles/homepage.css'
import Gallery from "../components/Gallery";

export default function Homepage () {
    return (
        <div className="homepage">
            <Banner/>
            <Gallery/>
        </div>
    )
}