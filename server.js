const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  router.get('*', async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  })

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  })

  server.use(router.routes())

  const PORT = 9999

  server.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
  })
})
