/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync').create();
    sass = require('gulp-sass');

// create a default task and just log a message
gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "app/"
    });

    gulp.watch("app/styles/scss/*.scss", ['sass']);
    gulp.watch(["app/index.html", "app/assets/views/*.html"]).on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/styles/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/styles/css/"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
