import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Contact.css';

export default function ({ contact }) {
    const imgStyle = {
        background: `url(${contact.image_path}) no-repeat center/cover`
    };
    return (
        <Link to={`/call/${contact.name}`} style={{ textDecoration: 'none' }}>
            <div className="contact">
                <div className="contact-thumbnail" style={imgStyle} />
                <div className="contact-name vertical-align"> {contact.name} </div>
            </div>
        </Link>
    );
}
