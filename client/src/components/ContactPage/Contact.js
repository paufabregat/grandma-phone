import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Contact.css';

export default function ({ contact, selected }) {
    const contactStyle = {};
    const imgStyle = {
        background: `url(${contact.image_path}) no-repeat center/cover`
    };
    if (selected) {
        contactStyle.backgroundColor = '#896536';
        contactStyle.color = 'white';
    }
    return (
        <Link to={`/call/${contact.name}`} style={{ textDecoration: 'none' }}>
            <div className="contact" style={contactStyle}>
                <div className="contact-thumbnail" style={imgStyle} />
                <div className="contact-name vertical-align"> {contact.name} </div>
            </div>
        </Link>
    );
}
