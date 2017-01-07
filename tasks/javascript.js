var gulp = require('gulp'),
    gutil = require('gulp-util'),
    clean = require('gulp-clean'),
    strip = require('gulp-strip-comments'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    eslint = require('gulp-eslint'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify'),
    config = require('../src/scripts/config.json'),
    sourcemaps = require('gulp-sourcemaps');


gulp.task('lint', ['templates'], function() {
    return gulp.src(['./src/scripts/' + '**/*.js', '!node_modules/**', '!src/scripts/templateCache.js'])
        .pipe(eslint())
        .pipe(eslint.format())
      //  .pipe(eslint.failAfterError());
});

gulp.task('javascript', ['lint'], function() {
    var entryPoint = './src/scripts/';

    return browserify({
            entries: entryPoint + 'app.js',
            debug: true
        })
        .transform(babelify)
        .bundle()
        .pipe(source('ng-app.js'))
        .pipe(buffer())
        .pipe(config.env !== 'dev' ? uglify() : gutil.noop())
        .pipe(config.env !== 'dev' ? strip() : gutil.noop())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/js'))
        .on('end', function() {
            return gulp.start('clean:js');
        });
});


gulp.task('clean:js', function() {
    return gulp.src('src/scripts/templateCache.js')
        .pipe(clean({ force: true }));

});
