/**
 * @description 处理user逻辑 controller
 * @author edison
 */

const {getUserInfo,createUser}=require("../services/user")
const {SuccessModel,ErrorModel}=require("../model/ResModel")
const {
    registerUserNameNotExistInfo,
    registerUserNameExistInfo
}=require("../model/ErrorInfo")

const doCrypto=require("../utils/cryp")

/**
 * @description 用户名是否存在
 * @param {string} userName 
 * @description 因为需要查询数据库，所以是一个异步的操作
 */
async function isExist(userName){
    // 调用services
    const userInfo=await getUserInfo(userName)
    console.log("可以打印1")
    if(userInfo){
        console.log("可以打印2")
        return new SuccessModel(userInfo)
    }else{
        //不存在
        console.log("可以打印3")
        return new ErrorModel(registerUserNameNotExistInfo)
    }
    //返回数据格式
}

/**
 * 
 * @param {string} userName 
 * @param {string} password
 * @param {number} gender sex 1男2女3保密
 */
async function register({userName,password,gender}){
    //为什么这里还要判断一次呢用户是否存在呢？
    // 第一个是不要相信前端
    // 假如前端传过来一个以及存在的username，那么这里可以返回一个友好的界面
    // 假如这里不写，数据模型有一个unique，但是到了存储层就可能会直接返回一个500
    // 对用户不友好
    const userInfo=await getUserInfo(userName)
    if(userInfo){
        //用户名以及存在
        return new ErrorModel(registerUserNameExistInfo)
    }

    // 注册 services
    try{
        await createUser({
            userName,
            password:doCrypto(password),
            gender
        })
        return new SuccessModel()
    }catch(ex){
        console.error(ex.message,ex.stack)
        return new ErrorModel(registerFailInfo)
    }
}


module.exports={
    isExist,
    register
}