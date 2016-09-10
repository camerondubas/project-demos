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

// Components
import navbar from './components/navbar';
import demoContainer from './components/demo-container';
import button from './components/button';
import tile from './components/tile';
import loader from './components/loader';
import code from './components/code';

// Static
import './static';

// Styles
import './components/style.scss';

angular.module('app',
  [
    uirouter,
    ngResource,

    services,
    views,

    navbar,
    demoContainer,
    button,
    tile,
    loader,
    code
  ])
.config(config)
.config(routing);
