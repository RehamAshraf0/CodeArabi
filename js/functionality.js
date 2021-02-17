const circle4 = document.querySelector(".counter__circle--4");
const radius = circle4.r.baseVal.value;

const circlesNotArray = document.querySelectorAll('.counter__circle');
const circles = Array.from(circlesNotArray);

const circumference = radius * 2 * Math.PI;

for (var i = 0; i < circles.length; i++) {
    circles[i].style.strokeDasharray = circumference;
    circles[i].style.strokeDashoffset = circumference;
}

function setProgress0(percent) {
    const offset0 = circumference - percent / 100 * circumference;
    circles[3].style.strokeDashoffset = offset0;
}

function setProgress1(percent) {
    const offset0 = circumference - percent / 100 * circumference;
    circles[2].style.strokeDashoffset = offset0;
}

function setProgress2(percent) {
    const offset0 = circumference - percent / 100 * circumference;
    circles[1].style.strokeDashoffset = offset0;
}

function setProgress3(percent) {
    const offset0 = circumference - percent / 100 * circumference;
    circles[0].style.strokeDashoffset = offset0;
}



function countdown() {

    var now = new Date();
    var eventDate = new Date(2021, 10, 1, 15);

    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;


    document.querySelector(".counter__text--days").textContent = d;
    document.querySelector(".counter__text--hours").textContent = h;
    document.querySelector(".counter__text--mins").textContent = m;
    document.querySelector(".counter__text--secs").textContent = s;

    setTimeout(countdown, 1000);
    setTimeout(setProgress0((s / 60) * 100), 1000);
    setTimeout(setProgress1((m / 60) * 100), 1000);
    setTimeout(setProgress2((h / 24) * 100), 1000);
    setTimeout(setProgress3((d / 365) * 100), 1000);

};

countdown();