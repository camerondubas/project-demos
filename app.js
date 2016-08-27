// Core
import * as angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';

// Functionality
import services from './services';

// Views
import views from './views';

// Local
import config from './app.config';
import routing from './app.routes';

// Static
import './static';

// Styles
import './ui/style.scss';

angular.module('app',
  [
    uirouter,
    ngResource,

    services,
    views
  ])
.config(config)
.config(routing);
