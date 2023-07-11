const ticksound = new Audio("tick.mp3");
function playClockSound(){
    ticksound.play();
}
const hourSigns = document.querySelectorAll(".hour");

let x = []; let y = []; let theta = [];
for(let i = 0; i < 12 ; i++){
    theta.push(i * Math.PI/6);
    x.push(130 * Math.cos(theta[i]).toFixed(2) + 145);
    y.push(130 * Math.sin(theta[i]).toFixed(2) + 145);
    // hourSigns[i].style.transform = `translate(${x[i]}px,${y[i]}px)`;
    hourSigns[i].style.left = `${x[i]}px`;
    hourSigns[i].style.top = `${y[i]}px`
    hourSigns[i].style.transform = `translate(-50%, -50%)`;
}




let secHand = document.querySelector(".second-hand-box");
let minHand = document.querySelector(".minute-hand-box");
let hourHand = document.querySelector(".hour-hand-box");
let date = document.querySelector(".date");
let month = document.querySelector(".month")

const Months = ["Jan","Feb","Mar","Apr","May","July","Aug","Sep","Oct","Nov","Dec"]

function setHands(){
    let d = new Date();
    let month = d.getMonth();
    let secondsDeg = d.getSeconds() * 6;
    let minutesDeg = d.getMinutes() * 6 + d.getSeconds()/6;
    let hoursDeg = d.getHours() * 30 + d.getMinutes()/2;
    secHand.style.transform = `rotate(${secondsDeg}deg)`;
    minHand.style.transform = `rotate(${minutesDeg}deg)`; 
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
    let dateV = d.getDate();
    date.innerHTML = `${dateV}`;
    month.innerHTML = `${Months[month].toUpperCase()}`;
}



let ClockOn = setInterval(setHands,1000);

let clockRing = setInterval(playClockSound, 5000);

