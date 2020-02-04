/**
 * @description 处理user逻辑 controller
 * @author edison
 */

const {getUserInfo}=require("../services/user")
const {SuccessModel,ErrorModel}=require("../model/ResModel")
const {
    registerUserNameNotExistInfo
}=require("../model/ErrorInfo")

/**
 * @description 用户名是否存在
 * @param {string} userName 
 * @description 因为需要查询数据库，所以是一个异步的操作
 */
async function isExist(userName){
    // 调用services
    const userInfo=await getUserInfo(userName)
    console.log(userInfo)
    if(userInfo){
        return new SuccessModel(userInfo)
    }else{
        //不存在
        return new ErrorModel(registerUserNameNotExistInfo)
    }
    //返回数据格式
}

module.exports={
    isExist
}