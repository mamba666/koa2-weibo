/**
 * @description 数据格式化
 * @author edison
 */

const {DEFAULT_PICTURE}=require("../config/constant")

/**
 * @description 在用户没有设置头像时，初始化默认头像
 * @param {Object} obj 一个用户
 */
function _formatUserPicture(obj){
    if(obj.picture==null){
        obj.picture=DEFAULT_PICTURE
    }
    return obj
}

/**
 * 格式化用户信息
 * @param {Array|Object} list 用户列表或者单个用户对象
 * @description 因为在user.js中查询信息可能是一个，也可能是多个信息，所以是一个数组或者对象
 * 
 */
function formatUser(list){
    if(list==null){
        return 
    }
    //array
    if(list instanceof Array){
        //数组
        return list.map(_formatUserPicture)
    }
    //object
    return _formatUserPicture(list)

}
    
module.exports={
    formatUser
}