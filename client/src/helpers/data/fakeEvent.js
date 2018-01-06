const fakeEvent = {
    input: 'Call Pau',
    intent: {
        intentName: 'paupau:callContact',
        probability: 1
    },
    slots: [
        {
            rawValue: 'Pau',
            value: {
                kind: 'Custom',
                value: 'Pau'
            },
            range: {
                start: 5,
                end: 8
            },
            entity: 'contactName',
            slotName: 'contactName'
        }
    ]
};

export default fakeEvent;
