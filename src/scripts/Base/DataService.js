/* scripts/Base/MainCtrl.js */

export class DataService {

  'ngInject';

  constructor() {
    this.data = {};
  }

  setData(key, value) {
    this.data[key] = value;
  }

  getData(key) {
    if (!key.length) {
      return this.data;
    }

    return this.data[key];
  }

}

DataService.$inject = [];
