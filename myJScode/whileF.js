"use strict";
/*
for(var i=0;i<11;i=i+2){
  alert(i);
}*/
/*
for(var i=0;i<=10;i++){
  if(i%2==0){
    alert(i);
  }
}*/
/*
while(1){
  var numberMore=prompt("Введите число больше 100","");
  if(numberMore<100)continue;
  alert("ok");
  break;
}*/
function fun(age) {
 return (age>18)?true:confirm("Родители разрешили?")
}

var age=prompt("сколько вам лет?","");
if(fun(age)==true){
  alert("приятного просмотра");
}else alert("иди нахуй");