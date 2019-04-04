// in a script file
"use strict";
function TestController() {
const vm = this;
vm.message = "You just built your first controller!";
vm.count = [0,1,2,3,4];
vm.visable = false;
}

angular
.module("Madlib") // using getter syntax
.controller("TestController", TestController);