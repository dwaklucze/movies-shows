var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    sassLint = require('gulp-sass-lint'),
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    concat = require('gulp-concat'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename');


gulp.task('styles:lint', function() {
    return gulp.src([
            'src/styles/variables.scss',
            '!src/styles/base/reset.scss',
            'src/styles/**/*.s+(a|c)ss'
        ])
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
})
gulp.task('styles', ['styles:lint'], function() {
    var sassStream,
        cssStream,
        processors = [autoprefixer({
            browsers: [
                'last 3 versions',
                'iOS >= 7',
                'Safari >= 7'
            ]
        }),
        require('postcss-grouper'),
        require('postcss-fixes')(),
        require('postcss-flexbugs-fixes'),
        require('css-mqpacker'),
        require('postcss-zindex'),
        require('postcss-convert-values'),
        require('postcss-ordered-values'),
        require('postcss-merge-rules'),
        require('postcss-merge-longhand'),
        require('postcss-discard-duplicates'),
        require('postcss-discard-empty'),
        ];

    return gulp.src([
            'src/styles/main.scss',
        ])
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write({includeContent: false, sourceRoot: 'src/styles'}))
        .pipe(gulp.dest('dist/css/'));

})
