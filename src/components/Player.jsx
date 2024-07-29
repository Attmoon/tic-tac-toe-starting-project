import { useState } from "react";

export default function Player({name, symbol}) {
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick() {
        setIsEditing(true);
    }
    let palyerName = <span className="player-name">{name}</span>;
    if (isEditing) {
        palyerName = <input type="text" required />;
    }
    return (
        <li>
            <span className="player">
                {palyerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>Edit</button>
        </li>
    );
}