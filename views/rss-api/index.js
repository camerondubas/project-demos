// Core
import * as angular from 'angular';
import uirouter from 'angular-ui-router';
import 'angular-json-tree';
import '../../node_modules/angular-json-tree/dist/angular-json-tree.css';
// Local
import routing from './rss-api.routes';
import RssApiController from './rss-api.controller';

export default angular.module('app.rss-api', [
  uirouter,
  'angular-json-tree'
])
  .controller('RssApiController', RssApiController)
  .config(routing)
  .name;

