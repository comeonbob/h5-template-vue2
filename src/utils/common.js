
export function testEmail (value) {
  let reg = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
  return reg.test(value.trim())
}

export function testPhone (value) {
  let reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/
  return reg.test(value)
}

// 根据不同区号,做不同的验证
export function testPhoneFix (value, region) {
  const regs = {
    CHN: /^[ ]*1\d{10}[ ]*$/,
    HKG: /^[ ]*\d{8}[ ]*$/,
    MAC: /^[ ]*6\d{7}[ ]*$/,
    TWN: /^[ ]*\d{10}[ ]*$/,
    SGP: /^[ ]*\d{1,50}[ ]*$/,
    MYS: /^[ ]*\d{1,50}[ ]*$/,
    IDN: /^[ ]*\d{1,50}[ ]*$/
  }
  return regs[region].test(value)
}

export function addClass (el, className) { // el：元素  className：带新增的样式类名
  if (hasClass(el, className)) {
    return 0
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

// 判断是否拥有某个样式类
export function hasClass (el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

// 判断是否是pc[true] moblie[false]
export function IsPC () {
  let userAgentInfo = navigator.userAgent
  let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  let flag = true
  for (var i = 0; i < Agents.length; i++) {
    if (userAgentInfo.indexOf(Agents[i]) > 0) {
      flag = false
      break
    }
  }
  return flag
}

// 设置cookie
export function setCookie (name, value, expires, domain, path, secure) {
  var cookieText = ''
  cookieText += encodeURIComponent(name) + '=' + encodeURIComponent(value)
  if (expires instanceof Date) {
    cookieText += '; expires=' + expires.toGMTString()
  }
  if (path) {
    cookieText += '; path=' + path
  } else {
    cookieText += '; path=/'
  }
  if (domain) {
    cookieText += '; domain=' + domain
  }
  if (secure) {
    cookieText += '; secure'
  }
  document.cookie = cookieText
}

// 从cookie中获取数据
export function getCookie (name) {
  var arr = ''
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  arr = document.cookie.match(reg)
  if (arr) {
    return unescape(arr[2])
  } else {
    return null
  }
}

// 16进制转2进制 字符串
export function hexToBin (value) {
  if (!value) {
    return ''
  }
  return parseInt(value, 16).toString(2)
}

// 2进制转16进制 字符串
export function binToHex (value) {
  if (!value) {
    return ''
  }
  return parseInt(value, 2).toString(16)
}

export function debounce (func, wait, immediate) {
  var timeout
  return function debFn (...args) {
    // console.log('>>>>>>debFn ' + +new Date());
    var context = this
    var later = function laterFn () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

// 数字千分符
export function toThousands (num) {
  return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}

// 修改title
export function setTitleHack (t) {
  document.title = t
  let iframe = document.createElement('iframe')
  iframe.style.visibility = 'hidden'
  iframe.style.width = '1px'
  iframe.style.height = '1px'
  iframe.src = ''
  iframe.onload = function () {
    setTimeout(function () {
      iframe.remove()
    }, 10)
  }
  document.body.appendChild(iframe)
}
