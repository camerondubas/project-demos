export default /* @ngInject */ ($urlRouterProvider, $locationProvider, $stateProvider) => {
  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '',
      abstract: true,
      template: '<ui-view></ui-view>'
    });
};
