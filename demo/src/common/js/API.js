var baseUrl='/api'
// var baseUrl = ''
// 登录
var login = baseUrl+'/login'
// 退出登录
var logout = baseUrl+'/exit'

// 管理员 新增 修改 删除
var addManage = baseUrl+'/addManage'
var findManage =baseUrl+'/findManage'
var updateManage=baseUrl+'/updateManage'
var delManage = baseUrl+'/delManage'

// 用户 新增 修改 删除
var addUser = baseUrl+'/addUser'
var findUser =baseUrl+'/findUser'
var updateUser =baseUrl+'/updateUser'
var delUser=baseUrl+'/delUser'

// 通知 新增 修改 删除
var addNews = baseUrl+'/addNews'
var findNews= baseUrl+'/findNews'
var updateNews=baseUrl+'/updateNews'
var delNews =baseUrl+'/delNews'

// 设备 新增 修改 删除
var addDevice = baseUrl+'/addDevice'
var findDevice= baseUrl+'/findDevice'
var updateDevice=baseUrl+'/updateDevice'
var delDevice =baseUrl+'/delDevice'

export default {
    login,
    logout,
    addManage,
    findManage,
    updateManage,
    delManage,
    addUser,
    findUser ,
    updateUser,
    delUser,
    addNews,   
    findNews,
    updateNews,
    delNews,
    addDevice,   
    findDevice,
    updateDevice,
    delDevice
}