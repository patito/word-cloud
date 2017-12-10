var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-clean-css');

const babel = require('gulp-babel');

gulp.task('js', function() {
    gulp.src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/bootstrap/dist/js/bootstrap.js',
            'node_modules/jqcloud2/dist/jqcloud.js',
            'node_modules/chai/chai.js'
        ])
        .pipe(uglify())
        .pipe(concat('script.js'))
        .pipe(gulp.dest('public/libs/js'));
});

gulp.task('deps', function() {
    gulp.src([
            'public/js/requests.js',
            'public/js/index.js'
        ])
        .pipe(babel({ presets: ['env'] })) 
        .pipe(uglify())
        .pipe(concat('deps.js'))
        .pipe(gulp.dest('public/libs/js'));
});

gulp.task('word-cloud', function() {
    gulp.src([
            'public/js/word-cloud.js'
        ])
        .pipe(babel({ presets: ['env'] })) 
        .pipe(uglify())
        .pipe(concat('word-cloud.js'))
        .pipe(gulp.dest('public/libs/js'));
});

gulp.task('css', function() {
    gulp.src([
            'node_modules/bootstrap/dist/css/bootstrap.css',
            'public/css/**/*.css'
        ])
        .pipe(minifyCSS())
        .pipe(concat('wc.css'))
        .pipe(gulp.dest('public/libs/css'));
});

gulp.task('default', function() {
    gulp.run('js', 'css', 'word-cloud', 'deps');
});

gulp.task('watch', function() {
    gulp.run('default');

    gulp.watch('public/css/**/*.css', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        gulp.run('css');
    });

    gulp.watch('public/js/**/*.js', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        gulp.run('js');
    });
});