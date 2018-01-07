// SNIPS intent names
const events = {
    callContact: 'paupau:callContact',
    contactOnLine: 'paupau:contactOnLine',
    stopCall: 'paupau:stopCall'
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
    events,
    dialogueQueues,
    generateCallingMessage,
    generateNoContactMessage
};
