var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
    return gulp.src('./temp/scss/style.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
	.pipe(autoprefixer())
        .pipe(gulp.dest('./assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./temp/scss/**/*.scss', ['styles']);
    gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', ['styles', 'serve'])
