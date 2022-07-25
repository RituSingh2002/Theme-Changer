let a=document.getElementById("blue");
let b=document.getElementById("black");
let c=document.getElementById("green");
let d=document.getElementById("red");
let area=document.getElementById('message');
a.addEventListener('click',Blue);
c.addEventListener('click',Green);
d.addEventListener('click',Red);
b.addEventListener('click',Black);
function Blue(){
   area.style.backgroundColor="blue";
   area.style.color="white";
   area.style.border="solid 5px white"
}
function Black(){
    area.style.backgroundColor="black";
    area.style.color="white";
    area.style.border="solid 5px white"
 }
 function Green(){
    area.style.backgroundColor="green";
    area.style.color="black";
    area.style.border="solid 5px black"
 }
 function Red(){
    area.style.backgroundColor="red";
    area.style.color="white";
    area.style.border="solid 5px black"
 }