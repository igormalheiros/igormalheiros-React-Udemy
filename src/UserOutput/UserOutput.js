import React from 'react';
import './UserOutput.css';

const useroutput = (props) => {
    return (
        <div className="UserOutput">
            <p>User: {props.userName}</p>
            <p>Description:</p>
        </div>
    );
}

export default useroutput;