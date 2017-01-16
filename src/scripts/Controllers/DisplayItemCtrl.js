class Controller {
  constructor(DataService, $log) {
    this.DataService = DataService;
    this.$log = $log;
  }
  $onInit() {
    const divide = 60;
    const minusOne = -1;

    this.$log.info(this.DataService);
    this.item = this.DataService.data.currentlyViewed;
    const isFullDate = this.item.Runtime.indexOf('h');


    this.fullTime = (isFullDate > minusOne) ? this.item.Runtime : false;

    this.item.hours = Math.floor(parseFloat(this.item.Runtime) / divide);
    this.item.mins = parseFloat(this.item.Runtime) % divide;
  }
}

Controller.$inject = ['DataService', '$log'];

export default Controller;
