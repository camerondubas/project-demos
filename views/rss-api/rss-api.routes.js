import templateUrl from './rss-api.html';

export default /* @ngInject */ $stateProvider =>
  $stateProvider
  .state('app.rss', {
    url: 'rss',
    controller: 'RssApiController',
    controllerAs: 'rssCtrl',
    templateUrl
  });
