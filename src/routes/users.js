const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/login',async(ctx,next)=>{
  const {userName,password}=ctx.request.body
  console.log(ctx.request.body)
  console.log(ctx.body)
  ctx.body = {
    title: 'koa2 json',
    userName,
    password
  }
  console.log(ctx.body)
})

module.exports = router