/**
 * @description 处理环境变量
 * @author edison
 */

const ENV=process.env.NODE_ENV

module.exports={
    isDev:ENV==="dev",
    notDev:ENV!=="dev",
    isPrd:ENV==="production",
    notPrd:ENV!=="production",
    isTest:ENV==="test",
    notTest:ENV!=="test"
}