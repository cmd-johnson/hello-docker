'use strict'

const os = require('os')
const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
  ctx.body = `Hello World from ${os.hostname()}`
})

app.listen(3000)
