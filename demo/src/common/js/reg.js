function checkEmpty(obj){
    var isok=true;
    for(var i in obj){
        if(obj[i]==''){
            isok=false;
            break;
        }
    }
    return isok;
}

function checkName (name){
    var reg=/^[a-zA-Z]\w{6,16}$/
    return reg.test(name)
}

function checkPass(pass){
    var reg=/^[a-zA-Z0-9]{6,16}$/
    return reg.test(pass)
}

function checkTel(tel){
    var reg=/^1[3456789]\d{9}$/
    return reg.test(tel)
}

function checkEmail(email){
    var reg=/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
    return reg.test(email)
}

function checkIdx(idx){
    var reg=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    return reg.test(idx)
}
export default {
    checkEmpty,
    checkName,
    checkPass,
    checkTel,
    checkEmail,
    checkIdx
}