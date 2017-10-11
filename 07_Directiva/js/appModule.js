class MainController {
        constructor($scope){
            this.$scope = $scope;
        }
        $onInit () {
            this.sTitulo = 'DIRECTIVAS ANGULAR';
        }
    
} // Fin de la clase 

angular
    .module("appModule", [])
        .controller('MainController', MainController);
