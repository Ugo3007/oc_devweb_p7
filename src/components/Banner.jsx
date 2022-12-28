import '../styles/banner.css'
import banner_image from '../assets/banner.png'

export default function Banner () {
    return (
        <div className="banner">
            <img src={banner_image}
                 alt="La bannière, on peut y voir des montagnes et des affleurements rocheux de près et quelques arbres"/>
            <div>Chez vous, partout et ailleurs</div>
        </div>
    )
}