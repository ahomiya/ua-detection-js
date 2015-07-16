// Plugin dependencies
var gulp            = require('gulp'),                        // Gulp
    concat          = require('gulp-concat'),                 // Concatinate files
    uglify          = require('gulp-uglify')                  // Minify files

// -----------------------------------------------------------------------------
// Globs
var components      = './bower_components',                   // Components
    js              = {
    src             : './src',                                // Sources
    dist            : './dist'                                // Distribution
};

// -----------------------------------------------------------------------------
// Packages
var packages        = {

  js: {
    parser          : [
      components + '/ua-parser-js/src/ua-parser.js'           // UA - Parser
    ],
    detection       : [
      js.src + '/ua-detection.js'                             // UA - Detection
    ]
  }

};

// -----------------------------------------------------------------------------
// Build tasks
// Concatenating, minifying, optimizing and organizing files

// Minified
gulp.task('build:js.detection.minify', function() {
  return gulp.src(packages.js.detection)
    .pipe(concat('ua-detection.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(js.dist));
});

gulp.task('build:js.parser.minify', function() {
  return gulp.src(packages.js.parser)
    .pipe(concat('ua-parser.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(js.dist));
});

// Custom
gulp.task('build:js.detection.custom', function() {
  return gulp.src(packages.js.detection)
    .pipe(gulp.dest(js.dist));
});

gulp.task('build:js.parser.custom', function() {
  return gulp.src(packages.js.parser)
    .pipe(gulp.dest(js.dist));
});

gulp.task('build',
  [
    'build:js.parser.minify',
    'build:js.parser.custom',
    'build:js.detection.minify',
    'build:js.detection.custom'
  ]
);
