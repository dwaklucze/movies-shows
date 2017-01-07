var gulp = require('gulp');


require('require-dir')('tasks');

gulp.task('build', ['javascript', 'styles'], function() {});

gulp.task('default', ['watch'], function() {

});
