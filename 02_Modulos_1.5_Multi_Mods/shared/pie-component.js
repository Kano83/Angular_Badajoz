// Componente = Vista(Template) + Controller (Clase)
class PieController{
    constructor(){
    }

    $onInit() { 
        this.sCurso = 'Angular JS';
    };

    //    $onChanges() {         
    //    };
    
    //    $onDestroy() {         
    //    };
}


angular.module('sharedModule')
        // Nombre de la clase - Se u
        .component('appPie', {
            // Se puede meter Templates Strings ó con una url a un fichero con el mismo contenido que la strigng
            template:`
                <footer>
                    <p>Curso de {{$ctrl.sCurso}}</p>
                </footer>
            `,
            //templateUrl: 'templateUrl',
            controller: PieController
            //controllerAs: '$ctrl'
        });