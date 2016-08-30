import * as angular from 'angular';

export default angular.module('app.components.button', [])
.directive('cdButton', () => {
  return {
    template: `
      <button class="cd-button" ng-transclude></button>
    `,
    restrict: 'E',
    replace: true,
    transclude: true
  };
})
  .name;
