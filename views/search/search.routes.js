import templateUrl from './search.html';

export default /* @ngInject */ $stateProvider =>
  $stateProvider
  .state('app.search', {
    url: 'search',
    controller: 'SearchController',
    controllerAs: 'searchCtrl',
    templateUrl
  });
