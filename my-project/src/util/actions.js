/**
 * actions
 * 向前台页面提供消息接口, 从这个文件屏蔽版本差异
 */
import testApi from '../api/test'
import articleApi from '../api/article'
import contentApi from '../api/content'
import userApi from '../api/user'
import Cookie from './cookie'
// var url = 'https://cloud.bmob.cn/e05b480d062bfcec/'
var url = 'http://127.0.0.1:5000'

export const setOnmouseDown = function () {
  document.onmousedown = function () {
    Cookie.activeAction()
  }
  document.onkeydown = function () {
    console.log('enter document.onkeydown')
    Cookie.activeAction()
  }
}

export const login = function ({commit}, param) {
  console.log(param)
  return userApi.login(url, param)
    .then(function (res) {
      Cookie.setLoginInfo(res)
      setOnmouseDown()
      return res
    })
}

export const loginInfo = function () {
  return Cookie.getLoginInfo()
}

export const queryAllUserInfo = function () {
  let res = testApi.queryAllUserInfo(url)
  console.log('in queryTest')
  console.log(res)
  return res
}

export const createUser = function ({commit}, param) {
  console.log(param)
  let res = testApi.createUser(url, param)
  console.log('in createTest')
  console.log(res)
}

export const deleteOneUser = function ({commit}, param) {
  console.log(param)
  let res = testApi.deleteOneUser(url, param)
  console.log('in deleteOneData')
  console.log(res)
}

export const queryOneContent = function ({commit}, param) {
  let res = contentApi.queryOneContent(url, param)
  console.log('in queryOneContent')
  console.log(res)
  return res
}

export const createContent = function ({commit}, param) {
  console.log(param)
  let res = contentApi.createContent(url, param)
  console.log('in createContent')
  console.log(res)
}

export const deleteContent = function ({commit}, param) {
  console.log(param)
  let res = contentApi.deleteContent(url, param)
  console.log('in deleteContent')
  console.log(res)
}

export const queryArticles = function () {
  return articleApi.queryArticles(url)
    .then((res) => {
      console.log('queryArticles: ' + res)
      console.log(res)
      return res
    })
}
