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

axios.defaults.baseURL = 'https://www.daiwei.site/api'
axios.defaults.timeout = 10000

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
      return Promise.reject(res)
    }
  
    return Promise.resolve(res)
  }
)

export default axios
