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
  export function addClass (el: HTMLElement | Element, className: string | string[]): void {
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
  export function removeClass (el: HTMLElement | Element, className: string | string[]): void {
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

