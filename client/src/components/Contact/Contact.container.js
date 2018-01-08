import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import fakeContact from '../../helpers/data/fakeContacts';
import Contact from './Contact';
import { callContact, sendText } from '../../helpers/events/events';
import '../../styles/ContactContainer.css';
import {
    dialogueQueues,
    generateCallingMessage,
    generateNoContactMessage
} from '../../helpers/constants';

class ContactContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactSelected: null
        };
        callContact((err, contact, sessionId) => {
            const isContact = fakeContact.some(fkcontact => contact === fkcontact.name);
            if (isContact) {
                this.setState({ contactSelected: contact });
                sendText(sessionId, generateCallingMessage(contact), dialogueQueues.end);
                // redirect to calling screen
                setTimeout(() => {
                    // eslint-disabe-next-line react/prop-types
                    this.props.history.push(`/calling/${contact}`)
                }, 2000);
            } else {
                console.log('Contact not found');
                sendText(sessionId, generateNoContactMessage(), dialogueQueues.continue);
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

export default withRouter(ContactContainer);
