var inject          = require('gulp-inject'),
    gulp 		    = require('gulp'),
    browserify 	    = require('browserify'),
    babelify 	    = require('babelify'),
    source 		    = require('vinyl-source-stream'),
    concat 		    = require('gulp-concat'),
    minify          = require('gulp-minify');



var jsLibs = [
  './node_modules/jquery/dist/jquery.js',
  './node_modules/react/dist/react-with-addons.js',
  './node_modules/react-dom/dist/react-dom.min.js'
];
var cssLibs = [
  './node_modules/bootstrap/dist/css/bootstrap.css'
];




gulp.task('libraries', function () {
    gulp.src(jsLibs)
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('./www/js/'));

    gulp.src(cssLibs)
        .pipe(gulp.dest('./www/css/'));
});





gulp.task('build', function () {
    gulp
        .src('./src/index.html')
        .pipe(gulp.dest('./www/'));

    browserify({entries: './src/app.jsx', extensions: ['.jsx','.js'], debug: false})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./www/js/'));
});


gulp.task('default', ['build','libraries'], function () {
    gulp.watch(['./src/**/**/*'], ['build']);
});

