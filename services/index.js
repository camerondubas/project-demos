import * as angular from 'angular';

// Services
import rss from './rssApi.service';
import project from './project.service';

export default angular.module('app.services',
  [
    rss,
    project
  ])
  .name;
