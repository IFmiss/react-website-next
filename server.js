const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
// const middleware = require('./middleware')

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  // middleware(server)

  try {
    router.get('/', async (ctx) => {
      await app.render(ctx.req, ctx.res, '/', ctx.query)
      ctx.respond = false
    })
  
    router.get('/blog', async (ctx) => {
      await app.render(ctx.req, ctx.res, `/blog`)
      ctx.respond = false
    })
  
    router.get('/blog/detail/:id', async (ctx) => {
      const { id } = ctx.params
      await app.render(ctx.req, ctx.res, `/blog/detail/${id}`, {id})
      ctx.respond = false
    })
  } catch (e) {
    console.log(e)
  }
  // 如果没有配置nginx做静态文件服务，下面代码请务必开启
  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.use(router.routes())

  const PORT = 9999

  server.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
  })
})
