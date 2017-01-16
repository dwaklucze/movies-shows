/* scripts/Base/MainCtrl.js */

export class QueryService {

  'ngInject';

  constructor(API, $http) {
    this.API = API;
    this.$http = $http;
    this.data = {};
  }

  getDetails(obj) {

    const request = `${this.API}?t=${obj.slug}`;
    const data = this.data;

    return this.$http
      .get(request)
      .then((res) => {
        return Object.assign(data, res.data);
      });
  }

  getByName(name) {

    const request = `${this.API}?s=${name}`;
    const data = this.data;

    return this.$http
      .get(request)
      .then((res) => {
        return Object.assign(data, res.data);
      });
  }

  createSlug(Text) {
      return Text
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
  }

  resolveSlug(Text) {
    return Text.replace(/-/g, ' ');
  }

}

QueryService.$inject = ['API', '$http'];
