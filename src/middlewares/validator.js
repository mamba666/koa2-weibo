/**
 * @description json schema 中间件
 * @author edison
 */

const { ErrorModel } = require('../model/ResModel')
const { jsonSchemaFileInfo } = require('../model/ErrorInfo')

/**
 * 生成 json schema 验证的中间件
 * @param {function} validateFn 验证函数
 */
function genValidator(validateFn) {
    // 定义中间件函数
    async function validator(ctx, next) {
        const data = ctx.request.body
        const error = validateFn(data)
        if (error) {
            console.log("2validvalidvalid")
            // 验证失败
            ctx.body = new ErrorModel(jsonSchemaFileInfo)
            console.log("5validvalidvalid")
            console.log("6validvalidvalid",validator)
            return
        }
        console.log("3validvalidvalid")
        // 验证成功，继续
        await next()
    }
    // 返回中间件
    console.log("4validvalidvalid")
    return validator
}

module.exports = {
    genValidator
}
