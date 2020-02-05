/**
 * @description 用户数据模型
 * @author edison
 */

const seq=require("../seq")
const {STRING,DECIMAL}=require("../types")

const User=seq.define("user",{
    userName:{
        type:STRING,
        allowNull:false,
        //判断用户名是否唯一
        unique:true,
        comment:"用户名唯一"
    },
    password:{
        type:STRING,
        allowNull:false,
    },
    nickName:{
        type:STRING,
        allowNull:false,
    },
    gender:{
        type:DECIMAL,
        allowNull:false,
        // defaultValue是默认值
        defaultValue:3,
        comment:"性别：男1，女2，保密3"
    },
    picture:{
        type:STRING,
        comment:"图像存的都是地址"
    },
    city:{
        type:STRING
    }
})
module.exports=User