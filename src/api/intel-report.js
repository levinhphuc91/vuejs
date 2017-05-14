import Vue from 'vue';

export default {
  getIntelResults(cb, errorCb) {
    return Vue.http.get('https://mc-api-devo.herokuapp.com//v1/intel_reports?page[number]=1&page[size]=3', {
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
