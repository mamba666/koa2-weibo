/**
 * @description error 404 路由
 * @author edison
 */

const router=require("koa-router")()

//error
router.get("/error",async(ctx,next)=>{
    await ctx.render("error")
})

//404
//什么都没命中就是*
router.get("*",async(ctx,next)=>{
    await ctx.render("404")
})

module.exports=router