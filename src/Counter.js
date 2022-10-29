import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {Button} from "react-bootstrap"

function Counter () {
    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        setNumber(prevNumber =>prevNumber + 1);
    }
    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1)
    };

    return (
        <div>
            <h1>{number}</h1>
            <Button
            onClick={onIncrease}>+1</Button>
            <Button
            onClick={onDecrease}>-1</Button>
        </div>  

    );

}

export default Counter;