import templateUrl from './posts.html';

export default /* @ngInject */ $stateProvider =>
  $stateProvider
  .state('app.posts', {
    url: 'posts',
    controller: 'PostsController',
    controllerAs: 'postsCtrl',
    templateUrl
  });
