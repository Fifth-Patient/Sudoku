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
    .pipe(gulp.dest('./www/js/'))
})

// 编译less=> css
gulp.task('less', () => {
  gulp.src('./src/less/main.less')
    .pipe(less())
    .pipe(gulp.dest('./www/css/'))
})

gulp.task('watch', () => {
  gulp.watch('./src/less/**/*.less', ['less']);
  gulp.watch('./src/js/**/*.js', ['webpack']);
})

gulp.task('default', ['webpack', 'less']);

// gulp.task('server', ['webpack', 'less'], () => {
//   browserSync({
//     server: {
//       baseDir: './'
//     }
//   })
//   gulp.watch('./src/js/**/*.js', ['webpack'], reload);
//   gulp.watch('./src/less/*.less', ['less'], reload);
// })
