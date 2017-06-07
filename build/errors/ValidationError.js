"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
class ValidationError extends Error {
    constructor(key, type, message) {
        super(message);
        this.key = key;
        this.type = type;
    }
}
exports.default = ValidationError;