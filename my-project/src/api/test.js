import Vue from 'vue'

export default {
  queryTest (url) {
    return Vue.http.get(url + 'query_test_info')
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

  createTest (url, param) {
    return Vue.http.post(url + 'create_test_info', {'name': param.username}, {emulateJSON: true})
      .then(function (response) {
        console.log(response)
      })
  },

  deleteOneData (url, param) {
    return Vue.http.delete(url + 'delete_test_info', {'objectId': param.objectId}, {emulateJSON: true})
      .then(function (response) {
        console.log(response)
      })
  }
}
