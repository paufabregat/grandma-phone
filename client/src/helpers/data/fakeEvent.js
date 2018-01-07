const fakeEvent = {
    sessionId: 'bcf84625-605f-4047-8eaa-0d909a64ce0e',
    customData: null,
    siteId: 'default',
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
