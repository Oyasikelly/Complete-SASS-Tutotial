const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// Define paths for better scalability
const paths = {
  styles: {
    src: "./*.scss", // All SCSS files in the current folder
    dest: "./css", // Output CSS folder
  },
};

// SASS Compilation Task
gulp.task("sass", function () {
  return gulp
    .src(paths.styles.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(paths.styles.dest));
});

// Watch Task
gulp.task("watch", function () {
  gulp.watch(paths.styles.src, gulp.series("sass"));
});

// Default Task
gulp.task("default", gulp.series("sass", "watch"));
