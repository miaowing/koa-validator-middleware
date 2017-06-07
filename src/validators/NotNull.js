import util from 'lodash';
import {logError} from '../common';

export default function (path) {
    return async (ctx, next) => {
        const value = util.get(ctx, path);
        if (!ctx.validation) {
            ctx.validation = {pass: true, errors: [], error: {}};
        }

        if (value === null || value === undefined) {
            logError(ctx, path, 'not-null', 'The "' + path + '" cannot be null.');
        }

        await next();
    }
};