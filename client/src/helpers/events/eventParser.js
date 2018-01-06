class EventParser {
    constructor(event) {
        this.event = JSON.parse(event);
    }

    getInput() {
        return this.event.input;
    }

    getIntentName() {
        return this.event.intent.intentName;
    }

    getSlots() {
        return this.event.slots;
    }

    static getSlotName(slot) {
        return slot.slotName;
    }

    static getSlotRawValue(slot) {
        return slot.rawValue;
    }
}

export default EventParser;
