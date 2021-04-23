import React from 'react';
import './Icons.css';


function Icons(props){
    return(
        <div className={`icons ${props.active && 'icon-active'}`}>
            <props.Symbol />
            <h2>{props.text}</h2>
        </div>
    );
}

export default Icons;