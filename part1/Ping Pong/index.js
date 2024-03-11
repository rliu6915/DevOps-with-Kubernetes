const Koa = require('koa')
const app = new Koa()
const PORT = process.env.PORT || 3000

let count = 0

app.use(async ctx => {
  if (ctx.path.includes('favicon.ico')) return

  ctx.body = `pong: ${count++}`
});

app.listen(PORT)