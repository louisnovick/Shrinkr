var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
 
gulp.task('images-opt', function () {
    gulp.src('images/*/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('shrinkr'));
});

gulp.task('default', ['images-opt']);