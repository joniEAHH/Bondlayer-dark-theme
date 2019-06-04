var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");



// Minify CSS
gulp.task('css', function() {
  return gulp.src([
      './*.css',
      '!./*.min.css'
    ])
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./'))
});




// Default task
gulp.task('default', ['css', 'js']);



// Dev task
gulp.task('dev', ['css'], function() {
  gulp.watch([ './*.css'], ['css']);

});



