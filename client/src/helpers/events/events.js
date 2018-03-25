import openSocket from 'socket.io-client';
import EventParser from './eventParser';
import { intents } from '../constants';

const socket = openSocket('http://localhost:8000');
function callContact(cb) {
    if (socket._callbacks[`$${intents.callContact}`] === undefined) {
        socket.on(intents.callContact, (event) => {
            const eventParser = new EventParser(event);
            const slots = eventParser.getSlots();
            const sessionId = eventParser.getSessionId();
            const contact = EventParser.getSlotValue(slots[0]);
            return cb(null, contact, sessionId);
        });
    }
}

function sendText(sessionId, text, event) {
    const payload = {
        sessionId,
        text
    };
    socket.emit(event, payload);
}

function stopCall(cb) {
    socket.on(intents.stopCall, () => cb(null));
}

export { callContact, stopCall, sendText };
