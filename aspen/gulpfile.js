/* Подключение модулей и плагинов*/

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const gulpif = require('gulp-if');
const gcmq = require('gulp-group-css-media-queries');
const sass = require('gulp-sass');
const smartgrid = require('smart-grid');

/*Использование --dev --sync для облегчение команд запуска скрипт прописан в файле package.json */
const isDev = (process.argv.indexOf('--dev') !== -1);
const isProd = !isDev;
const isSync = (process.argv.indexOf('--sync') !== -1);

/*
let cssFiles = [
	'./node_modules/normalize.css/normalize.css',
	'./src/css/base.css',
	'./src/css/grid.css',
	'./src/css/humans.css'
];
*/

/*Перезапись или отчистка папки build*/
function clear(){
	return del('build/*');
}

/*Функция для преобразования scss файлов*/
function styles(){
	return gulp.src('./src/css/+(styles|styles-per|styles-ie9).scss')
			   .pipe(gulpif(isDev, sourcemaps.init()))//Подключаем карту стилей, для отображение корректных сртрок в браузере.
			   .pipe(sass())//Подключаем препроцессор sass (так как scss работает непосредственно от sass поэтому во всех подключениях scss использувется sass)
			   //.pipe(concat('style.css'))
			   .pipe(gcmq())//Перенос всех медиа запросов
			   .pipe(autoprefixer({
		            browsers: ['> 0.1%'],
		            cascade: false
		        }))
			   //.on('error', console.error.bind(console))
			   .pipe(gulpif(isProd, cleanCSS({////чистка css файла
			   		level: 2
			   })))
			   .pipe(gulpif(isDev, sourcemaps.write()))
			   .pipe(gulp.dest('./build/css'))
			   .pipe(gulpif(isSync, browserSync.stream()));//синхронизировать с браузером
}
/*Функция для переноса всех файлов и папок из папки img*/
function img(){
	return gulp.src('./src/img/**/*')
			   .pipe(gulp.dest('./build/img'))
}
/*Функция для переноса всех файлов и папок из папки fonts*/
function fonts(){
	return gulp.src('./src/fonts/**/*')
			   .pipe(gulp.dest('./build/fonts'))
}
/*Функция для переноса всех файлов и папок из папки owl*/
function owl(){
	return gulp.src('./src/owl/**/*')
		.pipe(gulp.dest('./build/owl'))
}
/*Функция для переноса всех файлов и папок из папки modal*/
function modal(){
	return gulp.src('./src/modal/**/*')
		.pipe(gulp.dest('./build/modal'))
}
/*Функция для переноса всех файлов и папок из папки scroll*/
function scroll(){
	return gulp.src('./src/scroll/**/*')
		.pipe(gulp.dest('./build/scroll'))
}
/*Функция для переноса всех файлов и папок из папки js*/
function js(){
	return gulp.src('./src/js/**/*')
			   .pipe(gulp.dest('./build/js'))
}
/*Функция для переноса html файлов*/
function html(){
	return gulp.src('./src/*.html')//исходное нахождение файлов
			   .pipe(gulp.dest('./build'))//месте куда переносить
			   .pipe(gulpif(isSync, browserSync.stream()));//синхронизировать с браузером
}
/*Функция для команды gulp watch простой перенос*/
function watch(){
	if(isSync){
		browserSync.init({
	        server: {
	            baseDir: "./build/",//покахывает конечный путь переноса
	        }
	    });
	}

	gulp.watch('./src/css/**/*.scss', styles);
	gulp.watch('./src/**/*.html', html);
	gulp.watch('./smartgrid.js', grid);
}
/*При правки файла smartgrid.js необходимо запустить команду gulp grid*/
function grid(done){
	delete require.cache[require.resolve('./smartgrid.js')];//Показывает изменяемый файл

	let settings = require('./smartgrid.js');
	smartgrid('./src/css', settings);

	settings.offset = '3.1%';
	settings.filename = 'smart-grid-per';//после запуска gulp grid файл smart-grid-per обновится и дополнится новыми элементами сетки
	smartgrid('./src/css', settings);

	done();
}
/*Позволяет параллельно выполнять несколько запросов*/
let build = gulp.series(clear, 
	gulp.parallel(styles, img, fonts, owl, modal, scroll, js, html,)//В данном случае параллельно выполнятся всё что описано в скобках при вызове gulp build
);

gulp.task('build', gulp.series(grid, build));
gulp.task('watch', gulp.series(build, watch));
gulp.task('grid', grid);