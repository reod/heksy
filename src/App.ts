import * as Koa from 'koa';
import * as Router from 'koa-router';

import { executionTimeLogger } from './middlewares';
import { PageController } from './PageController';

export class App {
  public koa: Koa;

  constructor() {
    this.koa = new Koa();
    this.registerMiddlewares();
    this.registerRoutes();
  }

  private registerMiddlewares(): void {
    this.koa.use(executionTimeLogger);
  }

  private registerRoutes(): void {
    const router = new Router();
    const pageController = new PageController('default');

    router.get('/', pageController.index);

    this.koa.use(router.routes());
    this.koa.use(router.allowedMethods());
  }

  public listen(port: Number, callback: Function) {
    return this.koa.listen(port, callback);
  }
}