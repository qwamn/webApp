/**
 * Created by An on 2015/7/12.
 */
//8.设置详情页控制器
angular.module('app').controller('DetailController',['$scope','$stateParams',function ($scope,$stateParams) {
    $scope.item=$scope.listData.posts[$stateParams.id];
}]);