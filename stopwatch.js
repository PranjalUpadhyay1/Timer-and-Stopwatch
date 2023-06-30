let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0 ];
let timeRef = document.querySelector(".stopwatch-display");
let int = null;
let start = 0;
let h, m, s, ms;
let lapcount =0;

document.getElementById("start").addEventListener("click", ()=>{
    if(start===0){
        document.getElementById("start").innerHTML = "Pause";
        if(int != null){
            clearInterval(int);
        }
        int = setInterval(displayTimer, 10);
        start=1;
    }
    else if(start===1){
        document.getElementById("start").innerHTML = "Start";
        clearInterval(int);
        start=0;
    }
    
});

document.getElementById("split").addEventListener("click", ()=>{
var lap = document.createElement("div");
lap.setAttribute("class", "lap");
var p1 = document.createElement("p");
p1.textContent = `Lap ${++lapcount}`;
var p2 = document.createElement("p");
p2.textContent = `${h} : ${m} : ${s}`;
lap.append(p1, p2);
var helper = document.getElementsByClassName("helper")[0];
helper.append(lap);
});

document.getElementById("reset").addEventListener("click",()=>{
    document.getElementById("start").innerHTML = "Start";
    clearInterval(int);
    start=0;
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000"
    var helper = document.getElementsByClassName("helper")[0];
    helper.innerHTML = "";
    lapcount = 0;
});

function displayTimer() {
    milliseconds +=10;
    if(milliseconds === 1000){
        milliseconds = 0;
        seconds++;
        if(seconds === 60){
            seconds = 0;
            minutes++;
            if(minutes=== 60){
                minutes=0;
                hours++;
            }
        }
    }
    
    h = hours<10 ? "0" + hours : hours;
    m = minutes<10 ? "0" + minutes : minutes;
    s = seconds<10 ? "0" + seconds : seconds;
    ms = 
        milliseconds < 10
        ? "00" + milliseconds
        : milliseconds < 100
        ? "0" + milliseconds:
        milliseconds;

        timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`
        // [milliseconds, seconds, minutes, hours] = [ms, s, m, h];
}

// $(".split").click(() =>{
//     // laps++;
//     // $(".lap").removeClass("active");
//     $(".helper").prepend(
//       ` <div class="lap active">
//         <p>Lap ${++laps}</p>
//         <p>
//         ${h} : ${m} : ${s} : ${ms}
//         </p>
//       </div>
//      `
//     );
//   });
