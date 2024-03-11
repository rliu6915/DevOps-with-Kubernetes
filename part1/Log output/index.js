const crypto = require("crypto")
const Koa = require('koa')

const app = new Koa()
const PORT = process.env.PORT || 3000

const genRandomString = () => {
  const randomString = crypto.randomUUID()
  // const newDate = new Date()

  console.log(`${new Date()}: ${randomString}`)

  setTimeout(genRandomString, 5000)
}

//const startingString = genRandomString()

app.use(async ctx => {
  if (ctx.path.includes('favicon.ico')) return

  const stringNow = genRandomString()
  console.log('--------------------')
  console.log(`Responding with ${stringNow}`)
  ctx.body = `${startingString}: ${stringNow}`
});

//console.log(`Started with ${startingString}`)
app.listen(PORT)