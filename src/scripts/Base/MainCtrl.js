/* scripts/Base/MainCtrl.js */

export class MainCtrl {

  'ngInject';

  constructor(DataService) {
    this.data = DataService.data;
  }

  $onInit() {
    this.data = this.result;
  }

}

MainCtrl.$inject = ['DataService'];
