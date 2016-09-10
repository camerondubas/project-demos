import * as angular from 'angular';

export default angular.module('app.components.code', [])
.directive('cdCodeBlock', () => {
  return {
    template: `
      <code class="cd-code-block">
        <pre ng-transclude></pre>
      </code>
    `,
    restrict: 'E',
    replace: true,
    transclude: true
  };
})
.directive('cdCodeInline', () => {
  return {
    template: `
      <code class="cd-code-inline">
        <pre ng-transclude></pre>
      </code>
    `,
    restrict: 'E',
    replace: true,
    transclude: true
  };
})
  .name;
