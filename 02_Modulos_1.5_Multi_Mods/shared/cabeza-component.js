// Componente = Vista(Template) + Controller (Clase)
class CabezaController{
    constructor(){
    }

    $onInit() { 
        this.$sTitulo = 'Hola Mundo';
    };

    //    $onChanges() {         
    //    };
    
    //    $onDestroy() {         
    //    };
}


angular.module("sharedModule")
        // Nombre de la clase - Se u
        .component("appCabeza", {
            // Se puede meter Templates Strings ó con una url a un fichero con el mismo contenido que la strigng
            template:`
                <header>
                    <h1>{{$ctrl.sTitulo}}</h1>
                </header>
            `,
            //templateUrl: 'templateUrl',
            controller: CabezaController,
            //controllerAs: '$ctrl'
        });
