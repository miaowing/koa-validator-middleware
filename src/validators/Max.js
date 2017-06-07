import util from 'lodash';
import {logError} from '../common';

export default function (path, max) {
    return async (ctx, next) => {
        const value = util.get(ctx, path);
        if (!ctx.validation) {
            ctx.validation = {pass: true, errors: [], error: {}};
        }

        if (!value) {
            return await next();
        }

        if (util.toNumber(value) > max) {
            logError(ctx, path, 'max', 'The value of "' + path + '" is larger than ' + max + '.');
        }

        await next();
    }
};