import util from 'lodash';
import {logError} from '../common';

export default function (path) {
    return async (ctx, next) => {
        const value = util.get(ctx, path);
        if (!ctx.validation) {
            ctx.validation = {pass: true, errors: [], error: {}};
        }

        if (!value) {
            logError(ctx, path, 'not-empty', 'The "' + path + '" cannot be empty');
        }

        await next();
    }
};