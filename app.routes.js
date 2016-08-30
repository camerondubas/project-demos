export default /* @ngInject */ $stateProvider => {
  $stateProvider
  .state('app', {
    url: '/',
    abstract: true,
    template: `<cd-navbar title="{{project.title || 'All Demos'}}" color="{{project.color || '#202f88'}}"></cd-navbar><ui-view></ui-view>`
  });
};
