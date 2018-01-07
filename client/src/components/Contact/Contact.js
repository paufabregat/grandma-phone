import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../styles/Contact.css';

const Contact = ({ contact, selected }) => {
    const contactStyle = {};
    const imgStyle = {
        background: `url(${contact.image_path}) no-repeat center/cover`
    };
    if (selected) {
        contactStyle.backgroundColor = '#896536';
        contactStyle.color = 'white';
    }
    return (
        <Link to={`/calling/${contact.name}`} style={{ textDecoration: 'none' }}>
            <div className="contact" style={contactStyle}>
                <div className="contact-thumbnail" style={imgStyle} />
                <div className="contact-name vertical-align"> {contact.name} </div>
            </div>
        </Link>
    );
};

Contact.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        image_path: PropTypes.string
    }).isRequired,
    selected: PropTypes.bool.isRequired
};

export default Contact;
