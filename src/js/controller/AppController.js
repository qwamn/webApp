/**
 * Created by An on 2015/7/12.
 */
angular.module('app').controller('AppController',['$scope','$window','$location',function ($scope,$window,$location) {
    $scope.webTitle='每日一刻';
    //接收tabbar的广播
    $scope.$on('tab_notifice',function (e,res) {
        $scope.id=res.key;
    });
    //返回首页按钮
    $scope.back=function () {
        $window.history.back();
    };
    $scope.location=$location;
    $scope.hide=false;
    $scope.$watch('location.url()',function (newV,oldV) {
        var num=newV.toString().indexOf('detail');
        if(num==-1){
            $scope.hide=false
        }else{
            $scope.hide=true
        }
    })
}]);