// Core
import * as angular from 'angular';
import uirouter from 'angular-ui-router';

// Local
import routing from './landing.routes';

export default angular.module('app.landing', [
  uirouter
])
  .config(routing)
  .name;

