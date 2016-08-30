import * as angular from 'angular';

export default angular.module('app.components.demo-container', [])
.directive('cdDemoContainer', () => {
  return {
    template: `
      <div class="cd-demo-container" ng-transclude>
      </div>
    `,
    restrict: 'E',
    replace: true,
    transclude: true
  };
})
  .name;
