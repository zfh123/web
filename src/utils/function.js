export function isNumber(str) {
  return /^[0-9.]*$/.test(str);
}

export function debounce(fn, wait = 250, immediate) {
  let timeout
  return function (...args) {
    const later = () => {
      timeout = null
      if (!immediate) {
        fn.apply(this, args)
      }
    };

    clearTimeout(timeout)
    if (immediate && !timeout) {
      fn.apply(this, args)
    }
    timeout = setTimeout(later, wait)
  }
}

export function throttle(fn, limit = 250) {
  let wait = false

  return function (...args) {
    if (wait) {
      return
    }

    wait = true
    fn.apply(this, args)
    setTimeout(() => {
      wait = false
    }, limit)
  }
}

export function clone(data) {
  return JSON.parse(JSON.stringify(data))
}

export function isObject(v) {
  return Object(v) === v
}

export function isDate(v) {
  return Object.prototype.toString.call(v) === '[object Date]'
}

export function isRegexp(v) {
  return Object.prototype.toString.call(v) === '[object RegExp]'
}


export function isString(v) {
  return typeof v === 'string'
}

export function errAction(response) {
  this.$toast({type: 'danger', content: '网络或服务器异常，保存失败', time: 1500});
  throw new Error(response)
}

