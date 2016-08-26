import templateUrl from './landing.html';

export default /* @ngInject */ $stateProvider =>
  $stateProvider
    .state('app.landing', {
      url: '/',
      controller: 'MainController',
      controllerAs: 'mainCtrl',
      templateUrl
    });
