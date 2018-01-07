import config from '../config';
// SNIPS intent names
const intents = {
    callContact: config.intents.callContact,
    contactOnLine: config.intents.contactOnLine,
    stopCall: config.intents.stopCall
};

const dialogueQueues = {
    start: 'startSession',
    continue: 'continueSession',
    end: 'endSession',
};

const generateCallingMessage = contact => `Calling ${contact}. Please wait`;
const generateNoContactMessage = () =>
    'The contact you are trying to call is not in the list. Please, call somebody from your contact list.' +
    ' Who do you want to call?';


export {
    intents,
    dialogueQueues,
    generateCallingMessage,
    generateNoContactMessage
};
