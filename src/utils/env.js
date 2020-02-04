/**
 * @description 处理环境变量
 * @author edison
 */

const ENV=process.env.NODE_ENV

module.exports={
    idDev:ENV==="dev",
    notDev:ENV!=="dev",
    isPrd:ENV==="production",
    notPrd:ENV!=="production"
}