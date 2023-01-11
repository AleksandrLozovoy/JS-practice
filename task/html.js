import gulp from "gulp";

// Конфигурация
import path from "../config/path.js";
import app from "../config/app.js";

// Плагины
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import fileInclude from "gulp-file-include";
import htmlmin from "gulp-htmlmin";
import size from "gulp-size";
import webpHtml from "gulp-webp-html";
import panini from "panini";

// обработка HTML
const html = () => {
  panini.refresh();
  return gulp
    .src(path.html.src)
    .pipe(
      plumber({
        errorHandler: notify.onError(),
      })
    )
    .pipe(
      panini({
        root: "src/html/",
        layouts: "src/html/layouts/",
        partials: "src/html/partials/",
        helpers: "src/html/helpers/",
        data: "src/html/data/",
      })
    )
    .pipe(fileInclude())
    .pipe(webpHtml())
    .pipe(size({ title: "До сжатия" }))
    .pipe(htmlmin(app.htmlmin))
    .pipe(size({ title: "После сжатия" }))
    .pipe(gulp.dest(path.html.dest));
};

export default html;
