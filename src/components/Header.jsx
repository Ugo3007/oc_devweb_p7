import '../styles/header.css'
import logo from '../assets/logo_header.png'

export default function Header () {
    return (
        <header className="main-header">
            <img src={logo} alt="Logo du header de Kasa, écrit en rouge avec à la place du premier A une maison."/>
            <nav>
                <ul>
                    {/* TODO : React Router Link*/}
                    <li>
                        Accueil
                    </li>
                    {/* TODO : React Router Link*/}
                    <li>À propos</li>
                </ul>
            </nav>
        </header>
    )
}