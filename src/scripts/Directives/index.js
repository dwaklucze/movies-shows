import angular from 'angular';
import ThemeColorDirective from './ThemeColorDirective';

export default angular.module('app.directives', [])
  .directive('themeColor', ThemeColorDirective)
  ;

