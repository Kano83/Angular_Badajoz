class SaludoController{
    // Posterior al renderizado, ya existe el DOM y se puede manejar los elementos de este
    $onInit(){
        this.sName = 'Pepe';
        console.log(this);
    };

    btnBorrar(){
        this.sName = '';
    }
}   
    
angular
.module("appModule")
    .component('appSaludo', {
        templateUrl: './main/saludo-partial.html',
        controller: SaludoController
    });