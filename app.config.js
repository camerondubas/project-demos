export default /* @ngInject */ ($urlRouterProvider, $locationProvider, $resourceProvider, $stateProvider) => {
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
  $resourceProvider.defaults.withCredentials = true;

  $stateProvider
    .state('app', {
      url: '',
      abstract: true,
      template: '<ui-view></ui-view>'
    });
};
