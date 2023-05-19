let homeCount = 0;
let changeCount = document.getElementById("home--btn");

function plusOne() {
    homeCount += 1;
    changeCount.textContent = homeCount;
}
function plusTwo() {
    homeCount += 2;
    changeCount.textContent = homeCount;
}
function plusThree() {
    homeCount += 3;
    changeCount.textContent = homeCount;
}


let guestCount = 0;
let guestCountChange = document.getElementById("guest--btn");

function guestPlusOne() {
    guestCount += 1;
    guestCountChange.textContent = guestCount;
}
function guestPlusTwo() {
    guestCount += 2;
    guestCountChange.textContent = guestCount;
}
function guestPlusThree() {
    guestCount += 3;
    guestCountChange.textContent = guestCount;
}

let saveCountHome;
let saveCountGuest;
let domHome = document.getElementById("home--count")
let domGuest = document.getElementById("guest--count")

function saveClick() {
    saveCountHome  = homeCount + " -- "
    domHome.textContent += saveCountHome;

    saveCountGuest  = guestCount + " -- "
    domGuest.textContent += saveCountGuest;

    changeCount.textContent = 0;
    homeCount = 0;
    guestCountChange.textContent = 0;
    guestCount = 0;

}

let quarterSecLeft = 60
let quarterMinLeft = 11
let clockTimeLeftInterval
let isTimerRunning = false

function startTimer() {
    if(isTimerRunning === false) {
        clockTimeLeftInterval = setInterval(startTimerFunction, 1000)
    }
    isTimerRunning = true
}
function startTimerFunction() {
    quarterSecLeft--
    if(quarterMinLeft < 0) {
        quarterMinLeft = 12
        clearInterval(clockTimeLeftInterval)
    }
    if(quarterMinLeft === 0) {
        quarterMinLeft = "0" + quarterMinLeft
    }
    if(quarterSecLeft < 10) {
        quarterSecLeft = "0" + quarterSecLeft
    }
    if(quarterSecLeft == 0) {
        quarterMinLeft--
        quarterSecLeft = 60
        document.querySelector(".seconds").innerHTML = "00"
    }
    document.querySelector(".minutes").innerHTML = quarterMinLeft
    document.querySelector(".seconds").innerHTML = quarterSecLeft
}
function stopTimer() {
    if(isTimerRunning === true) {
        clearInterval(clockTimeLeftInterval)
    }
    isTimerRunning = false
}
function resetTimer() {
    quarterMinLeft = 12
    quarterSecLeft = 60
    clearInterval(clockTimeLeftInterval)
    isTimerRunning = false
    document.querySelector(".minutes").innerHTML = quarterMinLeft
    document.querySelector(".seconds").innerHTML = "00"
}