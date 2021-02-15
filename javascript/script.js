function setup(){
    var circles = [],
        circle = {},
        overlapping = false,
        NumCircles = 100,
        protection = 1000,
        counter = 0,
        canvasWidth = window.innerWidth,
        canvasHeight = window.innerHeight;

    createTest(canvasWidth,canvasHeight);

    while (circles.length < NumCircles && counter < protection){
        circle = {
            x : 30,
            y : 30,
            r : random(3,36)
        };
        overlapping = false;

        for(var i = 0; i < circles.length; i++){
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
    background("#233")
    noStroke();
    for(var i=0; i <circles.length; i ++){
        ellipse(circles[i].x,circles[i].y,
            circles[i],r*2,circles[i].r*2);
    }
}
//example below
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