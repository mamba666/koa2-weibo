/**
 * @description user API 路由
 * @author edison
 */

const router=require("koa-router")()
const {isExist,register}=require("../../controller/user")

router.prefix("/api/user")


router.post("/isExist",async(ctx,next)=>{
    //前端传过来的是一个userName
    //路由只管派发路径，以及获取前端的参数
    //具体的业务逻辑在controller
    const {userName}=ctx.request.body
    ctx.body=await isExist(userName)
    console.log("123",ctx.body)
})

router.post("/register",async(ctx,next)=>{
    const {userName,password,gender}=ctx.request.body
    // 调用controller
    ctx.body=await register({userName,password,gender})
})

module.exports=router