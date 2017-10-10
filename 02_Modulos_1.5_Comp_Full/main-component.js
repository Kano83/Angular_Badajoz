class MainController{
    // Posterior al renderizado, ya existe el DOM y se puede manejar los elementos de este
    $onInit(){
        this.sCurso = 'Angular JS';
    };
}

angular
.module("appModule",[])
.component('appMain',{
    templateUrl: 'main-partial.html'
});