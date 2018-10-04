const gulp = require('gulp');
const less = require('gulp-less');
const imagemin = require('gulp-imagemin');
const config = require('./webpack.config.js');
const webpack = require('webpack-stream');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

// 转译Javascript
gulp.task('webpack', () => {
  return gulp.src('./src/js/**/*.ts')
    .pipe(webpack(config))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(browserSync.stream())
})

// 编译less=> css
gulp.task('less', () => {
  return gulp.src('./src/less/main.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.stream())
})

gulp.task('img', () => {
  gulp.src('./src/img/*.jpg')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'))
    .pipe(browserSync.stream())
})

gulp.task('default', ['webpack', 'less', 'img']);

gulp.task('server', ['webpack', 'less', 'img'], () => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
  gulp.watch('./src/js/**/*.js', ['webpack']);
  gulp.watch('./src/less/*.less', ['less']);

})
