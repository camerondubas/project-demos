// Core
import * as angular from 'angular';
import uirouter from 'angular-ui-router';

// Local
import routing from './landing.routes';
import LandingController from './landing.controller';

export default angular.module('app.landing', [
  uirouter
])
  .controller('LandingController', LandingController)
  .config(routing)
  .name;

