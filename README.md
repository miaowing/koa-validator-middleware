# koa-validator-middleware

A collection of validation middlewares for koa.

## Usage

```javascript
import {NotEmpty, Size} from 'koa-validator-middleware';
import KoaRouter from 'koa-router';

const router = new KoaRouter();

router.post('/users', 
    NotEmpty('request.body.username'), 
    Size('request.body.password', 6, 20), 
    function (ctx) {
        if(!ctx.validation.pass) {
            console.log(ctx.validation.errors);
            console.log(ctx.validation.error.username);
            console.log(ctx.validation.error.password);
        }
    }
);
```

## API

### NotEmpty(path)

### NotInteger(path)

### NotNumber(path)

### NotNull(path)

### Min(path, min)

### Max(path, max)

### Size(path, min, max)

### Pattern(path, regExp)