import {useState}  from 'react';

function GreetingDisplay({text, fontSize}){
    return(
        <p style={{fontSize: fontSize}}>{text}</p>
    )
}

export default GreetingDisplay;