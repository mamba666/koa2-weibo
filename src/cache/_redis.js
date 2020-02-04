/**
 * @description 连接redis的方法   get  set
 * @author edison
 */

const redis=require("redis")
const {REDIS_CONFIG}=require("../config/db")

//创建客户端
const clien=redis.createClient(REDIS_CONFIG.port,REDIS_CONFIG.host)
//如果有错的话就报错
clien.on("error",err=>{
    console.error("redis error",err)
})

//开始定义set 和 get 方法

/**
 * redis set
 * @param {string} key key
 * @param {string} val val
 * @param {number} timeout 过期时间，单位：秒
 */
function set(key,val,timeout=60*60){
    //假如传进来的val是对象的形式，那么就转换为字符串
    //因为在向 web 服务器发送数据时，数据必须是字符串。
    //如果是字符串就继续往下执行
    if(typeof(val)==="object"){
        val=JSON.stringify(val)
    }
    //官方文档：client.set("string key", "string val", redis.print);
    // key和val都是传进来的字符串
    clien.set(key,val)
    // clien.expire的意思是客户端到期时间
    clien.expire(key,timeout)
}


/**
 * redis get
 * @param {string} key 
 */
function get(key){
    //因为get需要返回一个值，在nodejs中I/O都是是异步的，所以可以用promise
    //set不用promise是因为set不用返回值
    const promise=new Promise((resolve,reject)=>{
        //获取值
        clien.get(key,(err,val)=>{
            if(err){
                reject(err)
                return
            }
            if(val==null){
                resolve(null)
                return
            }

            //get的本意是将set进去的字符串转换成JSON的对象
            try{
                resolve(
                    // JSON.parse() 方法用于将一个 JSON 字符串转换为对象。
                    JSON.parse(val)
                )
            }catch(ex){
                resolve(val)
            }
        })
    })
    return promise
}


module.exports={
    set,
    get
}