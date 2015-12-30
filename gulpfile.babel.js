import gulp from 'gulp';
import babel from 'gulp-babel';
import eslint from 'gulp-eslint';
import rename from 'gulp-rename';

gulp.task('lint', () => {
  return gulp.src([
    './src/**/*.*'
  ])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('build', () => {
  return gulp.src('./src/**/*.*')
  .pipe(babel({
    presets: [
      'es2015',
      'react'
    ]
  }))
  .pipe(rename(function (path) {
    path.dirname = '';
    path.extname = '.js';
    return path;
  }))
  .pipe(gulp.dest('./dist/'))
});

gulp.task('debug', ['build'], () => {
  gulp.watch('./src/**/*', ['build']);
});