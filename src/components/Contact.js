import React from 'react';

export default function ({ contact }) {
    const imgStyle = {
        background: `url(${contact.image_path}) no-repeat center/cover`
    };
    return (
        <div className="contact">
            <div className="contact-thumbnail" style={imgStyle} />
            <div className="contact-name vertical-align"> {contact.name} </div>
        </div>
    );
}
