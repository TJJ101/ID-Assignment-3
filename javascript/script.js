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