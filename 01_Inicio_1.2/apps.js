// ng-init="sName='Pepe'; sCurso='Angular JS'";

// angular es el objeto instanciado como raiz de la aplicacion.
angular.module("appModule",[]).controller("AppController", AppController );

AppController.$inject = ['$scope']; // Para evitar la mimificación

function AppController($scope) { // Se inyectaria el $scope

    // this.vn --> scope
    this.sName = 'Pepe';
    this.sCurso = 'Angular JS';
    console.log(this);

    this.btnBorrar=function(){
        this.sName = '';
    }

}  

// new AppController() --> Realmente se está haciendo new de esta funcion y ya no se trabaja con un scope


// (function(){}) funcion de autoinvocacion anónima para no crear variables globales --> clousure englonado
/*
function() {
    'use strict'; // LO QUE HACE ES OBLIGAR A USAS BUENAS PRACTICAS

    angular
        .module('Module')
        .controller('ControllerController', ControllerController);

    ControllerController.$inject = ['dependency1'];
    function ControllerController(dependency1) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() { }
    }
})();
*/


