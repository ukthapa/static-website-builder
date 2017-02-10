var gulp 		= require('gulp'),
	nunjucksMd 	= require('gulp-nunjucks-md');

var paths = {
	src: {
		root : './src/',
		favicon : './src/favicon/',
		images : './src/mages',
		fonts : './src/fonts',
		vendors : './src/js/vendor/',
		custom : './src/js/custom/',
		css : './src/style/css/',
		sass : './src/style/sass/',
		templates : './src/templates/',
		markdown : './src/markdown/',
		data : './src/data/' 
	},
	dist: {
		root : './dist/'
	}
}




gulp.task('default', function () {
  return gulp.src(paths.src.markdown + '*.md')
    .pipe(nunjucksMd({
      "path": [paths.src.templates +'layouts/'], 
      "data": paths.src.data + 'data.json'
    }))
    .pipe(gulp.dest(paths.dist.root));
});

