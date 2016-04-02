var gulp = require('gulp'),
    gulpCopy = require('gulp-file-copy');

gulp.task('default', ['copy']);
gulp.task('copy', function() {
	gulp.src(['node_modules/blueimp-md5/js/*'])
		.pipe(gulp.dest('./libs'));


  //var start = './src';
  //gulp.src(start)
  //    .pipe(gulpCopy('./build', {
  //      start: start
  //    }))

});

