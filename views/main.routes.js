import templateUrl from './landing.html';

export default /* @ngInject */ $stateProvider =>
  $stateProvider
    .state('app.landing', {
      url: '/',
      templateUrl
    });
