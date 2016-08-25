// Core
import * as angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';

// Views
import views from './views';

// Local
import routing from './app.config';

// Static
import './static';

angular.module('app',
  [
    uirouter,
    ngResource,

    views
  ])
  .config(routing);
