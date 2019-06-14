function callback(obj,d){
    obj.$message({
        message:d.data.info,
        type:'warning'
    });
    obj.$router.replace('/login')
    return
};



export default{
    callback,
}