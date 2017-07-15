/**
 * Created by An on 2015/7/12.
 */
//2.自定义nav指令
angular.module('app').directive('navs',function () {
    return{
        restrict:'EA',
        templateUrl:'../views/nav_tpl.html'
    }
});