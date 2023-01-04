import '../../styles/Housing/thumbnail.css'

export default function Thumbnail (props) {
    return (
        <img className="thumb" src={props.src} alt={"Photo de profil de " + props.hostname}/>
    )
}