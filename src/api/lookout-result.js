import Vue from 'vue';

export default {
  getLookoutResults(request) {
    return Vue.http.post('https://mc-api-devo.herokuapp.com/v1/lookout_requests', request, {
      headers: {
        'Content-Type': 'application/vnd.api+json',
      },
    })
      .then((response) => {
        Promise.resolve(response.data);
      })
      .catch((error) => {
        Promise.reject(error);
      });
  },
};
