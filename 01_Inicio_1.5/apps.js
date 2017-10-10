// las clases en JS no existen atributos ya que estos no están tipados solo existen métodos
class AppController{

    // Previo al renderizado, no existe el DOM. Suele utilizarse para la inyeccion de dependencias
    constructor($scope){ // los atributos se añadirian a nivel de constructor no tienen sentido en otro ambito
        this.$scope = $scope;
    }

    // Posterior al renderizado, ya existe el DOM y se puede manejar los elementos de este
    $onInit(){
        this.sName = 'Pepe';
        this.sCurso = 'Angular JS';
        console.log(this);
        // console.log(this.$scope);
    };

    btnBorrar(){
        this.sName = '';
    }

}

angular.module("appModule",[]).controller("AppController", AppController);



