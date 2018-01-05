import React from 'react';
import fakeContact from '../../helpers/data/fakeContacts';
import Contact from './Contact';
import '../../styles/ContactsPage.css';

export default function () {
    const contactList = fakeContact.map(contact => (
        <Contact key={contact.id} contact={contact} />
    ));
    return (
        <div className="contact-list">
            <div className="contact-list-header vertical-align">
                Contacts
            </div>
            <div className="call-to vertical-align">
                Call to...
            </div>
            {contactList}
        </div>
    );
}
