// Core
import * as angular from 'angular';
import uirouter from 'angular-ui-router';

// Local
import routing from './main.routes';

export default angular.module('app.main', [uirouter])
  .config(routing)
  .name;

