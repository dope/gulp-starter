/*=============================================
=            Gulp Starter by @dope            =
=============================================*/
/**
*
* The packages we are using
* Not using gulp-load-plugins as it is nice to see whats here.
*
**/
import gulp from 'gulp';
import sass from 'gulp-sass';
import browserSync from 'browser-sync';
import prefix from 'gulp-autoprefixer';
import plumber from 'gulp-plumber';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import babel from 'gulp-babel';
/**
*
* Styles
* - Compile
* - Compress/Minify
* - Catch errors (gulp-plumber)
* - Autoprefixer
*
**/
gulp.task('sass', () => {
	gulp
		.src('sass/**/*.scss')
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(prefix('last 2 versions', '> 1%', 'ie 8', 'Android 2', 'Firefox ESR'))
		.pipe(plumber())
		.pipe(gulp.dest('css'));
});
/**
*
* BrowserSync.io
* - Watch CSS, JS & HTML for changes
* - View project at: localhost:3000
*
**/
gulp.task('browser-sync', () => {
	browserSync.init([
		'css/*.css', 'js/**/*.js', 'index.html'
	], {
		server: {
			baseDir: './'
		}
	});
});
/**
*
* Javascript
* - Uglify
*
**/
gulp.task('scripts', () => {
	gulp
		.src('js/*.js')
		.pipe(babel({presets: ['es2015']}))
		.pipe(uglify())
		.pipe(rename({dirname: "min", suffix: ".min"}))
		.pipe(gulp.dest('js'))
});
/**
*
* Images
* - Compress them!
*
**/
gulp.task('images', () => {
	return gulp
		.src('images/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [
				{
					removeViewBox: false
				}
			],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('images'));
});
/**
*
* Default task
* - Runs sass, browser-sync, scripts and image tasks
* - Watchs for file changes for images, scripts and sass/css
*
**/
gulp.task('default', [
	'sass', 'browser-sync', 'scripts', 'images'
], () => {
	gulp.watch('sass/**/*.scss', ['sass']);
	gulp.watch('js/**/*.js', ['scripts']);
	gulp.watch('images/*', ['images']);
});
