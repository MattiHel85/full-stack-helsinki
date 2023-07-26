import React from 'react';

const Notification = ({message, style}) => {
    
    return (
        <div style={style}>
            {message}
        </div>
    );
}

export default Notification;