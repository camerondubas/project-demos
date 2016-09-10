// Core
import * as angular from 'angular';
import uirouter from 'angular-ui-router';

// Local
import routing from './button.routes';
import ButtonController from './button.controller';

export default angular.module('app.button', [
  uirouter
])
  .controller('ButtonController', ButtonController)
  .config(routing)
  .name;

