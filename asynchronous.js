// //EX-1 asychrinous
// console.log("start")

// console.log("a")

// setTimeout(function(){
//     console.log("sathish");
// },4000);

// console.log("c")

// console.log("end")

// // EX-2 
// console.log("hii");

// var ename = "SATHISH"

// console.log(ename);

// setTimeout(fun(),3000);

// function fun(){
//     alert("Hii gopi");
// }

// console.log("end")


// // sychronous
// var exp1 = function(){

// }

// // setinterval
// console.log("START")

// console.log("hii")

// setInterval(function(){
//     console.log("GOPI");
// },3000);

// console.log("b")

// console.log("end")




// var sum = 0;
// function start(){
// var set_inter=setInterval(function(){
//     sum++;
//     var para = document.getElementById("para1")
//     para.textContent =sum;
// },1000)
// function stop_exe(){
//     clearInterval(set_inter);
// }
// return (this.stop_exe1= stop_exe);
// }

setInterval(show_time,1000)

function show_time(){
var date1= new Date();
var hour=date1.getHours();
var min= date1.getMinutes();
var sec=date1.getSeconds();
var month1 = date1.getMonth();
var am_pm="AM";

if (hour >=12){
    hour = hour -12;
    am_pm="PM";
}
if (hour == 0){
    hour = 12;
}
if (month1)
var hours = hours<10? "0" + hour : hour;
var min=min<10? "0" + min : min;
var sec=sec<10? "0" + sec : sec;


var mon=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG"];

var para1 = document.getElementById("para1");
para1.textContent=  ` ${hour}: ${min}: ${sec}: ${am_pm} : ${mon[month1]}`;
}

