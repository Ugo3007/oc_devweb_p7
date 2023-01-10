import '../styles/header.css'
import logo from '../assets/logo_header.png'
import {NavLink} from "react-router-dom";

export default function Header () {
    let activeStyle = {
        textDecoration: 'underline'
    }
    return (
        <header className="main-header">
            <img src={logo} alt="Logo du header de Kasa, écrit en rouge avec à la place du premier A une maison."/>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to='/'
                            className='link'
                            style={({isActive}) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/a-propos'
                            className='link'
                            style={({isActive}) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            A propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}