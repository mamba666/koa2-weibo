const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
var session = require('koa-generic-session')
var redisStore = require('koa-redis')

const {REDIS_CONFIG}=require("./config/db")
const {isPrd}=require("./utils/env")

const index = require('./routes/index')
const userViewRouter=require('./routes/view/user')
const errorViewRouter = require('./routes/view/error')

// error handler
let onerrorConfig={}
//先判断是不是线上环境，如果是就返回友好页面
//如果不是就直接返回错误
if(isPrd){
  onerrorConfig={redirect:"/error"}
}
onerror(app,onerrorConfig)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

//session配置
//cookie需要加密
app.keys = ["UIsdf_7878#$"];
app.use(session({
  //如果不设置，那么cookie name默认是"koa.sid"
  key:"weibo.sid",
  //redis key的前缀，默认是"koa:sess:"
  prefix:"weibo:sess:",
  cookie:{
    path:"/",
    httpOnly:true,
    //过期时间，ms
    maxAge:24*60*60*1000
  },
  store: redisStore({
    all:`${REDIS_CONFIG.host}:${REDIS_CONFIG.port}`
  })
}));
// logger
// app.use(async (ctx, next) => {
//   const start = new Date()
//   await next()
//   const ms = new Date() - start
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
// })

// routes
// 注册路由是由先后顺序的，因为error里面有*，所以可能引起404
// 故404要放在最后
app.use(index.routes(), index.allowedMethods())
app.use(userViewRouter.routes(), userViewRouter.allowedMethods())
app.use(errorViewRouter.routes(), errorViewRouter.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app

