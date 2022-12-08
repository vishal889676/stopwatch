const time_ele = document.querySelector('.watch');
const start_btn= document.getElementById('start');
const  stop_btn= document.getElementById('stop');
const reset_btn= document.getElementById('reset');

var sec=0;
var min=0;
var hour=0;
var count=0;
var timer=false;

function start(){
 timer = true;
 stopwatch()
}
function stop() {
 timer=false;
}
function reset(){
 timer = false;
 hour=0;
 min=0;
 sec=0;
 count=0;
 document.getElementById("hr").innerHTML='00';
  document.getElementById("min").innerHTML='00';
  document.getElementById("sec").innerHTML='00';
  document.getElementById("count").innerHTML='00';
}
function stopwatch(){
 if(timer==true){
  count=count+1;
  if(count==100){
   sec=sec+1;
   count=0;
  }
  if(sec==60){
   min=min+1;
   sec=0;
  }
  if(min==60){
   hour=hour+1;
   min=0;
  }
  var tempsec=sec;
  var tempmin=min;
  var temphr=hour;
  var tempcount=count;
  if(min<10){
   tempmin='0'+tempmin;
  }
  if(hour<10){
   temphr='0'+temphr;
  }
  if(sec<10){
   tempsec='0'+tempsec
  }
  if(count<10){
   tempcount='0'+tempcount;
  }
  

  document.getElementById("hr").innerHTML=temphr;
  document.getElementById("min").innerHTML=tempmin;
  document.getElementById("sec").innerHTML=tempsec;
  document.getElementById("count").innerHTML=tempcount;
    setTimeout("stopwatch()",10);
 }

}
