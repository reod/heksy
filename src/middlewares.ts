import * as Koa from 'koa';

export async function executionTimeLogger(cxt: Koa.Context, next: any) {
  const start: number = +new Date();
  await next();
  const end: number = +new Date();
  console.log('execution time:', (end - start));
};