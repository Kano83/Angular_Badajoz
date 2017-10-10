class ListController{
    $onInit() { 
        this.sListNames = [];
    }

    btnBorrar(){    
        this.sListNames = [];
    }

    btnAnadir(){
        this.sListNames.push(this.sName); 
        this.sName = '';
    }


}


angular.module("sharedModule")
        .component('appLista', {
            templateUrl:'./shared/lista.html',
            controller: ListController
        });