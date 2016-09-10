import templateUrl from './button.html';

export default /* @ngInject */ $stateProvider =>
  $stateProvider
  .state('app.button', {
    url: 'button',
    controller: 'ButtonController',
    controllerAs: 'buttonCtrl',
    templateUrl
  });
