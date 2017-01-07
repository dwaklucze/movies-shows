var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('server', function() {
    nodemon({
        script: 'server.js',
        ext: 'js json',
        ignore: [
            'node_modules/',
            'src/',
            'dist/',
            'tasks/',
        ],
        stdout: true,
        readable: false
    })
})
