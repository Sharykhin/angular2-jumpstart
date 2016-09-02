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
const DIST_DIR = '.';

// clean the contents of the distribution directory
gulp.task('clean', function() {
	del(`${DIST_DIR}/css`);
	return del(`${DIST_DIR}/app`);
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
		.pipe(gulp.dest(`${DIST_DIR}/app`));
});

gulp.task('tslint', function() {
	return gulp.src(`src/app/**/*.ts`)
		.pipe(tslint())
		.pipe(tslint.report('verbose'));
});

gulp.task('copy:libs', function() {
	 gulp.src([
			'node_modules/core-js/client/shim.min.js',
			'node_modules/zone.js/dist/zone.js',
			'node_modules/reflect-metadata/Reflect.js',
			'node_modules/systemjs/dist/system.src.js'
		])
		.pipe(gulp.dest(`${DIST_DIR}/libs`));

	return gulp.src(['./systemjs.config.js'])
			.pipe(gulp.dest(`${DIST_DIR}`));
});

gulp.task('copy:app_assets', function() {
	gulp.src(['src/app/**/*.less'])
		.pipe(less({
			plugins: [cleancss]
		}))
		.pipe(gulp.dest(`${DIST_DIR}/app`));

	return gulp.src(['src/app/**/*.html', 'src/app/**/*.css'])
		.pipe(gulp.dest(`${DIST_DIR}/app`))
});

gulp.task('copy:assets', function() {
	gulp.src(['src/assets/css/**/*.css'])
		.pipe(cleanCSS())
		.pipe(gulp.dest(`${DIST_DIR}/css`));

	gulp.src(['src/assets/less/**/*.less'])
		.pipe(less({
			paths: [path.join(__dirname, 'less', 'includes')],
			plugins: [cleancss]
		}))
		.pipe(gulp.dest(`${DIST_DIR}/css`));
});

gulp.task('copy:index', function() {
	return gulp.src(['index.html'])
		.pipe(gulp.dest(`${DIST_DIR}`))
});

gulp.task('watch', ['build'], function() {
	gulp.watch(['index.html'], ['copy:index']);

	gulp.watch(['app/**/*.html', 'app/**/*.css', 'app/**/*.less'], ['copy:app_assets']);

	gulp.watch(['assets/**/*.css', 'app/**/*.less'], ['copy:assets']);

	gulp.watch(['app/**/*.ts'], ['compile']);

});

gulp.task('build', ['compile', 'copy:app_assets', 'copy:assets']);
gulp.task('default', ['build']);