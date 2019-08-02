var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");



// Minify CSS
gulp.task('css', function() {
  return gulp.src([
      './*.css',
      '!./*.min.css'
    ])
    .pipe(cleanCSS({compatibility: 'ie9', advanced: false}))

    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./'))
});


// Dev task
gulp.task('watch-css', ['css'], function() {
  gulp.watch([ './*.css'], ['css']);
});
