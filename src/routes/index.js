const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    isMe:false,
    blogList:[
      {
        id:1,
        title:1,
        author:1
      },
      {
        id:2,
        title:2,
        author:2
      },
      {
        id:3,
        title:3,
        author:3
      }
    ]
  })
})

router.get('/json', async (ctx, next) => {
//  
  // const session=ctx.session
  // if(session.viewNum==null){
  //   session.viewNum=0
  // }
//{
//   cookie: {
//     path: '/',
//     httpOnly: true,
//     maxAge: 86400000,
//     overwrite: true,
//     signed: true
//   },
//   viewNum: 22
// }
  // console.log(session)
  // session.viewNum++
//
  ctx.body = {
    title: 'koa2 json'
    // viewNum: session.viewNum
  }
})

router.get('/profile/:userName',async(ctx,next)=>{
  const {userName}=ctx.params
  console.log(ctx.params)
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/loadMore/:userName/:pageIndex',async(ctx,next)=>{
  const {userName,pageIndex}=ctx.params
  ctx.body = {
    title: 'koa2 json',
    userName,
    pageIndex
  }
})

module.exports = router

