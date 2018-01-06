import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import fakeContact from '../../helpers/data/fakeContacts';
import Contact from './Contact';
import { callContact } from '../../helpers/events/events';
import '../../styles/ContactsPage.css';

class ContactsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactSelected: null
        };
        callContact((err, contact) => {
            const isContact = fakeContact.some(fkcontact => contact === fkcontact.name);
            if (isContact) {
                this.setState({ contactSelected: contact });
                // redirect to calling screen
                setTimeout(() =>
                    this.props.history.push(`/call/${contact}`)
                    , 3000);
            }
        });
    }
    render() {
        const contactList = fakeContact.map((contact) => {
            let isSelected = false;
            const contactSelected = this.state.contactSelected;
            if (!_.isNull(contactSelected) && contactSelected === contact.name) {
                isSelected = true;
            }
            return (
                <Contact
                    key={contact.id}
                    contact={contact}
                    selected={isSelected}
                />);
        });
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
}

export default withRouter(ContactsPage);
