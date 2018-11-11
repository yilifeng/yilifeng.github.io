var loginIdentify = {
  loginsucc: false,
  logindesc: '',
  loginuser: '',
  sessionid: '',
  userid: '',
  version: '',
  serverip: '',
  serverport: ''
}

export default {
  // 获取cookie
  getCookie (cname) {
    var reg = new RegExp('(^| )' + cname + '=([^;]*)(;|$)')
    if (document.cookie.match(reg)) {
      return JSON.parse(document.cookie.match(reg)[2])
    } else {
      return {}
    }
  },

  setCookie  (cname, cvalue, exhour) {
    var valueStr = JSON.stringify(cvalue)
    var d = new Date()
    d.setTime(d.getTime() + (exhour * 60 * 60 * 1000))
    var expires = 'expires=' + d.toUTCString()
    document.cookie = cname + '=' + valueStr + '; ' + expires
  },

  delCookie  (cname) {
    let strcookie = document.cookie
    let arrcookie = strcookie.split('; ')
    var exp = new Date()
    exp.setTime(exp.getTime() - 1)
    for (let i = 0; i < arrcookie.length; i++) {
      let cval = this.getCookie(cname)
      if (cval !== null) {
        document.cookie = cname + '=' + cval + ';expires=' + exp.toUTCString()
      }
    }
  },

  setLoginInfo (param) {
    let arrUrl = window.location.href.split('/')
    let cookieKey = arrUrl[2] + '_' + param.username
    let cookies = this.getCookie(cookieKey)
    if (cookies.loginsucc) {
      this.delCookie(loginIdentify, cookieKey)
    }
    loginIdentify.loginsucc = true
    loginIdentify.loginuser = param.username
    loginIdentify.sessionid = param.token
    loginIdentify.userid = param.token
    loginIdentify.serverip = arrUrl[2]

    this.setCookie(cookieKey, loginIdentify, 1)
  },

  getLoginInfo () {
    return loginIdentify
  },

  activeAction () {
    let cookieKey = loginIdentify.serverip + '_' + loginIdentify.loginuser
    var cookie = this.getCookie(cookieKey)
    console.log('get cookie')
    console.log(cookie)
    if (cookie.loginsucc) {
      this.delCookie(loginIdentify, cookieKey)
      this.setCookie(cookieKey, cookie, 1)
    } else {
      loginIdentify.loginsucc = false
    }
  }
}
