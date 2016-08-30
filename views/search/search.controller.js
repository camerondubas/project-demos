export default class SearchController {
  /* @ngInject */
  constructor($scope, $state, projectService) {
    $scope.$root.project = projectService.getProject(['sref', $state.current.name]);
  }
}
