class ListaController {
    
    $onInit () {
        this.sName='';
        this.sNombsSurnameProvSelec = '';
        this.sTelephone = '';
        this.isSubmit = false;
    }
    
    enviarDatos(){
        this.isSubmit = true;
    }
    
}
    
angular.module("appModule")
.component('appLista', {
    templateUrl: './main/lista-partial.html',
    controller: ListaController
});