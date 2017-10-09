// Ejemplo de código ES6
let oPrueba = {
    precio = 12,
    iva = 1.16,
};

/*
oPrueba.calculaIvaAsiync = function() {
    setTimeout(function() {
       let precioFinal = this.precio * this.iva;
       console.log(`
        Usando una funcion clasica:
        El precio final es ${precioFinal}
       `) ;
    }, 1000)
}
oPrueba.calculaIvaAsiync();
*/


oPrueba.calculaIvaAsiync_Arrow = function() {
    setTimeout(() => {
       let precioFinal = this.precio * this.iva;
       console.log(`
        Usando una funcion clasica:
        El precio final es ${precioFinal}
       `) ;
    }, 1000)
}
oPrueba.calculaIvaAsiync_Arrow();