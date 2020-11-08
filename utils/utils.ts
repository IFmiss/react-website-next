/**
 * @description 日期格式化 可转换成自己想要的格式
 * @param { String } fmt 格式模板 'yyyy-MM-dd hh:mm:ss'
 * @param { Date } date 日期内容  如 当前日期 new Date()
 * @return { String } '2018-08-15 01:46:22'
 * @example
 * formatDate(`yyyy-MM-dd hh:mm:ss`, new Date())
 * @example
 * formatDate(`yyyy-MM-dd`, new Date())
 */
export function formatDate(fmt: string, date = new Date()) {
  const newDate = new Date(date);
  let o: any = {
      'M+': newDate.getMonth() + 1,
      'd+': newDate.getDate(),
      'h+': newDate.getHours(),
      'm+': newDate.getMinutes(),
      's+': newDate.getSeconds(),
      'q+': ~~((newDate.getMonth() + 3) / 3),
      'S': newDate.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (newDate.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
      }
  }
  return fmt;
}

/**
 * @description 判断元素是否存在某个class类
 * @param { HTMLElement } el dom元素
 * @param { String } className class名称
 * @example
 * hasClass(document.body, 'd-utils')
 */
export function hasClass (el: HTMLElement | Element, className: string): boolean {
    return el.classList.contains(className)
  }
  
/**
 * @description 判断元素是否存在某个class类
 * @param { HTMLElement } el dom元素
 * @param { String } className class名称
 * @example
 * hasClass(document.body, 'd-utils')
 */
export function addClass (el: Element | HTMLElement, className: string | string[]): void {
  if (Array.isArray(className)) {
    className.forEach((item: string) => {
      if (!hasClass(el, item)) {
        el.classList.add(item)
      }
    })
    return
  }
  if (!hasClass(el, className)) {
    el.classList.add(className)
  }
}

/**
 * @description 元素删除class
 * @param { HTMLElement } el dom元素
 * @param { (String | Array) } className class名称，可以是多个
 * @example
 * removeClass(document.body, 'd-utils')
 */
export function removeClass (el: Element | HTMLElement, className: string | string[]): void {
  if (Array.isArray(className)) {
    className.forEach((item: string) => {
      if (hasClass(el, item)) {
        el.classList.remove(item)
      }
    })
    return
  }
  if (hasClass(el, className)) {
    el.classList.remove(className)
  }
}

/**
 * @description 设置Cookie
 * @param { String } name cookie名称
 * @param { String } value cooke的值
 * @param { Number } exp 过期时间 默认2小时 单位毫秒
 * @example
 * // 设置name为test的值为12345，设置过期时间为1小时
 * setCookie('test', '12345', 60 * 60 * 1000)
 */
export function setCookie (name: string, value: string, exp: number = 60 * 60 * 2 * 1000): void {
  const date = new Date()
  date.setTime(date.getTime() + exp)
  document.cookie = `${name}=${escape(value)};expires=${date.toUTCString()}`
}

/**
 * @description 获取Cookie
 * @param { String } name cookie名称
 * @returns { (Array | Null) } 返回数据
 * @example
 * getCookie('test')
 */
export function getCookie (name?: string): string | any {
  if (name) {
    const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`)
    const arr = document.cookie.match(reg)
    return arr&&arr[2] ? arr[2] : null
  }
  const getAllCookies = []
  if (document.cookie.length) {
    const arrCookie = document
                      .cookie
                      .split('; ')
    for (let k in arrCookie) {
      getAllCookies.push({
        name: `${unescape(arrCookie[k].split('=')[0])}`,
        value: `${unescape(arrCookie[k].split('=')[1])}`
      })
    }
    return getAllCookies
  } else {
    return null
  }
}

/**
 * @description 删除Cookie
 * @param { String } name cookie名称 如果不传参数则设置所有cookie过期
 * @returns { Array } 是一个伪数组
 * @example
 * removeCookie('test')
 */
export function removeCookie (name: string): any {
  const date = new Date()
  date.setTime(date.getTime() - 1)
  if (name) {
    const cookieInfo = getCookie(name)
    if (cookieInfo !== null) {
      document.cookie = `${name}=${cookieInfo};expires=${date.toUTCString()}`
    }
    return
  }
  const allCookies = getCookie()
  for (let k in allCookies) {
    document.cookie = `${allCookies[k].name}=${allCookies[k].value};expires=${date.toUTCString()}`
  }
}

export function cssFilter (el: HTMLElement, type: any, option: string | number): void {
  if (typeof type === 'object' && !option) {
    let cssText = ''
    for (let k in type) {
      if (type.hasOwnProperty(k)) {
        cssText+= `${k}(${type[k]})`
      }
    }
    el.style.filter = cssText
    el.style.webkitFilter = cssText
    return
  }
  el.style.filter = `${type}(${option})`
  el.style.webkitFilter = `${type}(${option})`
}

export function isAppleDevice(): boolean {
  const ua = navigator.userAgent.toLowerCase()
  return /|iphone|ipod|ipad|ios|mac/.test(ua)
}


export function fmtTime (str: string): string {
  const t = new Date(str)
  const timer = t.getTime();
  const timeDiff = (new Date().getTime() - timer) / 1000;
  if (timeDiff < 60) {
    return '刚刚';
  }
  if (timeDiff < 60 * 60) {
    return `${~~(timeDiff / 60)}分钟前`;
  }
  if (timeDiff < 60 * 60 * 24) {
    return `${~~(timeDiff / 60 / 60)}小时前`;
  }
  if (timeDiff < 60 * 60 * 24 * 30) {
    return `${~~(timeDiff / 24 / 60 / 60)}天前`;
  }
  if (timeDiff < 60 * 60 * 24 * 30) {
    return `${~~(timeDiff / 24 / 60 / 60)}天前`;
  }
  if (timeDiff < 180 * 24 * 60 * 60) {
    return formatDate('MM-dd', t);
  }
  return formatDate('yyyy-MM-dd', t);
}