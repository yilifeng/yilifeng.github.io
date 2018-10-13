import Vue from 'vue'
import md5 from 'js-md5'

export default {
  queryAllUserInfo (url) {
    return Vue.http.get(url + 'query_user_info')
      .then(function (response) {
        console.log(response.body)
        if (response.status) {
          if (typeof response.body === 'string') {
            return JSON.parse(response.body).results
          } else {
            return response.body.results
          }
        } else {
          console.log(response.body)
          throw new Error(response.body)
        }
      })
  },

  createUser (url, param) {
    let rnd = ''
    for (let i = 0; i < 10; i++) {
      rnd += Math.floor(Math.random() * 100)
    }

    let request = {
      'username': param.username,
      'user_id': md5(rnd + param.username),
      'password': md5(param.password)
    }

    console.log(request)
    return Vue.http.post(url + 'create_user_info', request, {emulateJSON: true})
      .then(function (response) {
        console.log(response)
      })
  },

  deleteOneUser (url, param) {
    return Vue.http.delete(url + 'delete_user_info', {'objectId': param.objectId}, {emulateJSON: true})
      .then(function (response) {
        console.log(response)
      })
  },

  updateUsername (url, param) {
    let request = {
      'objectId': param.objectId,
      'username': param.username,
      'user_id': param.user_id
    }

    console.log(request)
    return Vue.http.delete(url + 'update_username', request, {emulateJSON: true})
      .then(function (response) {
        console.log(response)
      })
  },

  updatePassword (url, param) {
    let request = {
      'objectId': param.objectId,
      'user_id': param.user_id,
      'old_password': md5(param.old_password),
      'new_password': md5(param.new_password)
    }

    console.log(request)
    return Vue.http.delete(url + 'update_password', request, {emulateJSON: true})
      .then(function (response) {
        console.log(response)
      })
  }
}
