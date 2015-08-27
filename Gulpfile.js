var gulp = require('gulp');
var jshint = require("gulp-jshint");
var $ = require('gulp-load-plugins')();


gulp.task('jshint', function () {
  return gulp.src(["!Gulpfile.js",'./*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch',function(){
  gulp.watch(['./js/*'], ['jshint']);
});



gulp.task('default',['watch']);
