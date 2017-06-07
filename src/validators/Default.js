import util from 'lodash';

export default function (path, defaultValue) {
    return async (ctx, next) => {
        const value = util.get(ctx, path);

        if (!value) {
            util.set(ctx, path, defaultValue);
        }

        await next();
    }
};