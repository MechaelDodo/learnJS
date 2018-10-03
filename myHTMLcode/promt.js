"use strict";

var name;
var boolName;
while(boolName!=true){
  name=prompt("как вас зовут?","ваше имя");
  if(name!=0){
    boolName=true;
    alert("ваше имя "+name);
  }else{
    boolName=false;
  }
}

var boolRes=confirm("вас точно зовут "+name+"?");
if(boolRes){
  alert("супер!");
}else alert("не надо врать!");

