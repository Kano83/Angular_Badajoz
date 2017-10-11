class ListaController {
    
    constructor($log){
        'ngInject';
        this.$log = $log;
    }

    $onInit () {
        this.sName='';
        this.sNombsSurnameProvSelec = '';
        this.sTelephone = '';
        this.isSubmit = false;

    }
    
    enviarDatos(){
        this.$log.info('Enviando datos' + this);
        this.isSubmit = true;

    }
    
}
    
angular.module("appModule")
.component('appLista', {
    templateUrl: './main/lista-partial.html',
    controller: ListaController
});