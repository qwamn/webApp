/**
 * Created by An on 2015/7/12.
 */
//4.创建tabbar控制器
angular.module('app').controller('TabbarController',['$scope',function ($scope) {
    //实现tabbar的tap切换
    //设置默认值
    $scope.navTitle='首 页';
    $scope.id=0;
    $scope.tabChange=function (index) {
        //定义标题数组
        var titleArray=['首 页','作 者','栏 目','我'];
        $scope.navTitle=titleArray[index];
        $scope.id=index;
        //发送广播传递参数
        $scope.$emit('tab_notifice',{key:index});
    }
}]);