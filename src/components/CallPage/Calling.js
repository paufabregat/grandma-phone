import React from 'react';
import '../../styles/Contact.css';

export default function ({ userName, userImg, callThumbColor }) {
    const imgStyle = {
        background: `url(${userImg}) no-repeat center/cover`
    };
    const wrapCallThumbStyle = {
        backgroundColor: callThumbColor
    };
    return (
        <div className="call vertical-align" >
            <div className="wrap-call-thumb vertical-align" style={wrapCallThumbStyle} >
                <div className="call-thumb" style={imgStyle} />
            </div>
            <div className="message">
                {`Calling ${userName}. Please wait`}
            </div>
        </div>
    );
}
