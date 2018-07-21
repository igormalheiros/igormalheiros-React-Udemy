import React from 'react';

const validationcomponent = (props) => {
    let classification = (<h3>Text long enough</h3>);
    if(props.textLength <= 5){        
        classification=( <h3>Text too short</h3> );
    }


    return (
        <div className="ValidationComponent">
            {classification}
        </div>        
    );
};

export default validationcomponent;