const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')
const dev = process.env.NODE_ENV !== 'production';
const bodyParser = require('koa-bodyparser');
const app = next({ dev });
const handle = app.getRequestHandler()
// const middleware = require('./middleware')

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  // middleware(server)

  try {
    router.get('/', async (ctx) => {
      return app.render(ctx.req, ctx.res, '/', ctx.query)
    })
  
    router.get('/blog', async (ctx) => {
      return app.render(ctx.req, ctx.res, `/blog`, ctx.query)
    })
  
    // router.get('/blog/detail/:id', async (ctx) => {
    //   return app.render(ctx.req, ctx.res, `/blog/detail`, {id: ctx.params.id})
    // })

    router.get('/blog/detail', async (ctx) => {
      await app.render(ctx.req, ctx.res, `/blog/detail`, {id: ctx.query.id})
    })
  } catch (e) {
    console.log('e-----e', e)
  }
  // 如果没有配置nginx做静态文件服务，下面代码请务必开启
  // router.get('*', async ctx => {
  //   await app.render(ctx.req, ctx.res, '/', ctx.query)
  //   ctx.status = 200;
  //   ctx.respond = false;
  // })

  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.use(bodyParser())
  server.use(router.routes())
        .use(router.allowedMethods());

  const PORT = process.env.PORT || 1993

  server.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
  })
})
