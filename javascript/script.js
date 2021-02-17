function Random(){ 
    var x = document.getElementById("circle");   //randomize position of circle
    var boxW = document.getElementById("box").clientWidth-50;
    var boxH = document.getElementById("box").clientHeight-50;
    var l = Math.floor(Math.random()*boxW);
    var t = Math.floor(Math.random()*boxH);
    x.style.display="block"
    x.style.left=l;
    x.style.top=t;
    console.log(l);
}

function Start(){
    var x = document.getElementById("start");
    x.innerHTML="3";
    setTimeout(function(){x.innerHTML="2"},1000);
    setTimeout(function(){x.innerHTML="1"},2000);
    setTimeout(function(){x.innerHTML="GO"},3000);
    setTimeout(function(){x.style.display="none"},4000);
    setTimeout(function(){Random()},4050);
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
    if( minutes === 60 )
    {
        minutes = 0;
        hours = hours + 1;
    }
    gethours = ( hours < 10) ? ('0' + hours + ': ') : (hours + ': '); secs = (seconds < 10) ? ('0' + seconds) : (seconds);
    var x = document.getElementById("timer");
    x.innerHTML = 'Time: ' + gethours + mins + secs;
    seconds++
    clearTime = setTimeout("startWatch()",1000);
}
startWatch()

function startTime(){
    if ( seconds === 0 && minutes === 0 && hours ===0)
    {
        var fulltime = document.getElementById("fulltime");
        fulltime.style.display = "none";
        startWatch();
    }
}
window.addEventListener('load',function(){
    //when the first circle pops out the timer starts
    var start = document.getElementById("start");
    start.addEventListener('click',startTime);
});

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
window.addEventListener('load',function(){
    //when the last circle is clicked timer will stop
});
//var clear; function stopWatch( ) {
    //javascript statement here clear = setTimeout( "stopWatch( )", 1000 ); 
    //} Or 
    //function stopWatch( ) {
    // javascript statement here clear = setTimeout( function ( ) { 
    // javascript statement here }, 1000 ); } 
    // Or 
    //var stopWatch = function ( ) { 
    // javascript statement here clear = setTimeout( "stopWatch( )", 1000 ); } 


/*var NumCircles = 50;
var counter = 0;
var OuterWidth = window.outerWidth;
var OuterHeight = window.outerHeight;
var radius= 15;

function start(){
    setTimeout(push,1000);
}

function push(){
    pushCircles(radius,Math.random(0,outerWidth),Math.random(0,outerHeight));
    counter++;
    if(counter == NumCircles){
        clearTimeout(push);
    }
}
function pushCircles(radius,x,y){
    var circle = new circle(radius);
    circle.setPosition(x,y);
    add(circle);
}

start()
*/
//code try 1 below
//https://www.youtube.com/watch?v=9btuFwPOEbY
/*function CreateCircle(){
    var circle = {
        radius : 15,
        width : Math.random(0,window.outerWidth),
        height : Math.random(0,window.outerHeight),
    },
};
function setup(){
    console.log("hihi");
        overlapping = false,
        NumCircles = 100,
        protection = 1000,
        counter = 0;
}


    //createTest(canvasWidth,canvasHeight);

    /*while (circles.length < NumCircles && counter < protection){
        circle = {
            x : 20,
            y : 20,
            r : Math.random(3,36)
        };
        overlapping = false;

        /*for(var i = 0; i < circles.length; i++){
            var existing = circles [i];
            var d = dist(circle.x , circle.y,existing.x,existing.y)
            if (d < circle.r + existing.r){
                //this shows that these are overlapping
                overlapping = true;
                //do not add to array hence overlapping circles are not created
                break;
            }
        }
        if(!overlapping){
            circles.push(circle);
        }
        

        counter++;
    }
    for(var i=0; i <circles.length; i ++){
        ellipse(circles[i].x,circles[i].y,
            circles[i],r*2,circles[i].r*2);
    }
    */

//code example below
/*
// follows this tutorial:
// https://www.youtube.com/watch?v=XATr_jdh-44

// Uses P5.js for canvas creation and drawing
function setup() {
    var circles = [],
        circle = {},
        overlapping = false,
        NumCircles = 200,
        protection = 10000,
        counter = 0,
        canvasWidth = window.innerWidth,
        canvasHeight = window.innerHeight;
  
    createCanvas(canvasWidth, canvasHeight);
  
    // populate circles array
    // brute force method continues until # of circles target is reached
    // or until the protection value is reached
    while (circles.length < NumCircles &&
           counter < protection) {
      circle = {
        x: random(width),
        y: random(height),
        r: random(3, 36)
      };
      overlapping = false;
      
      // check that it is not overlapping with any existing circle
      // another brute force approach
      for (var i = 0; i < circles.length; i++) {
        var existing = circles[i];
        var d = dist(circle.x, circle.y, existing.x, existing.y)
        if (d < circle.r + existing.r) {
          // They are overlapping
          overlapping = true;
          // do not add to array
          break;
        }
      }
      
      // add valid circles to array
      if (!overlapping) {
        circles.push(circle);      
      }
      
      counter++;
    }
    
    // circles array is complete
    // draw canvas once
    background("#233")
    fill("#2AC1A6");
    noStroke();
    for (var i = 0; i < circles.length; i++) {
      ellipse(circles[i].x, circles[i].y, 
              circles[i].r*2, circles[i].r*2);
    }
  }
*/  