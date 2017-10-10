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
.module("appModule",[])
.component('appSaludo', {
        //template:'htmlTemplate',
        templateUrl: 'partial.html',
        controller: SaludoController,
        controllerAs: 'vn'//'$ctrl'
    });