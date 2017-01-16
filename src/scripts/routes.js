/* scripts/routes.js */

const routes = ($stateProvider, $locationProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: 'home.html'
  })
  .state('main.details', {
    url: ':slug',
    params: {
      imdbID: null,
      Title: null,
      type: null
    },
    controller: 'DisplayItemCtrl',
    controllerAs: '$details',
    templateUrl: 'details.html',
    resolve: {
      '': ($stateParams, DataService, QueryService) => {
        DataService.setData('currentlyViewed', $stateParams);

        if (!$stateParams.Title) {
          $stateParams.Title = QueryService
          .resolveSlug(DataService.data.currentlyViewed.slug);
        }

        return QueryService.getDetails($stateParams).then((movie) => {
          DataService.setData('currentlyViewed', movie);
        });
      }
    }
  })
  ;

  $locationProvider.html5Mode(true);
};

routes.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
export default routes;
