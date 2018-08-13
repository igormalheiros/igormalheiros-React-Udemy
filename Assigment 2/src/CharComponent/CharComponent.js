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
            <p onClick={ props.click } style={ style }>{props.char}</p>
        </div>        
    );
};

export default charcomponent;