/**
 * Created by An on 2015/7/12.
 */
//5.配置路由
angular.module('app').config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state('home',{
        url:'/home',
        views:{
            home:{
                templateUrl:'../views/home_tpl.html',
                controller:'HomeController'
            },
            author:{
                template:'<h1>author</h1>'
            },
            content:{
                template:'<h1>content</h1>'
            },
            my:{
                template:'<h1>my</h1>'
            }
        }
    }).state('home.list',{
        url:'/list',
        templateUrl:'../views/list_tpl.html'
    }).state('home.detail',{
        url:'/detail/:id',
        template:'<detail></detail>',
        controller:'DetailController'
    });
    $urlRouterProvider.otherwise('home/list')
}]);
//7.配置白名单
angular.module('app').config(['$sceDelegateProvider',function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://127.0.0.1/angular/api/**'
    ])
}]);