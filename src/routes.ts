import * as Router from 'koa-router';
import { Request } from 'koa';

const router = new Router();

router.get('/', async (ctx, next) => {
  await next();
  ctx.body = '(This page intentionally left blank ;)';
  ctx.status = 200;
});

export default router;
