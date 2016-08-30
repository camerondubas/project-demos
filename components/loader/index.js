import * as angular from 'angular';

export default angular.module('app.components.loader', [])
.directive('cdLoader', () => {
  return {
    template: `
      <div class="cd-loader">Loading!</div>
    `,
    restrict: 'E',
    replace: true,
    transclude: true
  };
})
  .name;
