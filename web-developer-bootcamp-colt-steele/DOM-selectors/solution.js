// different ways to select the same object
var p = document.getElementById("first");
var p = document.getElementsByTagName("p")[0];
var p = document.getElementsByClassName("special");
var p = document.querySelector("p");
var p = document.querySelector("#first");
var p = document.querySelector(".special");
var p = document.querySelector("#first .special");
var p = document.querySelectorAll("#first")[0];
var p = document.querySelectorAll(".special")[0];
var p = document.querySelectorAll("p")[0];