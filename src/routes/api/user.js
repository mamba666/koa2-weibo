/**
 * @description user API 路由
 * @author edison
 */

const router=require("koa-router")()

router.prefix("/api/user")


router.post("/isExist",async(ctx,next)=>{
    //前端传过来的是一个userName
    //路由只管派发路径，以及获取前端的参数
    //具体的业务逻辑在controller
    const {userName}=ctx.request.body
    // ctx.body=await 
})

router.post("/register",async(ctx,next)=>{

})

module.exports=router