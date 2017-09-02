"use strict";
console.log("book app, yo!");
var app = angular.module("BookApp", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'app/view1/mainView.html',
        controller: "BookCtrl"
    }).
    otherwise('/');
});