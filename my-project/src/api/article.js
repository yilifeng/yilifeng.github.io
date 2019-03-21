import Vue from 'vue'

export default {
  queryArticles (url) {
    return Vue.http.get(url + '/article/')
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
  }
}
