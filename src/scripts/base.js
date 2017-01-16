/* scripts/modules.js */

import angular from 'angular';
import { MainCtrl } from './Base/MainCtrl';
import { QueryService } from './Base/QueryService';
import { DataService } from './Base/DataService';

export default angular.module('app.base', [])
  .controller('MainCtrl', MainCtrl)
  .service('DataService', DataService)
  .service('QueryService', QueryService);
