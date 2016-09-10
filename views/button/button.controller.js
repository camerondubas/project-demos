let self = {};

export default class ButtonController {
  /* @ngInject */
  constructor($scope, $state, projectService, $q, $timeout) {
    $scope.$root.project = projectService.getProject(['sref', $state.current.name]);
    Object.assign(self, {$q, $timeout});
  }

  loadingSuccess(delay = 3000) {
    return self.$q(resolve => {
      self.$timeout(() => {
        resolve();
      }, delay);
    });
  }

  loadingError() {
    return self.$q((resolve, reject) => {
      self.$timeout(() => {
        reject();
      }, 3000);
    });
  }
}
