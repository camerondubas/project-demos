// Core
import * as angular from 'angular';
import uirouter from 'angular-ui-router';

// Subviews
import landing from './landing';
import rss from './rss-api';
import search from './search';
import button from './button';

export default angular.module('app.views', [
  uirouter,

  landing,
  rss,
  search,
  button
])
  .name;

