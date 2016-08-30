// Core
import * as angular from 'angular';
import uirouter from 'angular-ui-router';

// Local
import routing from './search.routes';
import SearchController from './search.controller';

export default angular.module('app.search', [
  uirouter
])
  .controller('SearchController', SearchController)
  .config(routing)
  .name;

