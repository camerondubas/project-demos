import * as angular from 'angular';
import uirouter from 'angular-ui-router';

export default angular.module('app.components.navbar', [uirouter])
.directive('cdNavbar', $state => {
  return {
    template: `
      <div class="cd-navbar__wrapper">
        <nav class="cd-navbar" ng-style="{'background': color}">
          <div class="cd-icon__back" ui-sref="app.landing" ng-show="showBack">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h2 class="cd-navbar__title" ng-style="{'margin-left' : showBack ? '30px' : '0px'}">{{title}}</h2>
        </nav>
        <div class="cd-navbar__spacer"></div>
      </div>
    `,
    restrict: 'E',
    replace: true,
    scope: {
      title: '@',
      color: '@'
    },
    link: scope => {
      update();
      scope.$root.$on('$stateChangeSuccess', update);

      function update() {
        scope.showBack = $state.current.name !== 'app.landing';
      }
    }
  };
})
  .name;

