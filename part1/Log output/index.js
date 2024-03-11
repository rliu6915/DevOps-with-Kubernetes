const crypto = require("crypto")
const Koa = require('koa')

const app = new Koa()
const PORT = process.env.PORT || 3000

app.use(async ctx => {
  if (ctx.path.includes('favicon.ico')) return

  const randomString = crypto.randomUUID()
  ctx.body = `${new Date()}: ${randomString}`
});

app.listen(PORT)