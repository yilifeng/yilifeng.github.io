import Vue from 'vue'

export default {
  queryOneContent (url, param) {
    return Vue.http.get(url + '/content/' + param.contentId)
      .then(function (response) {
        if (response.status) {
          if (typeof response.body === 'string') {
            return JSON.parse(response.body)
          } else {
            return response.body
          }
        } else {
          console.log(response.body)
          throw new Error(response.body)
        }
      })
  },

  createContent (url, param) {
    console.log(param)
    return Vue.http.post(url + '/content/', param)
      .then(function (response) {
        console.log(response)
      })
  },

  updateContent (url, param) {
    console.log(param)
    return Vue.http.put(url + '/content/', param)
      .then(function (response) {
        console.log(response)
      })
  },

  deleteContent (url, param) {
    return Vue.http.delete(url + '/content/', param)
      .then(function (response) {
        console.log(response)
      })
  }
}
