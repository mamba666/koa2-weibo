/**
 * @description json test
 * @author edison
 */


const server=require("./server")

test("json返回数据格式正确",async()=>{
    //get请求
    const res=await server.get("/json")
    // toEqual是判断一个对象是否相等
    expect(res.body).toEqual({
        title: 'koa2 json'
    })
    expect(res.body.title).toBe('koa2 json')

    //post请求
    // const res=await server.post("/login").send({
    //     userName:"edison",
    //     password:"123"
    // })
    
})