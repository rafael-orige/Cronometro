let btn = document.querySelector('.side-button');
let scrnStatus = document.querySelector('.stopwatch--screenStatus');
let scrnCount = document.querySelector('.count');

var min = 0;
var sec = 0;
var mil = 0;


var time = 10;
var cron;
let run = false;

function start() {
    if(run == false){
        run = true;
        cron = setInterval(() => {
            timer();
        }, time);
        scrnStatus.innerHTML = "running";
        btn.style.transform = "translateY(50%)";
    }
};

function reset() {
    clearInterval(cron);
    stop();
    min = 0;
    sec = 0;
    mil = 0;
    var format = (min < 10 ? '0' + min : min) + ":" + (sec < 10 ? '0' + sec : sec) + ":" + (mil < 10 ? '0' + mil : mil);
    scrnCount.textContent = format;
    scrnStatus.innerHTML = "idle";
    btn.style.transform = "translateY(20%)";
};

function stop() {
    clearInterval(cron);
    if(mil == 0 & sec == 0 & min == 0) {
        scrnStatus.innerHTML = "idle";
        btn.style.transform = "translateY(20%)";
    } else {
        scrnStatus.innerHTML = "paused";
        btn.style.transform = "translateY(20%)";
    };
    run = false;
};

function timer() {
    mil++;

    if(mil >= 100){
        mil = 0;
        sec++;
    } if (sec >= 60) {
        sec = 0;
        min++;
    } if(min >= 60) {
        stop();
    }

    var format = (min < 10 ? '0' + min : min) + ":" + (sec < 10 ? '0' + sec : sec) + ":" + (mil < 10 ? '0' + mil : mil);
    scrnCount.textContent = format;
}

function btnStart() {
    if(btn.style.transform === "translateY(20%)") {
        start();
    } else {
        stop();
    }
}