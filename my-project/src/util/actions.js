/**
 * actions
 * 向前台页面提供消息接口, 从这个文件屏蔽版本差异
 */

import testApi from '../api/test'
var url = 'https://cloud.bmob.cn/e05b480d062bfcec/'

export const queryTest = function () {
  let res = testApi.queryTest(url)
  console.log('in queryTest')
  console.log(res)
  return res
}

export const createTest = function ({commit}, param) {
  let res = testApi.createTest(url, param)
  console.log('in createTest')
  console.log(res)
}

export const deleteOneData = function ({commit}, param) {
  let res = testApi.deleteOneData(url, param)
  console.log('in deleteOneData')
  console.log(res)
}
