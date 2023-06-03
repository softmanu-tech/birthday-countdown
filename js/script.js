let days = document.querySelector('#days')
let hour = document.querySelector('#hours')
let minutes = document.querySelector('#minutes')
let second = document.querySelector('#seconds')


let newyear = new Date("May 1, 2024 00:00:00").getTime();

updatecountdown();

function updatecountdown() {
    let now = new Date().getTime();
    let downtime = newyear - now;
    

    let seconds = 1000;
    let minute = seconds * 60;
    let hours = minute * 60;
    let day = hours * 24;

    let d = Math.floor(downtime / day);
    let h = Math.floor((downtime % day)/hours);
    let m = Math.floor((downtime % hours)/minute);
    let s = Math.floor((downtime % minute)/seconds);

    if(h < 10){
        h = "0" + h;
    }
    if(m < 10){
        m = "0" + m;
    }
    if(s < 10){
        s = "0" + s;
    }

    days.innerHTML = d;
    hour.innerHTML = h;
    minutes.innerHTML = m;
    second.innerHTML = s;

    if(newyear == Date("May 1, 2024 00:00:00")){
        setInterval();
    }

    setTimeout(updatecountdown,1000);




}
