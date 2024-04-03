let bar = document.getElementById('bar');
let nav = document.getElementById('navbar');
let close = document.getElementById('close');
let header = document.getElementById('header');

var daysEl = document.getElementById('days');
var hoursEl = document.getElementById('hours');
var minutesEl = document.getElementById('minutes');
var secondsEl = document.getElementById('seconds');

if (bar) { 
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) { 
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.padding = "1px 50px"; // تغيير الحجم أو الستايل عند التمرير لأسفل
    } else {
    document.getElementById("header").style.padding = "10px 50px"; // استعادة الحجم أو الستايل الأصلي عند العودة لأعلى
    }
}

function countdownTimer() {
    const countDownDate = new Date('04/18/2024').getTime()

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const interval = setInterval(() => {

    const now = new Date().getTime()
    const distance = countDownDate - now

    daysEl.innerText = formatNumber(Math.floor(distance / day))
    hoursEl.innerText = formatNumber(Math.floor((distance % day) / hour))
    minutesEl.innerText = formatNumber(Math.floor((distance % hour) / minute)) 
    secondsEl.innerText = formatNumber(Math.floor((distance % minute) / second))

    }, 1000);

}

function formatNumber(number){
    if (number < 10){
        return '0' + number 
    }

    return number
}

// Run Function 
countdownTimer()


var typed= new Typed(".text", {
    strings:["hervorragendes", "exklusives"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000, 
        loop: true,
    });


