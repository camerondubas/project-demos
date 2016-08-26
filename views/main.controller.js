let self = {};

export default class MainController {
  /* @ngInject */
  constructor(postService) {
    self.postService = postService;
    self.postService.query().then(posts => this.posts = posts);
  }
}
