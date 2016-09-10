import * as angular from 'angular';
import promiseButtons from 'ng-promise-buttons';

export default angular.module('app.components.button', [promiseButtons])
.directive('cdButton', () => {
  return {
    template: `
      <button class="cd-button" ng-transclude promise-button></button>
    `,
    restrict: 'E',
    replace: true,
    transclude: true
  };
})
  .name;
