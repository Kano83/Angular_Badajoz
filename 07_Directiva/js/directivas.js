angular
    .module("appModule")
    .directive('appCabeza',function(){
        return { 
            templateUrl:'./html/cabecera.html',
            restrict: 'EACH',
           // replace: true,
           // scope: true, // para los contorllers hay que quedarse  con un  scope fijo aislado que se representaria a [] viene a ser el encapsulamiento en java, sino con el valor true
           /* link: function(scope, elem, attrs){// funcion para modificar el dom
                elem[0].innerHTML('<div id="cab">Esto lo añade la directiva</p>');
                $("#cab").addClass("footer");
                
            }
            */
            
        };
    }
)




