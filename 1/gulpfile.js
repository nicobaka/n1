var gulp = require('gulp');
less = require('gulp-less');
var jsdoc = require('gulp-jsdoc3');
babel = require('gulp-babel');


gulp.task('less', function(){
    gulp.src('src/less/styles.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'))
});
gulp.task('babel', function(){
    gulp.src('src/js/classSlider.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist/js'))
});
gulp.task('jsdoc', function () {//задача для галпа создания jsdoc
    gulp.src(['README.md', 'src/js/classSlider.js'])
        .pipe(jsdoc())
});
