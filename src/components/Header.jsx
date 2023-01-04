import '../styles/header.css'
import logo from '../assets/logo_header.png'
import {Link} from "react-router-dom";

export default function Header () {
    return (
        <header className="main-header">
            <img src={logo} alt="Logo du header de Kasa, écrit en rouge avec à la place du premier A une maison."/>
            <nav>
                <ul>
                    <li><Link className='link' to='/'>Accueil</Link></li>
                    <li><Link className='link' to='/a-propos'>A propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}