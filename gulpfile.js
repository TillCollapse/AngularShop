// gulp
var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');

// tasks
gulp.task('lint', function() {
  gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});
gulp.task('connect', function () {
  connect.server({
    root: 'app/',
    port: 8888,
    //livereload: true
  });
    //connect.serverClose();
});


gulp.task('default', ['connect', 'lint']);