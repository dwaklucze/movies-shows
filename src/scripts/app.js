/* scripts/app.js */

import angular from 'angular';
import config from './config.json';
import routes from './routes';

import base from './base';

import controllers from './Controllers';
import components from './Components';
import directives from './Directives';

import templates from './templateCache';
import uiRouter from 'angular-ui-router';

window.ENVIRONMENT = config.env;

window.app = angular.module(config.appname, [
        base.name,
        controllers.name,
        components.name,
        directives.name,
        templates.name,
        uiRouter
    ])
    .config(routes)
    .constant('API', config.API);

export
default angular.element(document.querySelector('html')).ready(() => {

    angular.bootstrap(document, [config.appname], {
        strictDi: true
    });
});

