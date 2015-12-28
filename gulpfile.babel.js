import gulp from 'gulp';

const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const rename = require('gulp-rename');

gulp.task('lint', () => {
  return gulp.src([
    './src/**/*.*'
  ])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('build', () => {
  return gulp.src('./src/index.jsx')
  .pipe(babel({
    presets: [
      'es2015',
      'react'
    ]
  }))
  .pipe(rename('index.js'))
  .pipe(gulp.dest('./dist/'))
});