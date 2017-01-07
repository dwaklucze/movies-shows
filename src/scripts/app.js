import angular from 'angular';
import config from './config.json';
import routes from './routes';

import modules from './modules';

import templates from './templateCache';
import uiRouter from 'angular-ui-router';

window.isDebugMode = config.env;

window.app = angular.module(config.appname, [
        uiRouter,
        templates.name,
        modules.name
    ])
    .config(routes);

export
default angular.element(document.querySelector('html')).ready(() => {

    angular.bootstrap(document, [config.appname], {
        strictDi: true
    });
});

