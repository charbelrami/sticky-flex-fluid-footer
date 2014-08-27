'use strict';

var gulp = require('gulp');
var changed = require('gulp-changed');
var prefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var size = require('gulp-size');

var SRC = 'src/*.css';
var DEST = 'dist';

gulp.task('default', function () {
  return gulp.src(SRC)
    .pipe(changed(DEST))
    .pipe(prefix())
    .pipe(minifyCSS())
    .pipe(rename({extname: '.prefixed.min.css'}))
    .pipe(size())
    .pipe(gulp.dest(DEST));
});
