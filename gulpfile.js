const gulp = require('gulp');
const sass = require('sass');
const gulpSass = require('gulp-sass');

const scssCompiler = gulpSass(sass);

gulp.task('styles', () => {
    return gulp.src('./scss/task2.scss')
        .pipe(scssCompiler().on('error', scssCompiler.logError))
        .pipe(gulp.dest('./css'))
})