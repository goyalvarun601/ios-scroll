// Include gulp
var gulp = require('gulp');

var nodemon = require('gulp-nodemon');

gulp.task('css-watcher', function () {
    return gulp.watch('src/test.css', function () {
        gulp.start('copyCSS');
    });
});

gulp.task('html-watcher', function () {
    return gulp.watch('src/*.html', function () {
        gulp.start('copyHTML');
    });
});

gulp.task('serve', function () {
  nodemon({
    script: 'server/server.js',
    ext: 'js html css'
  });
});

gulp.task('copyHTML', function(){
  return gulp.src('src/*.html')
    .pipe(gulp.dest('tmp'));
});

gulp.task('copyCSS', function(){
  return gulp.src('src/test.css')
    .pipe(gulp.dest('tmp'));
});

// Default Task
gulp.task('default', ['copyCSS', 'copyHTML', 'css-watcher', 'html-watcher', 'serve']);