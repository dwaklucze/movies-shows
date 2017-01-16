class Controller {
    constructor() {
      this.generateStars = (length) => {
        return new Array(length);
      };
    }

    $onInit() {
      this.percentage = (parseFloat(this.stars) * this.maxStars)
      .toLocaleString();
      this.max = parseFloat(this.stars).toFixed();

      this.initialStars = this.generateStars(this.maxStars);
    }


}

Controller.$inject = [];

export const RatingComponent = {
  templateUrl: 'components/rating.html',
  bindings: {
    votes: '=',
    stars: '=',
    maxStars: '=',
  },
  controller: Controller
};

