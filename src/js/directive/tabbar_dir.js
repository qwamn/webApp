/**
 * Created by An on 2015/7/12.
 */
//3.自定义tabbar指令
angular.module('app').directive('tabbar',function () {
    return{
        restrict:'EA',
        templateUrl:'../views/tabbar_tpl.html',
        controller:'TabbarController',
        replace:true,
        link:function ($scope,ele,attr) {
            var lis=ele.children().children();
            //监听id的变化
            $scope.$watch('id',function () {
                for (var i = 0; i < lis.length; i++) {
                    lis[i].className='';
                }
                lis[$scope.id].className='curr';
            });

        }
    }
});