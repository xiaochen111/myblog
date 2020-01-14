/**
 * 
 * @param {*} str 时间字符串
 * 时间格式过滤器
 * 
 */
export const formateDate = str => {
    const date = new Date(str);
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getUTCDate()
    let hours = date.getUTCHours()
    let minutes = date.getUTCMinutes()
    hours = hours >= 10 ? hours : ('0' + hours)
    minutes = minutes >= 10 ? minutes : ('0' + minutes)
    return `${year}-${month}-${day} ${hours}:${minutes}`
}