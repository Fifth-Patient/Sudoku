const gulp = require('gulp');
const webpack = require('webpack-stream');
const less = require('gulp-less');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const config = require('./webpack.config.js');

// 转译Javascript
gulp.task('webpack', () => {
  gulp.src('./src/js/**/*.js')
    .pipe(webpack(config))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(browserSync.stream())
})

// 编译less=> css
gulp.task('less', () => {
  gulp.src('./src/less/main.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.stream())
})

gulp.task('watch', () => {
  gulp.watch('./src/less/**/*.less', ['less']);
  gulp.watch('./src/js/**/*.js', ['webpack']);
})

gulp.task('default', ['webpack', 'less']);

gulp.task('server', ['webpack', 'less'], () => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
  gulp.watch('./src/js/**/*.js', ['webpack']);
  gulp.watch('./src/less/*.less', ['less']);

})
