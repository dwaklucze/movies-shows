// import angular from 'angular';

const Directive = ($timeout, DataService) => {
  'ngInject';

  return {
    restrict: 'A',
    link($scope) {
      $scope.$watch((newValue) => {
        if (!newValue) {
          return;
        }

        const data = DataService.data.currentlyViewed;


        if (data && data.Type) {

            const className = (data.Type === 'series') ? 'red' : 'green';

            $scope.colorTheme = className;

            DataService.setData('currentTheme', className);
        }

      });
    }
  };

};

Directive.$inject = ['$timeout', 'DataService'];

export default Directive;
