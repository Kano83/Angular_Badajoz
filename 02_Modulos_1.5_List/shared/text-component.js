class TextController{
    $onInit() { 
        this.bActiva = false;
        this.sPrecio = 22.21;
    }

    btnVerMas(){
        this.bActiva = !this.bActiva;
    }


}

angular.module("sharedModule")
        .component('appText', {
            templateUrl:'./shared/text-partial.html',
            controller: TextController
        });