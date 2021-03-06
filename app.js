/**
 * Created by mac on 9/12/16.
 */


var myApp = angular.module('myApp', []);
myApp.controller('GreetingController', ['$scope' , '$http' , function ($scope, $http) {
    $scope.greeting = 'Hola!';

    $http({
        method: 'GET',
        url: 'https://api.nytimes.com/svc/mostpopular/v2/mostviewed/technology/30.json?format=json&query=smoking&api-key=cf83fb399d0c4067a1156c52211312d1'

    }).then(function successCallback(response){
        _getResults(response.data.results);
        console.log("exito")
        }, function errorCallback(response){
        console.log("fallo")
    });

    function _getResults(result){
        $scope.posts = result;

        angular.forEach(result, function(elemento){
            $scope.imagenes = elemento.media[0]['media-metadata'][1];
            console.log($scope.imagenes);
        });
    }

}]);