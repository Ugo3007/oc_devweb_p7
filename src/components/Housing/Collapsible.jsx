import '../../styles/Housing/collapsible.css'
import React, {useState} from "react";

import arrow_down from '../../assets/arrow_down.png'
import arrow_up from '../../assets/arrow_up.png'


export default function Collapsible ({
                                         collapsibleTitle,
                                         collapsibleContent
                                     }) {
    const [classname, setClassname] = useState('notDisplayed')

    let content

    if (collapsibleTitle === 'Équipements') {
        content = (
            <div className={classname}>
                <ul>
                    <li>{collapsibleContent[0]}</li>
                    <li>{collapsibleContent[1]}</li>
                    <li>{collapsibleContent[2]}</li>
                </ul>
            </div>
        )
    } else {
        content = (
            <div className={classname}>
                <p>{collapsibleContent}</p>
            </div>
        )
    }

    const handleClick = () => {
        classname === 'notDisplayed' ? setClassname('flexDisplayed') : setClassname('notDisplayed')
    }

    return (
        <div className="collapsible-container">
            <button type="button" className="collapsible"
                    onClick={handleClick}>
                {collapsibleTitle}
                {classname === 'notDisplayed' ?
                    <img src={arrow_down} alt="Flèche vers le bas"/> :
                    <img src={arrow_up} alt="Flèche vers le haut"/>
                }

            </button>
            {content}
        </div>

    )
}