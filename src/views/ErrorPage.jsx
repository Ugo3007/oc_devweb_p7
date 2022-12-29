import Header from "../components/Header";
import Footer from "../components/Footer";

import '../styles/error_page.css'
import error_logo from "../assets/error_page.png";

export default function ErrorPage () {
    return (
        <div className="error_page">
            <Header/>
            <div className="main-container">
                <img src={error_logo} alt="Logo 404, qui signifie que nous sommes arrivés sur une page d'erreur."/>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <p>Retourner sur la page d'accueil</p>
            </div>
            <Footer/>
        </div>
    )
}