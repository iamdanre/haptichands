var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass')); // Initialize gulp-sass with Dart Sass
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
// var pkg = require('./package.json'); // Commented out due to missing package.json
var browserSync = require('browser-sync').create();

// Set the banner content
// var banner = ['/*!\n',
//   ' * Start Bootstrap - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
//   ' * Copyright 2013-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
//   ' * Licensed under <%= pkg.license %> (https://github.com/BlackrockDigital/<%= pkg.name %>/blob/master/LICENSE)\n',
//   ' */\n',
//   '\n'
// ].join(''); // Commented out due to missing package.json

// Copy third party libraries from /node_modules into /vendor
gulp.task('vendor', function() {

  // Bootstrap
  gulp.src([
      './node_modules/bootstrap/dist/**/*',
      '!./node_modules/bootstrap/dist/css/bootstrap-grid*',
      '!./node_modules/bootstrap/dist/css/bootstrap-reboot*'
    ])
    .pipe(gulp.dest('./vendor/bootstrap'))

  // Font Awesome 5
  gulp.src([
      './node_modules/@fortawesome/**/*'
    ])
    .pipe(gulp.dest('./vendor'))

  // jQuery
  gulp.src([
      './node_modules/jquery/dist/*',
      '!./node_modules/jquery/dist/core.js'
    ])
    .pipe(gulp.dest('./vendor/jquery'))

  // jQuery Easing
  gulp.src([
      './node_modules/jquery.easing/*.js'
    ])
    .pipe(gulp.dest('./vendor/jquery-easing'))

  // Simple Line Icons
  gulp.src([
      './node_modules/simple-line-icons/fonts/**',
    ])
    .pipe(gulp.dest('./vendor/simple-line-icons/fonts'))

  gulp.src([
      './node_modules/simple-line-icons/css/**',
    ])
    .pipe(gulp.dest('./vendor/simple-line-icons/css'))

});

// Compile SCSS
gulp.task('css:compile', function() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass({ // Use sass() instead of sass.sync()
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    // .pipe(header(banner, { // Commented out due to missing package.json
    //   pkg: pkg
    // }))
    .pipe(gulp.dest('./css'))
});

// Minify CSS
gulp.task('css:minify', gulp.series('css:compile', function() {
  return gulp.src([
      './css/*.css',
      '!./css/*.min.css'
    ])
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
})); // Corrected: removed extra parenthesis

// CSS
gulp.task('css', gulp.series('css:compile', 'css:minify'));

// Minify JavaScript
// No dependencies, so function directly is fine
gulp.task('js:minify', function() {
  return gulp.src([
      './js/*.js',
      '!./js/*.min.js'
    ])
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    // .pipe(header(banner, { // Commented out due to missing package.json
    //   pkg: pkg
    // }))
    .pipe(gulp.dest('./js'))
    .pipe(browserSync.stream());
});

// JS - js:minify is the only JS task here, so it can be an alias or series
gulp.task('js', gulp.series('js:minify'));

// Default task
gulp.task('default', gulp.parallel('css', 'js', 'vendor')); // css & js can run in parallel with vendor

// Configure the browserSync task
// No dependencies, so function directly is fine
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

// Dev task
gulp.task('dev', gulp.series(gulp.parallel('css', 'js'), 'browserSync', function(done) {
  gulp.watch('./scss/**/*.scss', gulp.series('css')); // Ensure css task is called
  gulp.watch('./js/**/*.js', gulp.series('js')); // Ensure js task is called
  gulp.watch('./*.html', browserSync.reload);
  done(); // Signal completion of the dev task setup
})); // Reverted to correct closing for gulp.task(name, gulp.series(...))
