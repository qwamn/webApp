;(function (angular) {
    //1.创建模板
    var app=angular.module('app',['ui.router']);
})(angular);
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
/**
 * Created by An on 2015/7/12.
 */
//8.设置详情页控制器
angular.module('app').controller('DetailController',['$scope','$stateParams',function ($scope,$stateParams) {
    $scope.item=$scope.listData.posts[$stateParams.id];
}]);
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
/**
 * Created by An on 2015/7/12.
 */
angular.module('app').service('appHttp',['$http',function ($http) {
    this.jsonp = function (url,params,success,error) {
        $http({
            url:url,
            method:'jsonp',
            params:params
        }).then(function (regs) {
            if (success) success(regs);
        }).catch(function (err) {
            if (error) error(err);
        })
    };
    this.getData = function () {
        $http({
            url:url,
            method:'get',
            params:params
        }).then(function (regs) {
            if (success) success(regs);
        }).catch(function (err) {
            if (error) error(err);
        })
    };
    this.postData = function () {
        $http({
            url:url,
            method:'post',
            data:data,
            headers:{'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function (regs) {
            if (success) success(regs);
        }).catch(function (err) {
            if (error) error(err);
        })
    }
}]);
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