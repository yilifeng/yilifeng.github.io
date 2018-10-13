/**
 * actions
 * 向前台页面提供消息接口, 从这个文件屏蔽版本差异
 */

import testApi from '../api/user'
var url = 'https://cloud.bmob.cn/e05b480d062bfcec/'

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
