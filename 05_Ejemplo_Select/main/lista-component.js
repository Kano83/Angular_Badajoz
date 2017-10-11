class ListaController {
    
    $onInit () {
        this.aProvincias = [
        {   id: '1',
            nombre: 'Badajoz'},
        {   id: '2',
            nombre: 'Caceres'},
        {	id: '3',
            nombre: 'Madrid'},
        {	id: '4',
            nombre: 'Soria'},
        {	id: '5',
            nombre: 'Albacete'},
        {	id: '6',
            nombre: 'Segovia'}
        ];	

        this.oProvinciaSeleccionada='';
        this.sNombProvSelec = '';
    }

}
    
angular.module("appModule")
.component('appLista', {
    templateUrl: './main/lista-partial.html',
    controller: ListaController
});