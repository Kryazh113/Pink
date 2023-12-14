const gulp = require("gulp");
const plumber = require("gulp-plumber");;
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-dart-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const terser = require("gulp-terser");
const htmlmin = require("gulp-htmlmin");
const webp = require("gulp-webp");
const svgstore = require("gulp-svgstore");
const del = require("del");
const sync = require("browser-sync").create();

// Styles

const styles = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename('style.min.css'))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest('build/css'))
    .pipe(sync.stream());
}

exports.styles = styles;

//Html

const html = () => {
  return gulp.src("source/*.html")
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest("build"));
}

exports.html = html;

//image

const optimizeImages = () => {
  return gulp.src("source/img/**/*.{jpg,png,svg}")
  .pipe(imagemin([
    imagemin.mozjpeg({progressive: true}),
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.svgo()
  ]))
  .pipe(gulp.dest("build/img"))
  }

exports.optimizeImages = optimizeImages;


const copyImages = () => {
  return gulp.src("source/img/**/*{png,jpg,svg}")
  .pipe(gulp.dest("build/img"))
}

exports.copyImages = copyImages;

//Webp

const createWebp = () => {
  return gulp.src("source/img/**/*.{jpg,png}")
  .pipe(webp({quality: 90}))
  .pipe(gulp.dest("build/img"))
}

exports.createWebp = createWebp

//sprite

const sprite = () => {
  return gulp.src("source/img/icons/*.svg")
  .pipe(svgstore({
    inlineSvg: true
  }))
  .pipe(rename("sprite.svg"))
  .pipe(gulp.dest("build/img"));
  }

  exports.sprite = sprite;

  //copy

  const copy = (done) => {
    gulp.src([
      "source/fonts/*.{woff2,woff}",
      "source/*.ico",
      "source/img/**/*.svg",
      "source/*.webmanifest",
      "!source/img/icons/*.svg",
      "source/js/*.js"
    ], {
      base: "source"
    })
    .pipe(gulp.dest("build"))
    done();
  }

  exports.copy = copy;


  //clean

  const clean = () => {
   return del("build");
  };

  exports.clean = clean;

  //Reload

  const reload = done => {
    sync.reload();
    done();
  }

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch('source/sass/**/*.scss', gulp.series(styles));
  gulp.watch("source/*.html", gulp.series(html, reload));
}


const build = gulp.series(
  clean,
  copy,
  optimizeImages,
  gulp.parallel(
    styles,
    html,
    sprite,
    createWebp
  ),
);

exports.build = build;


//default

exports.default = gulp.series(
  clean,
  copy,
  copyImages,
  gulp.parallel(
    styles,
    html,
    sprite,
    createWebp
  ),
  gulp.series(
    server,
    watcher
  ));
