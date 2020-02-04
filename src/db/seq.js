/**
 * @description sequelize 实例(mysql)
 * @author edison
 */

const Sequelize=require("sequelize")
const {MYSQL_CONFIG}=require("../config/db")
const {isPrd,isTest}=require("../utils/env")

const {host,user,password,database}=MYSQL_CONFIG 

const config={
    host,
    dialect:"mysql"
}

//在单元测试的时候不要打印sql语句
if(isTest){
    config.loggin=()=>{}
}

// 线上连接池
if(isPrd){
    config.pool={
    // 允许连接池中创建的最大连接数量
    max:5,
    // 允许连接池中创建的最小连接数量
    min:0,
    // 一个连接池中某个连接如果10秒内没有被使用，就会被释放供别人使用
    idle:10000
    }
}


const seq=new Sequelize(database,user,password,config)

module.exports=seq

seq.authenticate().then(()=>{
    console.log("OK1")
}).catch(()=>{
    console.log("err")
})