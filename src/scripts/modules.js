import angular from 'angular';
import UserModule from './User/_UserModule';

export default angular.module('app.modules', [
  UserModule.name
]);
