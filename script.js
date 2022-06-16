const homeScoreEl = document.getElementById("homeScore")
const homePlusOneEl = document.getElementById("homeplusone-btn")
const homePlusTwoEl = document.getElementById("homeplustwo-btn")
const homePlusThreeEl = document.getElementById("homeplusthree-btn")
let homeCount = 0

const guestScoreEl = document.getElementById("guestScore")
const guestPlusOneEl = document.getElementById("guestplusone-btn")
const guestPlusTwoEl = document.getElementById("guestplustwo-btn")
const guestPlusThreeEl = document.getElementById("guestplusthree-btn")
let guestCount = 0

const homeFoulEl = document.getElementById("homeCurrentFoul")
const homeFoulBtn = document.getElementById("homefoul-btn")
let homeFoulCount = 0

const guestFoulEl = document.getElementById("guestCurrentFoul")
const guestFoulBtn = document.getElementById("guestfoul-btn")
let guestFoulCount = 0

const newGameBtn = document.getElementById("newgame-btn")

const plusBtn = document.getElementById("plusbtn")
const minusBtn = document.getElementById("minusbtn")
const periodValue = document.getElementById("currentPeriod")
let periodCounter = 0

const hornBtn = document.getElementById("horn-btn")



homePlusOneEl.addEventListener("click", function () {
    homeCount = homeCount + 1
    homeScoreEl.textContent = homeCount
})

homePlusTwoEl.addEventListener("click", function () {
    homeCount = homeCount + 2
    homeScoreEl.textContent = homeCount
})

homePlusThreeEl.addEventListener("click", function () {
    homeCount = homeCount + 3
    homeScoreEl.textContent = homeCount
})

//timer
let timerEl = document.getElementById("currentTimer") //time displayed
let minuteEl = document.getElementById("editMinutes").value //minutes
let secondEl = document.getElementById("editSeconds").value //seconds
const setTimer = document.getElementById("setTimer-btn")
const startBtn = document.getElementById("start-btn")
const stopBtn = document.getElementById("stop-btn")
const resetBtn = document.getElementById("reset-btn")

setTimer.addEventListener("click", function () {
    let minuteEl = document.getElementById("editMinutes").value //minutes
    let secondEl = document.getElementById("editSeconds").value //seconds
    timerEl.innerHTML = `${minuteEl}:${secondEl}`
})



guestPlusOneEl.addEventListener("click", function () {
    guestCount = guestCount + 1
    guestScoreEl.textContent = guestCount
})

guestPlusTwoEl.addEventListener("click", function () {
    guestCount = guestCount + 2
    guestScoreEl.textContent = guestCount
})
guestPlusThreeEl.addEventListener("click", function () {
    guestCount = guestCount + 3
    guestScoreEl.textContent = guestCount
})



homeFoulBtn.addEventListener("click", function () {
    homeFoulCount = homeFoulCount + 1
    homeFoulEl.textContent = homeFoulCount
})

guestFoulBtn.addEventListener("click", function () {
    guestFoulCount = guestFoulCount + 1
    guestFoulEl.textContent = guestFoulCount
})

//resets all current values
newGameBtn.addEventListener("click", function () {
    count = 0
    homeScoreEl.textContent = count
    guestScoreEl.textContent = count
    homeFoulEl.textContent = count
    guestFoulEl.textContent = count
    periodValue.textContent = count
})

//period should only be 1-4
//TODO: put if-else condition coz it goes beyond negative values when value is decreased lol
plusBtn.addEventListener("click", function () {
    periodCounter = periodCounter + 1
    periodValue.textContent = periodCounter
})

minusBtn.addEventListener("click", function () {
    periodCounter = periodCounter - 1
    periodValue.textContent = periodCounter
})

hornBtn.addEventListener("click", function(){
    const audio = new Audio()
    audio.src = "./buzzer.mp3"
    audio.play()
})
