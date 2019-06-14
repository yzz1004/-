function filterTime(time) {
    var data = new Date(time)
    var y = data.getFullYear();
    var m = data.getMonth() + 1 > 10 ? data.getMonth() + 1 : '0' + (data.getMonth() + 1);
    var d = data.getDate() > 10 ? data.getDate() : '0' + data.getDate();
    return `${y}年${m}月${d}日`
}

export default filterTime    