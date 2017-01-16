import angular from 'angular';
import { MoviesListComponent } from './MoviesListComponent';
import { SearchComponent } from './SearchComponent';
import { DropdownListComponent } from './DropdownListComponent';
import { RatingComponent } from './RatingComponent';

export default angular.module('app.components', [])
  .component('moviesList', MoviesListComponent)
  .component('dropdownList', DropdownListComponent)
  .component('rating', RatingComponent)
  .component('searchComponent', SearchComponent);
