import fetch from 'isomorphic-unfetch'

// 200 成功
// 100001 失败
// 100002 超时

type RES_CODE = 200 | 100001 | 100002

interface IResInfo<T> {
  code: RES_CODE,
  msg: string,
  result: T
}

const TIME_OUT = 5000

const timeOut = (): Promise<IResInfo<null>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 100002,
        msg: '请求超时',
        result: null
      })
    }, TIME_OUT)
  })
}

const fetchData = (url: RequestInfo, config: RequestInit | undefined): Promise<IResInfo<null | never>>  => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(url, config)
      const json: IResInfo<any> = await res.json()
      resolve(json)
    } catch (err) {
      reject(err)
    }
  })
}

const http = (url: RequestInfo, config: RequestInit | undefined = {}) => {
  return Promise.race([timeOut(), fetchData(url, config)]).then((res) => {
    if (res && res.code && res.code === 200) {
      return Promise.resolve(res)
    }

    return Promise.reject(res)
  }).catch(err => {
    return Promise.reject(err)
  })
}

type HttpFn = (url: RequestInfo, config?: RequestInit | undefined) => Promise<IResInfo<any>>

const httpGet: HttpFn = async (url, config = {}) => {
  return await http(url, Object.assign({}, config, {
    method: 'get'
  }))
}

const httpPost: HttpFn = async (url, config = {}) => {
  return await http(url, Object.assign({}, config, {
    method: 'post'
  }))
}

const httpPut: HttpFn = async (url, config = {}) => {
  return await http(url, Object.assign({}, config, {
    method: 'put'
  }))
}

const httpDelete: HttpFn = async (url, config = {}) => {
  return await http(url, Object.assign({}, config, {
    method: 'delete'
  }))
}

export default {
  get: httpGet,
  post: httpPost,
  put: httpPut,
  delete: httpDelete
}
