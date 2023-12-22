//Этот файл содержит логику работы всей сборки проекта
let project_folder="build"; //Переменная для папки результата проекта, выгружается на сервер и передается заказчику
let source_folder="src"; //Переменная для папки с исходниками проекта, рабочая папка используется только нами при разработке

let fs = require('fs');

//Объекты для путей ко всем папкам и файлам
let path={
	build:{
		html: project_folder + "/",
		css: project_folder + "/css/",
		js: project_folder + "/js/",
		img: project_folder + "/img/",
		fonts: project_folder + "/fonts/",
		vnd_js: project_folder + "/js/vnd/",
		vnd_css: project_folder + "/css/vnd/",
	},
	src:{
		html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
		css: source_folder + "/scss/styles.scss",
		js: source_folder + "/js/scripts.js",
		img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
		fonts: source_folder + "/fonts/*.ttf",
		vnd_js: source_folder + "/js/vnd/**/*.js",
		vnd_css: source_folder + "/scss/vnd/**/*.{css,scss}",
	},
	watch:{ 
		html: source_folder + "/**/*.html",
		css: source_folder + "/scss/**/*.scss",
		js: source_folder + "/js/**/*.js",
		img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
	},
	clean: "./" + project_folder + "/" //пути для команды очистки 
}



let { src, dest } = require('gulp'), //вспомогательные переменные
	gulp = require('gulp'), //подключение gulp (для использование команд по умолчанию)
	browsersync = require('browser-sync').create(), //синхронизация браузера
	fileinclude = require('gulp-file-include'); //плагин для выноса отдельных блоков
	del = require('del'), //плагин удаление файлов
	scss = require('gulp-sass'), //плагин препроцессора sass
	autoprefixer = require('gulp-autoprefixer'), //добавления префиксов к css свойствам
	group_media = require("gulp-group-css-media-queries"), //группировка медиа запросов
	clean_css = require("gulp-clean-css"), //чистка и сжатие css
	rename = require("gulp-rename"), //переименовывание файла
	imagemin = require("gulp-imagemin"), //оптимизация изображений
	uglify = require("gulp-uglify-es").default, //сжатие js
	webp = require('gulp-webp'), //плагин для webp формата
	beautify = require('gulp-beautify'),//
	webphtml = require('gulp-webp-html'),
	webpcss = require('gulp-webp-css'),
	svgSprite = require('gulp-svg-sprite');
	smartgrid = require('smart-grid');


let ttf2woff = require('gulp-ttf2woff');
let ttf2woff2 = require('gulp-ttf2woff2');
let fonter = require('gulp-fonter');


function browserSync() {
	browsersync.init({
		server:{
			baseDir: "./" + project_folder + "/" //указываем папку запуска файлов (то от куда будут запускаться исходные файлы)
		},
		port: 3000, //указываем порт для локального сервера
		notify: false //выключаем уведомление о перезагрузки страницы
	})
}

function html() {
	return src(path.src.html) //путь к исходным html файлам
		.pipe(fileinclude()) //обращаемся к fileinclude
		.pipe(beautify.html())//
		.pipe(dest(path.build.html)) //путь к выходящим html файлам
		.pipe(browsersync.stream()) //синхронизация браузера
}

function vnd_js() {
	return src(path.src.vnd_js)
		.pipe(dest(path.build.vnd_js))
}

function vnd_css() {
	return src(path.src.vnd_css)
		.pipe(dest(path.build.vnd_css))
}

function css() {
	return src(path.src.css) //путь к исходным css файлам
		.pipe(
			scss({
				outputStyle: "expanded" //формирование развернутого файла
			})
		)
		.pipe(group_media())
		.pipe(
			autoprefixer({
				overrideBrowserslist: ["last 5 versions"], //поддержка версий браузеров
				cascade: true //стиль написание автопрефикса 
			}))
		.pipe(dest(path.build.css))
		.pipe(clean_css())
		.pipe(
			rename({
				extname: ".min.css"
			}))
		.pipe(dest(path.build.css)) //путь к выходящим css файлам
		.pipe(browsersync.stream()) //синхронизация браузера
}

