var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sassLint = require('gulp-sass-lint'),
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    concat = require('gulp-concat'),
    merge = require('merge-stream'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename');


gulp.task('styles:lint', function() {
    return gulp.src(['src/styles/variables.scss', 'src/styles/**/*.s+(a|c)ss'])
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
})
gulp.task('styles', ['styles:lint'], function() {
    var sassStream,
        cssStream,
        processors = [autoprefixer({ browsers: ['last 3 versions', 'iOS >= 7', 'Safari >= 7'] })];

    return gulp.src([
            'src/styles/main.scss',
        ])
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css/'));

})
