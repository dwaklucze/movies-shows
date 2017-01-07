var gulp = require('gulp');

gulp.task('watch', ['build', 'server'], function() {
    gulp.watch(['src/scripts/**/*.*', '!src/scripts/templateCache.js'], ['javascript']);
    gulp.watch('src/templates/**/*.*', ['javascript']);
    gulp.watch('src/styles/**/*.*', ['styles']);
});
