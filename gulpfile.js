const gulp = require('gulp'); //Importação do gulp.
const sass = require('gulp-sass')(require('sass')); //Importação do SASS e integração SASS com gulp;

function styles() { //Configuração do sass.
    return gulp.src('./src/styles/*.scss').pipe(sass({ outputStyle: 'compressed' })).pipe(gulp.dest('./dist/css'));
    //Ao executar, ele seleciona qualquer arquivo em formato .scss dentro da pasta styles, em seguida comprime e 
    //por fim manda para a pasta dist com o formato adequado para o html.
}

exports.default = styles;
exports.watch = function(){ //Configuração do Watch.
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    //Esse plugin irá observar este diretório, ao detectar qualquer alteração em arquivos com formato ".scss",
    //ele irá executar a função acima automáticamente.
}