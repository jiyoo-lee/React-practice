import React, {useState} from "react";
import OddEvenResult from "./OddEvenResult";

const Counter = ({ initialValue }) => {

    // 0에서 출발하여 1씩 증가 혹은 감소하는 카운트 형태
    //useState(0) -> 초기값

const [count, setCount] = useState(initialValue);

const onIncrease = () => {
    setCount(count + 1);
}

const onDecrease = () => {
    setCount(count - 1);
}

    return (
        <div>
            <h2> {count} </h2>
            <button onClick = {onIncrease}> + </button>
            <button onClick = {onDecrease}> - </button>
            <OddEvenResult count = {count}/>
            <br/>
        </div>
    );
};


Counter.defaultProps = {
    initialValue: 0,
}
export default Counter;