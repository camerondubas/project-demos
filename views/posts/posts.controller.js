let self = {};

export default class PostsController {
  /* @ngInject */
  constructor(postService) {
    self.postService = postService;
    self.postService.query().then(posts => this.posts = posts);
  }
}
