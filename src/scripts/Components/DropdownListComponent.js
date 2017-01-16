class Controller {
  constructor(DataService, $state, QueryService) {

    this.DataService = DataService;
    this.QueryService = QueryService;
    this.$state = $state;
  }

  $onInit() {

  }

    goTo($item) {
      $item.slug = this.QueryService.createSlug($item.Title);
      this.DataService.setData(this.model, $item);

      if (!this.stateParams) {
        this.$state.go(this.state);
      }

      this.$state.go(this.state, this.DataService.data[this.model]);

    }

}

Controller.$inject = ['DataService', '$state', 'QueryService'];

export const DropdownListComponent = {
  template: `<ul class="dropdown-list bg-col-white w-12">
              <li ng-repeat="movie in ::$ctrl.data track by $index">
                <a ng-click="::$ctrl.goTo(movie)" ng-include="$ctrl.template">
                </a>`,
  controller: Controller,
  transclude: true,
  bindings: {
    data: '=',
    model: '<',
    value: '<',
    state: '<',
    stateParams: '<',
    template: '<'
  }
};
