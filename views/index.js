// Core
import * as angular from 'angular';
import uirouter from 'angular-ui-router';

// Subviews
import landing from './landing';
import posts from './posts';

export default angular.module('app.views', [
  uirouter,

  landing,
  posts
])
  .name;

