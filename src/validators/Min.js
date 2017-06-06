import util from 'lodash';
import {logError} from '../common';

export default function (path, min) {
    return async (ctx, next) => {
        const value = util.get(ctx, path);
        if (!ctx.validation) {
            ctx.validation = {pass: true, errors: [], error: {}};
        }

        if (!value) {
            return await next();
        }

        if (util.toNumber(value) < min) {
            logError(ctx, path, 'min', 'The value of "' + path + '" is smaller than ' + min + '.');
            return false;
        }

        await next();
    }
};