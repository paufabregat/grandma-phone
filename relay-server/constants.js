// SNIPS intent names
const intentNames = [
    'paupau:callContact',
    'paupau:contactOnLine',
    'paupau:stopCall'
];

const dialogueQueues = {
    continue: 'continueSession',
    end: 'endSession',
};

const intentQueue = 'hermes/intent/';
const dialogueManagerQueue = 'hermes/dialogueManager/';

module.exports = {
  intentNames,
  intentQueue,
  dialogueQueues,
  dialogueManagerQueue
};
