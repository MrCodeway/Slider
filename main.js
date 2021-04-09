var slider=document.getElementById("slider");
var game=document.getElementById("game");
var sports=["sports_baseball",
"sports_basketball",
"sports_esports",
"sports_cricket",
"sports_football"];
slider.oninput=function(){
    game.innerHTML=sports[slider.value];
}