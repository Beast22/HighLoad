'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const watch = require('gulp-watch');

gulp.task('sass', function(){
	return gulp.src('src/sass/*.scss')
	.pipe(sass())
	.pipe(autoprefixer({
		browsers: ['last 10 versions', '> 2%'],
		cascade: false
	}))
	.pipe(gulp.dest('dist/css'));
});

gulp.task('clean', function(){
	return del ('dist');

});

gulp.task('assets', function(){
	return gulp.src(['src/**/*', '!src/sass', '!src/sass/*.scss'])
	.pipe(gulp.dest('dist'));

});

gulp.task('build', gulp.series('clean', 
	gulp.parallel('sass','assets'))
);

gulp.watch('src/sass/*.scss', gulp.series('sass'));




