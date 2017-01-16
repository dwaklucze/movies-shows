
class Controller {
  constructor(QueryService, $timeout) {
    this.QueryService = QueryService;
    this.$timeout = $timeout;
    this.search = '';
    this.error = '';
    this.suggestions = {};


    this.resetData = () => {
        this.error = '';
        this.suggestions = {};
    };
  }

  $onInit() {
    this.suggestions = {};
    this.isSuggestionClosed = true;
    this.error = '';
    this.closeDelay = 250;
  }

  hideSuggestions() {
    this.$timeout(() => {
      this.isSuggestionClosed = true;
    }, this.closeDelay);
  }

  // get suggestions
  getList() {

    if (this.search.length <= this.minChars) {

      this.error = `Minimum ${this.minChars} characters!`;

      if (!this.search.length) {
        this.resetData();
      }
      return;
    }

    this
      .QueryService
        .getByName(this.search).then((res) => {

          // reset output and errors on change
          this.resetData();

            // if we received an error, then stop and pass error
            if (res.Error) {
              this.error = res.Error;
              return;
            }

            // succes -> pass to view
            this.suggestions = res.Search;
    });

  }
}
Controller.$inject = ['QueryService', '$timeout'];

export const SearchComponent = {
  templateUrl: 'components/searchbox.html',
  bindings: {
    minChars: '<',
  },
  controller: Controller
};

