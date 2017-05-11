import Vue from 'vue';

export default {
  createdLookoutResults(request, cb, errorCb) {
    return Vue.http.post('https://mc-api-devo.herokuapp.com/v1/lookout_requests', request, {
      headers: {
        'Content-Type': 'application/vnd.api+json',
      },
    })
      .then((response) => {
        cb(response.data);
      })
      .catch((error) => {
        errorCb(error);
      });
  },
  getLookoutResults(id, cb, errorCb) {
    return Vue.http.get(`https://mc-api-devo.herokuapp.com/v1/lookout_requests/${id}`, {
      headers: {
        'Content-Type': 'application/vnd.api+json',
      },
    })
      .then((response) => {
        cb(response.data);
      })
      .catch((error) => {
        errorCb(error);
      });
  },
};
