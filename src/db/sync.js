/**
 * @description seq 同步数据库
 * @author edison
 */

const seq=require("./seq")

//引用模型
require("./model/index")

// force的意思是强制的意思。如果要创建user表。
// 每次同步的时候，如果数据库有user表，那么就强制删除并且创建新的
seq.sync({force:true}).then(()=>{
    //退出
    process.exit()
})