import angular from 'angular';

import UserService from './UserService';
import * as UserComponent from './UserComponent';
import UserCtrl from './UserCtrl';

export default angular.module('app.user', [])
    .controller('UserCtrl', UserCtrl)
    .service('UserService', UserService)
    .component('register', UserComponent.Register)
    .component('login', UserComponent.Login);
