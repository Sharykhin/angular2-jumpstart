const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const gulpif = require('gulp-if');
const tscConfig = require('./tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');
const tslint = require('gulp-tslint');
const tsconfig = require('tsconfig-glob');
const less = require('gulp-less');
const path = require('path');
const LessPluginCleanCSS = require('less-plugin-clean-css');
const cleancss = new LessPluginCleanCSS({
	advanced: true
});
const cleanCSS = require('gulp-clean-css');

const ENV = process.env.NODE_ENV;
const DEV_ENV = ENV !== 'production';

// clean the contents of the distribution directory
gulp.task('clean', function() {
	return del('public/**/*');
});

gulp.task('tsconfig-glob', function() {
	return tsconfig({
		configPath: '.',
		indent: 2
	});
});

// TypeScript compile
gulp.task('compile', ['tslint'], function() {
	return gulp
		.src('src/app/**/*.ts')
		.pipe(gulpif(DEV_ENV, sourcemaps.init())) // <--- sourcemaps
		.pipe(typescript(tscConfig.compilerOptions))
		.pipe(gulpif(DEV_ENV, sourcemaps.write('.'))) // <--- sourcemaps
		.pipe(gulp.dest('public/app'));
});

gulp.task('tslint', function() {
	return gulp.src('src/app/**/*.ts')
		.pipe(tslint())
		.pipe(tslint.report('verbose'));
});

gulp.task('copy:libs', function() {
	return gulp.src([
			'node_modules/angular2/bundles/angular2-polyfills.js',
			'node_modules/systemjs/dist/system.src.js',
			'node_modules/rxjs/bundles/Rx.js',
			'node_modules/angular2/bundles/angular2.dev.js',
			'node_modules/angular2/bundles/router.dev.js',
			'node_modules/angular2/bundles/http.dev.js'
		])
		.pipe(gulp.dest('public/libs'))
});

gulp.task('copy:app_assets', function() {
	gulp.src(['src/app/**/*.less'])
		.pipe(less({
			plugins: [cleancss]
		}))
		.pipe(gulp.dest('public/app'));

	return gulp.src(['src/app/**/*.html', 'src/app/**/*.css'])
		.pipe(gulp.dest('public/app'))
});

gulp.task('copy:assets', function() {
	gulp.src(['src/assets/css/**/*.css'])
		.pipe(cleanCSS())
		.pipe(gulp.dest('public/css'));

	gulp.src(['src/assets/less/**/*.less'])
		.pipe(less({
			paths: [path.join(__dirname, 'less', 'includes')],
			plugins: [cleancss]
		}))
		.pipe(gulp.dest('public/css'));
});

gulp.task('copy:index', function() {
	return gulp.src(['src/index.html'])
		.pipe(gulp.dest('public'))
});

gulp.task('watch', ['build'], function() {
	gulp.watch(['src/index.html'], ['copy:index']);

	gulp.watch(['src/app/**/*.html', 'src/app/**/*.css', 'src/app/**/*.less'], ['copy:app_assets']);

	gulp.watch(['src/assets/**/*.css', 'src/app/**/*.less'], ['copy:assets']);

	gulp.watch(['src/app/**/*.ts'], ['compile']);

});

gulp.task('build', ['compile', 'copy:libs', 'copy:app_assets', 'copy:index', 'copy:assets']);
gulp.task('default', ['build']);