import util from 'lodash';
import {logError} from '../common';

export default function (path, regExp) {
    return async (ctx, next) => {
        const value = util.get(ctx, path);
        if (!ctx.validation) {
            ctx.validation = {pass: true, errors: [], error: {}};
        }

        if (!value) {
            return await next();
        }

        if (!regExp.test(value)) {
            logError(ctx, path, 'max', 'The value of "' + path + '" is not match.');
        }

        await next();
    }
};