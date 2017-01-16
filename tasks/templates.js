var gulp = require('gulp'),
    pug = require('gulp-pug'),
    templateCache = require('gulp-angular-templatecache');
/* templates */

gulp.task('jade', function() {

    return gulp.src('src/templates/**/*.jade')
        .pipe(pug({
            pretty: false
        }))
        .pipe(gulp.dest('./dist/templates'));
});

gulp.task('templates', ['jade'], function() {
    return gulp.src([
            '!dist/templates/index.html',
            'dist/templates/**/*.html'
        ])
        .pipe(templateCache('templateCache.js', {
            module: 'templateCache',
            standalone: true,
            moduleSystem: 'ES6'

        }))
        .pipe(gulp.dest('src/scripts/'));
});
