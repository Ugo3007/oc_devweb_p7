import Banner from "../components/Banner";
import '../styles/homepage.css'
import Card from "../components/Card";

export default function Homepage () {
    return (
        <div className="homepage">
            <Banner/>
            <Card/>
        </div>
    )
}