function js() {
	return src(path.src.js) //путь к исходным js файлам
		.pipe(fileinclude()) //обращаемся к fileinclude
		.pipe(gulp.dest(path.build.js))	
		.pipe(uglify(/* options */))
		.pipe(
			rename({
				extname: ".min.js"
			}))
		.pipe(dest(path.build.js)) //путь к выходящим js файлам
		.pipe(browsersync.stream()) //синхронизация браузера
}

function img() {
	return src(path.src.img) //путь к исходным img файлам
		.pipe(dest(path.build.img))
		.pipe(src(path.src.img))
		.pipe(dest(path.build.img)) //путь к выходящим img файлам
		.pipe(browsersync.stream()) //синхронизация браузера
}


function fonts(params) {
	src(path.src.fonts)
		.pipe(ttf2woff())
		.pipe(dest(path.build.fonts));
	return src(path.src.fonts)
		.pipe(ttf2woff2())
		.pipe(dest(path.build.fonts));
}

gulp.task('otf2ttf', function() {
	return src([source_folder + '/fonts/*.otf'])
		.pipe(fonter({
			formats: ['ttf']
		}))
		.pipe(dest(source_folder + '/fonts/'));
})

//отдельный таск для спрайтов
gulp.task('svgSprite', function() {
	return gulp.src([source_folder + '/iconsprite/*.svg'])
		.pipe(svgSprite({
			mode: {
				stack: {
					sprite: "../iconsprite/icons.svg",
					example: true
				}
			},
		}
		))
		.pipe(dest(path.build.img))
})

//отслеживание файлов для синхронизации
function watchFiles() { 
	gulp.watch([path.watch.html], html);
	gulp.watch([path.watch.css], css);
	gulp.watch([path.watch.js], js);
	gulp.watch([path.watch.img], img);
	gulp.watch([path.watch.img], img);
	gulp.watch('./smartgrid.js', grid);
}

//для подключение шрифтов
async function includeFonts() {
	return fs.readdir( path.build.fonts , 'utf8', ( error, fontFiles ) => {
		let pluggableFonts = '';
		const addedFonts = new Set();
		for ( let fontFile of fontFiles ) {
			const fontName = fontFile.split('.')[0];
			if ( !addedFonts.has( fontName ) ) {
			pluggableFonts += '@include font("' + fontName + '", "' + fontName + '", "400", "normal");\r\n';
			addedFonts.add( fontName );
			}
		}
		fs.writeFile( source_folder + '/scss/fonts.scss', pluggableFonts, () => {} );
	});
}

/*При правки файла smartgrid.js необходимо запустить команду gulp grid*/
function grid(done){
	delete require.cache[require.resolve('./smartgrid.js')];//Показывает изменяемый файл

	let settings = require('./smartgrid.js');
	smartgrid('./src/scss', settings);

	settings.offset = '3.1%';
	settings.filename = 'smart-grid-per';//после запуска gulp grid файл smart-grid-per обновится и дополнится новыми элементами сетки
	smartgrid('./src/scss', settings);

	done();
}

function cb() { }
//очистка
function clean() {
	return del(path.clean);
}


let build = gulp.series(clean, gulp.parallel(js, css, html, img, fonts, vnd_js, vnd_css), includeFonts); //переменная build со значениями из функций
let watch = gulp.parallel(build, watchFiles, browserSync); //переменная watch с заданными значениями из функций, срабатывает параллельно


exports.js = js; //срабатывание команды js
exports.img = img; //срабатывание команды img
exports.css = css; //срабатывание команды css
exports.html = html; //срабатывание команды html
exports.build = build; //срабатывание команды build
exports.watch = watch; // срабатывает watch и данные берет с переменной watch
exports.default = watch; //запуск gulp который по умолчанию перенаправляет на срабатывание watch
exports.clean = clean; //запуск удаления дериктории build
exports.fonts = fonts; //запуск команды для шрифтов
exports.includeFonts = includeFonts; //запуск команды подключение шрифтов
exports.vnd_js = vnd_js;
exports.vnd_css = vnd_css;
exports.grid = grid;