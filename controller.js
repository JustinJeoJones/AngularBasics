// in a script file
"use strict";
function TestController() {
const vm = this;
vm.message = "You just built your first controller!";
}
angular
.module("Madlib") // using getter syntax
.controller("TestController", TestController);