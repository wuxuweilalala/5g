import React, {useState} from 'react';
import classnames from 'classnames';
import './Dices.scss';

function Dices(props) {
    const [active, setActive] = useState([]);
    const onClick = (text, isActive) => {
        let newActive = active;
        if(isActive) {
            setActive(newActive = active.filter(a => a!==text))
        } else {
            setActive(newActive = [...active, text])
        }
        props.onClick(newActive)
    };
    return (
        <div className="dice-container">
            {props.texts && props.texts.map(text => {
                const isActive = active.indexOf(text) !== -1;
                return (
                    <div key={text} className={classnames("dice", {
                        active: isActive
                    }) } onClick={() => onClick(text, isActive)}>
                        {text}
                    </div>
                )
            }
            
            )
        }
        </div>
    );
}
export default Dices;
