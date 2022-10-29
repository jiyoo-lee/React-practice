import React from "react";

function Hello({color, name, 
isSpecial }){
    return ( <div style={{
        color
        }}>
            {isSpecial  ? '[스페셜]' : '[스페셜하지않음]' }  
        Drop The Mongddang ! {name}
        </div> 
    );
}

Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;