'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (path, defaultValue) {
    return (() => {
        var _ref = _asyncToGenerator(function* (ctx, next) {
            const value = _lodash2.default.get(ctx, path);

            if (!value) {
                _lodash2.default.set(ctx, path, defaultValue);
            }

            yield next();
        });

        return function (_x, _x2) {
            return _ref.apply(this, arguments);
        };
    })();
};

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

;