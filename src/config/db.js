/**
 * @description 存储配置
 * @author edison
 */

const {isPrd}=require("../utils/env")

let REDIS_CONFIG={
    port:6379,
    host:"127.0.0.1"
}

if(isPrd){
    REDIS_CONFIG={
        //线上的redis环境
        port:6379,
        host:"127.0.0.1"
    }
}

module.exports={
    REDIS_CONFIG
}