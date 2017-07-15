/**
 * Created by An on 2015/7/12.
 */
//6.创建home控制器
angular.module('app').controller('HomeController',['$scope','appHttp',function ($scope,appHttp) {
    var url = 'http://127.0.0.1/angular/api/home.php';
    appHttp.jsonp(url, null, function (res) {
        $scope.listData = res.data;
    }, function (err) {
        console.log(err);
    });
}]);