import * as Koa from 'koa';

import router from './routes';

const app = new Koa();
const port = process.env.PORT || 8080;

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

export default app;
