import * as angular from 'angular';
import uirouter from 'angular-ui-router';

export default angular.module('app.components.tile', [uirouter])
.directive('cdTile', () => {
  return {
    template: `
      <div class="cd-tile">
        <div class="cd-tile__container" ng-style="{'background': color}">
          <div class="cd-tile__header">{{title}}</div>
          <div class="cd-tile__description">{{description}}</div>
        </div>
      </div>
    `,
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {
      color: '@',
      title: '@',
      description: '@'
    }
  };
})
  .name;

