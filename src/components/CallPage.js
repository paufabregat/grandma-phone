import React from 'react';
import fakeContact from '../helpers/data/fakeContacts';
import '../styles/CallPage.css';

export default function ({ match }) {
    const userName = match.params.name;
    let userImg = null; // TODO may be add redux and put it in the state
    fakeContact.forEach((contact) => {
        if (userName === contact.name) {
            userImg = contact.image_path;
        }
    });
    const imgStyle = {
        background: `url(${userImg}) no-repeat center/cover`
    };
    return (
        <div className="call vertical-align" >
            <div className="wrap-call-thumb vertical-align" >
                <div className="call-thumb" style={imgStyle} />
            </div>
            <div className="message">
                {`Calling ${userName}. Please wait`}
            </div>
        </div>
    );
}
