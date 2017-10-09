class Libro{
    constructor(autor, titulo){
        this.autor = autor;
        this.titulo = titulo;
    }
};

class LibroTecnico extends Libro{
    constructor(autor, titulo, tema){
        super(autor, titulo);
        this.tema = tema;
    }
};


let oLibro = new LibroTecnico("Pepe","Angular facil", "Programción");


oLibro.fecha ="2017"; // prueba de que el lenguaje JS no se ha modificado sino que en se usan ciertos convencismos para la legibilidad y comodidad del codigo
console.log(
    oLibro
)