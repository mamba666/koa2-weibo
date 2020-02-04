/**
 * @description 存储配置
 * @author edison
 */

const {isPrd}=require("../utils/env")

let REDIS_CONFIG={
    port:6379,
    host:"127.0.0.1"
}
let MYSQL_CONFIG={
    host:"localhost",
    user:"root",
    password:"lwjkkkbbb1997",
    port:"3306",
    databases:"koa2_weibo_db"
}

if(isPrd){
    REDIS_CONFIG={
        //线上的redis环境
        port:6379,
        host:"127.0.0.1"
    }
    MYSQL_CONFIG={
        //线上的mysql环境
        host:"localhost",
        user:"root",
        password:"lwjkkkbbb1997",
        port:"3306",
        databases:"koa2_weibo_db"
    }
}

module.exports={
    REDIS_CONFIG,
    MYSQL_CONFIG
}