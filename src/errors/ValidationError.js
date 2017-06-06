export default class ValidationError extends Error {
    constructor(key, type, message) {
        super(message);
        this.key = key;
        this.type = type;
    }
}