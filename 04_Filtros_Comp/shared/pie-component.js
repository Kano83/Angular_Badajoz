
class PieController {

    $onInit () {
        this.sFormador = "Ángel Broncano"
        this.sEmpresa='Indra';
        this.sLugar = "Badajoz"
        this.fecha = new Date();
    }
}

angular.module("sharedModule")
.component('appPie', {
    template:`
    <footer>
        <p ng-cloack>{{$ctrl.sFormador}}</p>   
        <p>{{$ctrl.sEmpresa | uppercase}} - {{$ctrl.sLugar}}, {{$ctrl.fecha | date: 'yyyy'}}</p>
    </footer>
    `,
    controller: PieController
});
