var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function (done) {
    gulp.src("./resources/assets/sass/style.sass")
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/css'));
    done()
});


gulp.task('watch', function () {
   gulp.watch('resources/assets/sass/**/*.sass', ['sass']);
});