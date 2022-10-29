import React, {useState, useRef} from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

function InputSample () {
    const [inputs, setInputs] = useState({
        name: '',
        nickname : '',
    });
    const nameInput = useRef();
    const {nickname, name} = inputs;
    const onChange = (e) => {
        const {name, value} = e.target;

        //객체 상태를 업데이트 할때는 한번 복사해서 해야함. 불변성을 지켜주어야 컴포넌트 업데이트 성능을 최적화 할 수 있음
      setInputs({
        ...inputs,
        [name] : value,
      });
    };
    const onReset = () => {
        setInputs({
            name : '',
            nickname : '',
        });
        nameInput.current.focus();
    }

    return (
        <div>
            <input 
            name="name" 
            placeholder="아이디를 입력해주세요." 
            onChange={onChange} 
            value={name}
            ref = {nameInput}
            /> 
            <br/>
            <input 
            name="nickname"
            placeholder="닉네임을 입력해주세요."  
            onChange={onChange} 
            value= {nickname} 
            /> <br/><br/>
            <button onClick={onReset}>초기화</button>
            <div>
               <b> 값 :
                {name} ({nickname}) </b> 
            </div>
        </div>

    );
}

export default InputSample;