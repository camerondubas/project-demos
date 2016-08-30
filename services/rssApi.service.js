let self = {};

import * as angular from 'angular';
class RssApiService {
  constructor($q, $http) {
    Object.assign(self, {$q, $http});
  }

  getFeed(url) {
    return self.$q((resolve, reject) => {
      self.$http.get(`https://rss-api.herokuapp.com/feed?url=${url}`).then(
        ressponse => resolve(ressponse.data),
        err => reject(err)
      );
    });
  }
}

export default angular.module('app.services.rss-api', [])
.service('rssApiService', RssApiService)
  .name;
