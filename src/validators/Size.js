import util from 'lodash';
import {logError} from '../common';

export default function (path, min, max) {
    return async (ctx, next) => {
        const value = util.get(ctx, path);
        if (!ctx.validation) {
            ctx.validation = {pass: true, errors: [], error: {}};
        }

        if (!value) {
            return await next();
        }

        if (value.length < min || value.length > max) {
            logError(ctx, path, 'size', 'The value\'s length of "' + path + '" is not in ' + min + ' and ' + max + '.');
        }

        await next();
    }
};