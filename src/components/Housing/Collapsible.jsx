import '../../styles/Housing/collapsible.css'
import React, {useState} from "react";


export default function Collapsible ({
                                         collapsibleTitle,
                                         collapsibleContent
                                     }) {
    const [classname, setClassname] = useState('blockDisplayed')

    let content = ""

    if (collapsibleTitle === 'Description') {
        content = (
            <div className={classname}>
                <p>{collapsibleContent}</p>
            </div>
        )
    } else if (collapsibleTitle === 'Équipements') {
        content = (
            <div className={classname}>
                <ul>
                    <li>{collapsibleContent[0]}</li>
                    <li>{collapsibleContent[1]}</li>
                    <li>{collapsibleContent[2]}</li>
                </ul>
            </div>
        )
    }

    const handleClick = () => {
        classname === 'notDisplayed' ? setClassname('blockDisplayed') : setClassname('notDisplayed')
    }

    return (
        <div className="collapsible-container">
            <button type="button" className="collapsible" onClick={handleClick}>{collapsibleTitle}</button>
            {content}
        </div>

    )
}