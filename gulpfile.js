var gulp = require('gulp');
var filter = require('gulp-filter');
var kclean = require('gulp-kclean');
var modulex = require('gulp-modulex');
var path = require('path');
var rename = require('gulp-rename');
var packageInfo = require('./package.json');
var src = path.resolve(process.cwd(), 'lib');
var build = path.resolve(process.cwd(), 'build');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var jscs = require('gulp-jscs');
var replace = require('gulp-replace');
var wrapper = require('gulp-wrapper');
var date = new Date();
var header = ['//!',
        'Copyright ' + date.getFullYear() + ', ' + packageInfo.name + '@' + packageInfo.version,
        packageInfo.license + ' Licensed,',
        'build time: ' + (date.toGMTString()),
    '\n'].join(' ');
    
gulp.task('tag',function(done){
    var cp = require('child_process');
    var version = packageInfo.version;
    cp.exec('git tag '+version +' | git push origin '+version+':'+version+' | git push origin master:master',done);
});

gulp.task('lint', function () {
    return gulp.src('./lib/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter('fail'))
        .pipe(jscs());
});

gulp.task('clean', function () {
    return gulp.src(build, {
        read: false
    }).pipe(clean());
});

gulp.task('build', ['lint'], function () {
    return gulp.src('./lib/ua.js')
        .pipe(modulex({
            modulex: {
                packages: {
                    ua: {
                        base: path.resolve(src, 'ua')
                    }
                }
            }
        }))
        .pipe(replace(/@VERSION@/g, packageInfo.version))
        .pipe(wrapper({
                    header: header
                }))
        .pipe(gulp.dest(build))
        .pipe(filter('ua-debug.js'))
        .pipe(replace(/@DEBUG@/g, ''))
		.pipe(uglify({
			preserveComments: 'some'
		 }))
        .pipe(rename('ua.js'))
        .pipe(gulp.dest(build));
});

gulp.task('default', ['build']);
