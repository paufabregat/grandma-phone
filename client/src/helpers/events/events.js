import openSocket from 'socket.io-client';
import EventParser from './eventParser';
import { events } from '../constants';

const socket = openSocket('http://localhost:8000');
function callContact(cb) {
    socket.on(events.callContact, (event) => {
        const eventParser = new EventParser(event);
        const slots = eventParser.getSlots();
        const contact = EventParser.getSlotValue(slots[0]);
        return cb(null, contact);
    });
}

export { callContact };
