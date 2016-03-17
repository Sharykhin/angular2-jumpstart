const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');

// clean the contents of the distribution directory
gulp.task('clean', function() {
	return del('public/**/*');
});

// TypeScript compile
gulp.task('compile', ['clean'], function() {
	return gulp
		.src('src/app/**/*.ts')
		.pipe(sourcemaps.init()) // <--- sourcemaps
		.pipe(typescript(tscConfig.compilerOptions))
		.pipe(sourcemaps.write('.')) // <--- sourcemaps
		.pipe(gulp.dest('public/app'));
});

gulp.task('copy:libs', function() {
	return gulp.src([
			'node_modules/angular2/bundles/angular2-polyfills.js',
			'node_modules/systemjs/dist/system.src.js',
			'node_modules/rxjs/bundles/Rx.js',
			'node_modules/angular2/bundles/angular2.dev.js',
			'node_modules/angular2/bundles/router.dev.js'
		])
		.pipe(gulp.dest('public/libs'))
});

gulp.task('copy:assets', function() {
	return gulp.src(['src/app/**/*', '!app/**/*.ts'], {
			base: './'
		})
		.pipe(gulp.dest('public'))
});

gulp.task('build', ['compile'
	'copy:libs', 'copy:assets'
]);
gulp.task('default', ['build']);