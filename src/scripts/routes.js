const routes = ($stateProvider, $locationProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true);
};

routes.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
export default routes;
