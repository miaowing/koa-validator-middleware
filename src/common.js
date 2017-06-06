import ValidationError from './errors/ValidationError';

export function logError(ctx, path, type, message) {
    const paramTmp = path.split('\.');
    const paramName = paramTmp[paramTmp.length - 1];
    ctx.validation.pass = false;
    const error = new ValidationError(paramName, type, message);
    ctx.validation.errors.push(error);

    if (!ctx.validation.error[paramName]) {
        ctx.validation.error[paramName] = [];
    }
    ctx.validation.error[paramName].push(error);
}