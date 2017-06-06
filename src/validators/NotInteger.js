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

        if (!util.isInteger(value)) {
            logError(ctx, path, 'not-integer', 'The "' + path + '" is not a int number.');
            return false;
        }

        await next();
    }
};