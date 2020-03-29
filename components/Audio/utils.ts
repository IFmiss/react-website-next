export function throttle(fn: Function, t: number = 1000) {
  if (typeof fn !== 'function') {
      return;
  }
  let time: any = null;
  let first = true;
  return function (this: any) {
    let arg = arguments;
    if (first) {
      fn.apply(this, arg);
      first = false;
      return;
    }
    if (time)
      return;
    time = setTimeout(() => {
      setTimeout(time);
      time = null;
      fn.apply(this, arg);
    }, t);
  };
}