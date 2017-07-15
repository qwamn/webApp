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