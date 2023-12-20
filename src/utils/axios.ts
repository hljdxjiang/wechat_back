import Axios from 'axios'
import { message } from 'antd'
import { store } from '@/store'
import { HashRouter } from 'react-router-dom'
import { commonConfirm } from '@/assets/js/publicFunc'

interface AxiosConfig {
  timeout: number
  headers: {
    'Content-Type': string
  }
}

const config: AxiosConfig = {
  timeout: 600000,
  headers: {
    'Content-Type': 'application/json'
  }
}

const axios = Axios.create(config)

const router: CommonObjectType = new HashRouter({})

// token失效，清除用户信息并返回登录界面
const clearAll = () => {
  store.dispatch({
    type: 'SET_USERINFO',
    payload: {}
  })
  router.history.replace({ pathname: '/login' })
}

// 请求前拦截
axios.interceptors.request.use(
  (req) => {
    const { token = '' } = store.getState().user.UserInfo || {}
    req.headers.token = token
    return req
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 返回后拦截
axios.interceptors.response.use(
  (response): Promise<any> => {
    // todo 应考虑在全局统一化响应数据格式.如果没有,则应移除这个拦截器
    console.log("response", response)
    const { data } = response
    if (data.code === "401"||data.code==="000100") {
      commonConfirm("登录超时", () => {
        clearAll();
      })
    }
    if (data.code !== "000000") {
      message.error(data.message)
    }
    if (data.data) {
      return Promise.resolve(data.data)
    }
    if (data) {
      return Promise.resolve(data)
    }
    return Promise.reject(response)
  },
  (err) => {
    try {
      if (JSON.stringify(err).includes('403')) {
        clearAll()
      }
    } catch (error) {
      clearAll()
    }
    message.destroy()
    message.error('请求失败')
    return Promise.reject(err)
  }
)

const getUrl = (url: String) => {
  if (process.env.NODE_ENV === 'development') {
    return "http://127.0.0.1:22456/background/" + url;
  } else {
    return "/background/" + url;
  }
}

// post请求
// @ts-ignore
axios.post = (url: string, params?: object): Promise<any> =>
  axios({
    method: 'post',
    url: getUrl(url),
    data: params
  })


// get请求
axios.get = (url: string, params?: object): Promise<any> =>
  axios({
    method: 'get',
    url: getUrl(url),
    params
  })

export default axios
