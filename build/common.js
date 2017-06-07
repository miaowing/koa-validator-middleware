'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.logError = logError;

var _ValidationError = require('./errors/ValidationError');

var _ValidationError2 = _interopRequireDefault(_ValidationError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function logError(ctx, path, type, message) {
    const paramTmp = path.split('\.');
    const paramName = paramTmp[paramTmp.length - 1];
    ctx.validation.pass = false;
    const error = new _ValidationError2.default(paramName, type, message);
    ctx.validation.errors.push(error);

    if (!ctx.validation.error[paramName]) {
        ctx.validation.error[paramName] = [];
    }
    ctx.validation.error[paramName].push(error);
}