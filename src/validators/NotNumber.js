import util from 'lodash';
import {logError} from '../common';

export default function (path) {
    return async (ctx, next) => {
        const value = util.get(ctx, path);
        if (!ctx.validation) {
            ctx.validation = {pass: true, errors: [], error: {}};
        }

        if (!value) {
            return await next();
        }

        if (!util.isNumber(value)) {
            logError(ctx, path, 'not-number', 'The "' + path + '" is not a number.');
            return false;
        }

        await next();
    }
};