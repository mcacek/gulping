var gulp = require('gulp');
var requiredir = require('require-dir');

requiredir('gulp/tasks');

gulp.task('default', function() {
  console.log('doing it');
});

gulp.task('build', 
  [
    'build-scripts',
    'build-styles',
    'build-public',
  ]
);
