var canvas = document.getElementById("stars");
var c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = document.getElementById("home").offsetHeight;

var star1 = new Image();
var star2 = new Image();
var star3 = new Image();
var star4 = new Image();

star1.src = "images/star-1.png";
star2.src = "images/star-2.png";
star3.src = "images/star-3.png";
star4.src = "images/star-4.png";

let starImages = [star1, star2, star3, star4];
