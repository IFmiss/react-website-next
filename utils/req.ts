import axios from 'axios'

// 200 成功
// 100001 失败
// 100002 超时

type RES_CODE = 200 | 100001 | 100002

interface IResInfo<T> {
  code: RES_CODE,
  msg: string,
  result: T
}

// const BASE_URL = 'http://127.0.0.1:4002'
const BASE_URL = 'https://www.daiwei.site/api'
const TIME_OUT = 10000

axios.defaults.baseURL = BASE_URL
axios.defaults.timeout = TIME_OUT

axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use((res: any): any => {
    // const data: IResInfo = res.data
    if (!res) {
      return Promise.reject('no response')
    }

    if (res.data && res.data.code !== 200) {
      return Promise.reject(res.data)
    }
  
    return Promise.resolve(res.data)
  }
)

export default axios
