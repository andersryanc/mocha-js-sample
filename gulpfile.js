var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('default', ['watchJs', 'watchTests']);

// make sure you do not start a path with ./
// there's some bug in gaze that causes globs with ./ to not fire
var unitTestPaths = ['test/**/*.js'];
var jsPaths = ['src/**/*.js'];

function mochaPipe() {
  // short test: 'nyan'
  // long test: 'spec'
  return $.mocha({ reporter: 'nyan' });
}

gulp.task('watchJs', function() {
  $.watch(jsPaths, function() {
    gulp.start('allUnitTests');
  });
});

gulp.task('watchTests', function() {
  $.watch(unitTestPaths, function() {
    gulp.start('allUnitTests');
  });
});

gulp.task('allUnitTests', function() {
  return gulp.src(unitTestPaths, { read: false })
    .pipe( mochaPipe() );
});
