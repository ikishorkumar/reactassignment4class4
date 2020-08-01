import React, { useState } from 'react';
import "./index.css";
// import Bulb from './Bulb.png';

function Room() {
    const [isLit, setLit] = useState(false);
    const [isTemp, setTemp] = useState(72);

    return (
        <div id="maindiv">
            <div id="mainel0" >
                <div id="mainel" className={`room ${isLit ? "lit" : "dark"}`} ></div>
                <div id="mainel2">
                <button onClick={() => setLit(!isLit)}>
                flip</button>
                </div>
            </div>
            <br />
            <button id="l1" onClick={() => setLit(true)}>
    Turn On</button>
            <button id="l2" onClick={() => setLit(false)}>
                Turn Off</button>
            <br />
            <div id="Temp">{isTemp} &#8451;</div>
            <button onClick={() => setTemp(isTemp+ 1)}>+</button>
            <button onClick={() => setTemp(isTemp - 1)}>-</button>

        </div>
    );

}
export default Room;
