import image from '../assets/logo_footer.png'
import '../styles/footer.css'

export default function Footer () {
    return (
        <div className="footer">
            <img src={image}
                 alt="Logo de Kasa blanc sur fond noir, le premier A est représenté comme une maison."/>
            <p> &#9400; 2020 Kasa. All rights reserved.</p>
        </div>
    )
}