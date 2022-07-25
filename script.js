let a=document.getElementById("blue");
let b=document.getElementById("black");
let c=document.getElementById("green");
let d=document.getElementById("red");
let col= document.querySelector("p");
let area=document.getElementById('message');
a.addEventListener('click',Blue);
c.addEventListener('click',Green);
d.addEventListener('click',Red);
b.addEventListener('click',Black);
function Blue(){
   area.style.backgroundColor="blue";
   area.style.color="white";
   area.style.border="solid 5px white"
   document.getElementById("p").style.backgroundColor ="blue";
}
function Black(){
    area.style.backgroundColor="black";
    area.style.color="white";
    area.style.border="solid 5px white"
    document.getElementById("p").style.backgroundColor ="black";

 }
 function Green(){
    area.style.backgroundColor="green";
    area.style.color="black";
    area.style.border="solid 5px black"
    document.getElementById("p").style.backgroundColor ="green";
 }
 function Red(){
    area.style.backgroundColor="red";
    area.style.color="white";
    area.style.border="solid 5px black"
    document.getElementById("p").style.backgroundColor ="red";
 }