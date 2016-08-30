let self = {};

export default class RssApiController {
  /* @ngInject */
  constructor(rssApiService, projectService, $state, $scope) {
    self.rssApiService = rssApiService;
    $scope.$root.project = projectService.getProject(['sref', $state.current.name]);
  }

  getFeed() {
    this.isLoading = true;
    this.error = null;
    self.rssApiService.getFeed(this.rssUrl).then(
      feed => {
        this.isLoading = false;
        this.feed = feed;
      },
      err => {
        this.isLoading = false;
        this.error = err;
      }
    );
  }
}
