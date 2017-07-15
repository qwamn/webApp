/**
 * Created by An on 2015/7/12.
 */
//9.自定义详情页detail指令
angular.module('app').directive('detail',function () {
    return{
        restrict:'EA',
        template:'<div class="detail"><div ui-view></div></div>',
        replace:true,
        link:function ($scope,ele,attr) {
            ele.html($scope.item.content);
        }
    }
});