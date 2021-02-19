var count = 0;
var clearTime;
var seconds = 0, minutes = 0, hours = 0;
var secs, mins, gethours;
var createdTime = 0;
var reactionTime;
var totalTime = 0;
var fastestTime =0;
var slowestTime = 0;
var lastTime = 0;

function Start(){
    var x = document.getElementById("begin");
    var popup = document.getElementById("popup");
    x.innerHTML="3"; x.style.backgroundColor = "Red";
    setTimeout(function(){x.innerHTML="2"; x.style.backgroundColor = "Yellow"; x.style.color = "Black"},1000);
    setTimeout(function(){x.innerHTML="1"; x.style.backgroundColor = "Orange"; x.style.color = "Black"},2000);
    setTimeout(function(){x.innerHTML="GO"; x.style.backgroundColor = "Green"; x.style.color = "White"},3000);
    setTimeout(function(){popup.style.display="none"},3980);
    setTimeout(function(){Random()},4050);
    setTimeout(function(){startWatch()}, 4050);
    createdTime = Date.now(); 
}
function Random(){ 
    var x = document.getElementById("circle");   //randomize position of circle
    var boxW = document.getElementById("box").clientWidth-100;
    var boxH = document.getElementById("box").clientHeight-100;
    var l = Math.floor(Math.random()*boxW);
    var t = Math.floor(Math.random()*boxH);
    if(count >= 10){
        x.style.display = "none";
        clearTimeout(clearTime);
        document.getElementById("popup2").style.display = "block";
    }
    else{
        x.style.display= "block"
        x.style.left=l;
        x.style.top=t;
        lastTime = Date.now();
        console.log(lastTime);
        reactionTime = (lastTime - createdTime)/1000;
        console.log(reactionTime);
        totalTime += reactionTime;
        console.log(totalTime);
        if(reactionTime > slowestTime){
            slowestTime = reactionTime;
            console.log(slowestTime);
        }
        if(reactionTime < fastestTime || fastestTime == 0) {
            fastestTime = reactionTime;
            console.log(fastestTime);
        }
        createdTime = lastTime;
        console.log(createdTime);
        return count += 1;
    }

}

//we need a timer in html
function startWatch(){
        if(count === 11){
        Stop();
        clearTimeout(clearTime);
        document.getElementById("popup2").style.display = "block";
    }
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
    gethours = ( hours < 10) ? ('0' + hours + ': ') : (hours + ': '); 
    secs = (seconds < 10) ? ('0' + seconds) : (seconds);
    var x = document.getElementById("timer");
    x.innerHTML = 'Time: ' + gethours + mins + secs;
    seconds++
    return clearTime = setTimeout("startWatch()",1000); 
}

function Reset(){
    count = 0;
    var clearTime;
    seconds = 0, minutes = 0, hours = 0;
    createdTime = 0;
    reactionTime;
    totalTime = 0;
    fastestTime =0;
    slowestTime = 0;
    lastTime = 0;
    document.getElementById("popup2").style.display = "none";
    document.getElementById("popup").style.display = "block";
    document.getElementById("timer").innerHTML = "Time: 00: 00: 00";
    document.getElementById("begin").innerHTML = "BEGIN";


}
function DisplayResult(){
    var tt = document.getElementById("totalTime");
    var at = document.getElementById("averageTime");
    var ft = document.getElementById("fastestTime");
    var st = document.getElementById("slowestTime");
    document.getElementById("result1").style.display= "none";
    document.getElementById("result2").style.display = "block";
    tt.innerHTML = "Total Time Taken: " + (totalTime-3).toFixed(2) + "&nbsp;seconds";
    at.innerHTML = "Average Time Taken: " + ((totalTime-3)/10).toFixed(2) + "&nbsp;seconds";
    ft.innerHTML = "Fastest Time Taken: " + fastestTime.toFixed(2) + "&nbsp;seconds";
    st.innerHTML = "Slowest Time Taken: " + slowestTime.toFixed(2) + "&nbsp;seconds";
};

$(document).ready(function () {
    const APIKEY= "602f4fbe5ad3610fb5bb638b";
    getResults();
    $("#addLeaderboard").on("click", function (e) {
        console.log("hihi")
        e.preventDefault();
        let totalTime = $("#totalTime").val();
        let averageTime = $("#averageTime").val();
        let fastestTime = $("#fastestTime").val();
        let slowestTime = $("#slowestTime").val();
    
        let jsondata = {
          "totalTime": totalTime,
          "averageTime": averageTime,
          "fastestTime": fastestTime,
          "slowestTime": slowestTime
        };
        let settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://a3leaderboard-cdd2.restdb.io/rest/results",
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "x-apikey": APIKEY,
                "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify(jsondata),
            "beforeSend": function () {
                $("#addLeaderboard").prop("disabled",true);
            }
        }
        $.ajax(settings).done(function (response) {
            console.log(response);
            $("#addLeaderboard").prop("disabled", false);
            getResults();
        });
        document.getElementById("popup2").style.display = "hide";
        document.getElementById("popup3").style.display = "block";
        document.getElementById("leaderboard").style.display = "block";
    })

    function getResults(limit=5, all = true){
        let settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://a3leaderboard-cdd2.restdb.io/rest/results",
            "method": "GET",
            "headers": {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache"
            },
        }
    
        $.ajax(settings).done(function(response){
            let content = "";
            for (var i = 0; i < response.length && i < limit; i++){
                content = `
                <rp>${response[i].totalTime}</rp>
                <rp>${response[i].averageTime}</rp>`;
            }
            $("#leaderboard p").innerHTML(content);
            console.log(content);
        })
    }
});


