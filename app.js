var min = 0;
var sec = 0;
var msec = 0;
var minT = document.getElementById("min");
var secT = document.getElementById("sec");
var msecT = document.getElementById("msec");
var interval;

function timer(){
    msec++
    msecT.innerHTML = msec;
    if(msec >= 100){
        sec++
        secT.innerHTML = sec;
        msec = 0;
    }else if(sec>=60){
        min++
        minT.innerHTML = min;
        sec = 0;
    }
}

function start(){
    var run = document.getElementById("run");
    if(run.innerHTML == "Start"){
        run.innerHTML = "Stop";
        run.style.backgroundColor = "red";
        interval = setInterval(timer,10); 
    }
    else{
        run.innerHTML = "Start";
        run.style.backgroundColor = "darkorange"; 
        clearInterval(interval)
    } 
}

function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    minT.innerHTML = min;
    secT.innerHTML = sec;
    msecT.innerHTML = msec;
    clearInterval(interval)
}

