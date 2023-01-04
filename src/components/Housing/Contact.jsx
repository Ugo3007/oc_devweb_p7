import Thumbnail from "./Thumbnail";
import '../../styles/Housing/contact.css'

export default function Contact ({
                                     src,
                                     hostname
                                 }) {
    return (
        <div className="contact">
            <p>{hostname}</p>
            <Thumbnail src={src} hostname={hostname}/>
        </div>
    )
}