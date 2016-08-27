// Core
import * as angular from 'angular';
import uirouter from 'angular-ui-router';

// Local
import routing from './posts.routes';
import PostsController from './posts.controller';

export default angular.module('app.posts', [uirouter])
.config(routing)
.controller('PostsController', PostsController)
  .name;

