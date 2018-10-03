/*
var oficialNameOfJS=prompt("Каково «официальное» название JavaScript?","");
if(oficialNameOfJS=="ECMAScript"){
  alert("Верно!");
}else{
  alert("Не знаете? «ECMAScript»!»");
}*/
var myLog=prompt("Введите логин","");
var myPassword;

var LOGIN_OF_ADMIN="Админ";
var PASSWOR_OF_ADMIN="Чёрный Властелин";

if(myLog==LOGIN_OF_ADMIN){
  myPassword=prompt("Введите пароль","");
  if(myPassword==PASSWOR_OF_ADMIN){
    alert("Добро пожаловать!");
  } else if(myPassword==null){
    alert("Вход отменён");
  }else{
    alert("Пароль неверен");
  }
}else if(myLog==null){
  alert("Вход отменён");
}else{
  alert("Я вас не знаю");
}