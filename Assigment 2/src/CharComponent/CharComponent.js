import React from 'react';

const charcomponent = (props) => {
    const style = {
        display: "inline-block", 
        padding: "16px", 
        textAlign: "center",
        margin: "16px", 
        border: "1px solid black"
      };

    return (
        <div className="CharComponent">
            <h1 onClick={ props.click } style={ style }>{props.char}</h1>
        </div>        
    );
};

export default charcomponent;