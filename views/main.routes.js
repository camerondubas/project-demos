export default /* @ngInject */ $stateProvider => {
  $stateProvider
    .state('app.landing', {
      url: '/',
      template: require('./landing.html')
    });
};
