export default class LandingController {
  /* @ngInject */
  constructor(projectService, $scope) {
    this.projects = projectService.projects;
    $scope.$root.project = {};
  }
}
