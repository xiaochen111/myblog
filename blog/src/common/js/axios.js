import axios from 'axios';
import qs from 'qs';
import Message from "../../components/message"


// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'; 
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; 
axios.defaults.headers['X-Requested-With'] ='XMLHttpRequest'; //配置表明是ajax请求
axios.defaults.withCredentials = true; //axios默认是不允许ajax请求头携带cookie，所以要手动配置允许才能通过请求头传递或获取cookie。
axios.defaults.timeout =  10000;


//请求拦截器
axios.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error)
})


//响应拦截器即异常处理
axios.interceptors.response.use(response => {
    return response
}, error => {
  if(error.message.search(/timeout/ig)!=-1){
    Message.fail('网络超时，请重新再试')
  }
  if (error && error.response) {
    // console.log(error)
    switch (error.response.status) {
      case 400:
        error.message = '错误请求'
        break;
      case 401:
        location.hash = '#/login'
        error.message = '未授权，请重新登录'
        break;
      case 403:
        error.message = '拒绝访问'
        break;
      case 404:
        error.message = '请求错误,未找到该资源'
        break;
      case 405:
        error.message = '请求方法未允许'
        break;
      case 408:
        error.message = '请求超时'
        break;
      case 410:
        break;
      case 411:
        error.message = '请求411'
        break;
      case 500:
        Message.fail('服务器端出错')
        error.message = '服务器端出错'
        break;
      case 501:
        Message.fail('网络未实现')
        error.message = '网络未实现'
        break;
      case 502:
        Message.fail('网络错误')
        error.message = '网络错误'
        break;
      case 503:
        Message.fail('服务不可用')
        error.message = '服务不可用'
        break;
      case 504:
        error.message = '网络超时'
        break;
      case 505:
        error.message = 'http版本不支持该请求'
        break;
      default:
        error.message = `连接错误${error.response.status}`
    }
  } else {
    error.message = "连接到服务器失败"
  }
  return Promise.resolve(error.response)
})


export async function post(url,data={}){
  let method = 'POST';
  data = qs.stringify(data)
  try {
    let res = await axios({url,data,method});
    return res.data;
  } catch (error) {
    throw new Error(error)
  }
};

export async function uploadFile(url,data={}){
  let method = 'POST';
  try {
    let res = await axios({url,data,method});
    return res.data;
  } catch (error) {
    throw new Error(error)
  }
};



