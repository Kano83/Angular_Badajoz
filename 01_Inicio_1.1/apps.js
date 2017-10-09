// ng-init="sName='Pepe'; sCurso='Angular JS'";

// angular es el objeto instanciado como raiz de la aplicacion.
angular.module("appModule",[])  // evitar meterlo en una variable para no crear una variable global 
                                // y se instancia un nuevo modulo pero si no le introducimos los parametros instanciará el appModule en teoria creado
.controller("AppController", ['$scope',function ($scope) { // $scope es un objeto singleton inyectado siendo un objeto especial que interactua con la vista

    $scope.sName = 'Pepe';
    $scope.sCurso = 'Angular JS';

    $scope.btnBorrar=function(){
        $scope.sName = '';
    }
}]);  




