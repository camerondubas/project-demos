export default /* @ngInject */ $stateProvider => {
  $stateProvider
  .state('app', {
    url: '/',
    abstract: true,
    template: '<ui-view></ui-view>'
  });
};
