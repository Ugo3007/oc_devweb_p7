import '../styles/banner.css'

export default function Banner ({
                                    img_src,
                                    divText
                                }) {
    return (
        <div className="banner">
            <img src={img_src}
                 alt="La bannière, on peut y voir des montagnes et des affleurements rocheux de près et quelques arbres"/>
            <div>{divText}</div>
        </div>
    )
}