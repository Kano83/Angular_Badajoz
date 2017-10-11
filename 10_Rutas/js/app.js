class MainController {

    $onInit () {

    }


}




angular.module('appPrueba',["ngRoute"])
.config(['$routeProvider',function($routeProvider){
    
    $routeProvider
        .when('/', { // route for the home page
        templateUrl: 'view/view_inicio.html',
        controller: 'HomeController'
        })
        .when('/about', {// route for the about page = Acerca de
        templateUrl: 'view/view_about.html',
        controller: 'AboutController'
        })
        .otherwise({ // when all else fails
        //templateUrl: 'view/view_routeNotFound.html',
        //controller: 'NotFoundController'
        templateUrl: 'view/view_inicio.html',
        controller: 'HomeController'
        });

}])
