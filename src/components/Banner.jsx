import '../styles/banner.css'

export default function Banner ({
                                    img_src,
                                    divText
                                }) {

    const texts = divText.split('/')
    return (
        <div className="banner">
            <img src={img_src}
                 alt="La bannière, on peut y voir des montagnes et des affleurements rocheux de près et quelques arbres"/>
            <div>
                <p>{texts[0]}</p>
                <p>{texts[1]}</p>
            </div>
        </div>
    )
}