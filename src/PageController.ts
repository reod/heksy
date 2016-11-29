import { AppController } from './AppController';

export class PageController extends AppController {

  constructor(name: string) {
    super(name);
  }

  async index(ctx: any, next: any) {
    await next();
    ctx.body = 'nothing to se here3.';
    ctx.status = 200;
  }
}

