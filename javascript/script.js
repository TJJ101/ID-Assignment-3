function Random(){ 
    var x = document.getElementById("circle");   //randomize position of circle
    var boxW = document.getElementById("box").clientWidth-100;
    var boxH = document.getElementById("box").clientHeight-100;
    var l = Math.floor(Math.random()*boxW);
    var t = Math.floor(Math.random()*boxH);
    x.style.display= "block"
    x.style.left=l;
    x.style.top=t;
    console.log(l);
}

function Start(){
    var x = document.getElementById("begin");
    var desc = document.getElementById("description");
    x.innerHTML="3";
    setTimeout(function(){x.innerHTML="2"},1000);
    setTimeout(function(){x.innerHTML="1"},2000);
    setTimeout(function(){x.innerHTML="GO"},3000);
    setTimeout(function(){x.style.display="none"},4000);
    setTimeout(function(){desc.style.display="none"},3980);
    setTimeout(function(){Random()},4050);
    setTimeout(function(){startWatch()}, 4050)
}

function Stop(){
    var x = document.getElementById("circle");
    var time  = document.getElementById("timer");
    if(time.innerHTML == "Time: 00: 01: 00"){
        x.style.display = "none";
        stopTime();
    }

}

//we need a timer in html
var count = 0;
var clearTime;
var seconds = 0, minutes = 0, hours = 0;
var clearState;
var secs, mins, gethours ; 
function startWatch(){
    if( seconds === 60)
    {
        seconds = 0;
        minutes = minutes + 1;
    }
    /*js tenary operator*/mins = (minutes <10) ? ('0'+ minutes + ': ') : (minutes + ': ');
    /*if( minutes === 60 )
    {
        minutes = 0;
        hours = hours + 1;
    } */
    gethours = ( hours < 10) ? ('0' + hours + ': ') : (hours + ': '); 
    secs = (seconds < 10) ? ('0' + seconds) : (seconds);
    var x = document.getElementById("timer");
    x.innerHTML = 'Time: ' + gethours + mins + secs;
    seconds++
    clearTime = setTimeout("startWatch()",1000);
    Stop();
}

//This caused the timer to start immediately which isnt good
//startWatch()

function startTime(){
    if ( seconds === 0 && minutes === 0 && hours ===0)
    {
        var fulltime = document.getElementById("fulltime");
        fulltime.style.display = "none";
        startWatch();
    }
}

/*This code doesnt work 
window.addEventListener('load',function(){
    //when the first circle pops out the timer starts
    var start = document.getElementById("begin");
    start.addEventListener('click',startTime);
});
*/

function stopTime(){
    if( seconds!== 0 || minutes!== 0 || hours !==0)
    {
        var fulltime = document.getElementById("fulltime"); //we need a timer in html
        fulltime.style.display = "block";
        var time = gethours + mins + secs;
        fulltime.innerHTML = 'Fulltime: ' + time;
        seconds = 0;
        minutes = 0;
        hours = 0;
        secs = '0' + seconds;
        mins = '0' + minutes + ': ';
        gethours = '0' + hours + ': ';
        var x =document.getElementById("timer");
        var stopTime = gethours + mins + secs;
        x.innerHTML = stopTime;
        clearTimeout(clearTime);
    }
}

//We can just make it stop after the timer reaches 1 min
/*
window.addEventListener('load',function(){
    //when the last circle is clicked timer will stop
});
*/
