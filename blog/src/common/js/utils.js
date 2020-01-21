export const timeformate = time => {
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let day = time.getDate();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    month = month > 9 ? month : '0'+month
    day = day > 9 ? day : '0'+day
    hour = hour > 9 ? hour : '0'+hour
    minute = minute > 9 ? minute : '0'+minute
    second = second > 9 ? second : '0'+second

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}