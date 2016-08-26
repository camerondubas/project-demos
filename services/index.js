import * as angular from 'angular';

// Services
import post from './post.service';

export default angular.module('app.services',
  [
    post
  ])
  .name;
