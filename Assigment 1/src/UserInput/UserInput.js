import React from 'react';

const userinput = (props) => {
    return(
        <div>
            <input type="text" style={props.style} onChange={props.changed} value={props.userName}/>
        </div>
    );
}

export default userinput;