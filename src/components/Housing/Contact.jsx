import Thumbnail from "./Thumbnail";
import '../../styles/Housing/contact.css'

export default function Contact ({
                                     src,
                                     hostname
                                 }) {
    const hostnames = hostname.split(' ')
    return (
        <div className="contact">
            <p>{hostnames[0]} <br/> {hostnames[1]}</p>
            <Thumbnail src={src} hostname={hostname}/>
        </div>
    )
}