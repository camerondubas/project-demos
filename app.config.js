export default /* @ngInject */ ($urlRouterProvider, $locationProvider, $resourceProvider) => {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  $resourceProvider.defaults.withCredentials = true;
};
