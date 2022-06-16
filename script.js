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

const hornBtn = document.getElementById("horn-btn")

const plusBtn = document.getElementById("plusbtn")
const minusBtn = document.getElementById("minusbtn")
const periodValue = document.getElementById("currentPeriod")
let periodCounter = 0


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

let minuteEl = document.getElementById("minute")
let secondEl = document.getElementById("second")
const startBtn = document.getElementById("start-btn")
const resetBtn = document.getElementById("reset-btn")

let startTimer = null

function timer(){
    if(minuteEl.value == 0 && secondEl.value == 0){
        minuteEl.value = 0
        secondEl.value = 0
    } else if(secondEl.value != 0){
        secondEl.value--
    } else if(minuteEl.value !=0 && secondEl.value == 0){
        secondEl.value = 59;
        minuteEl.value--
    }
    return;
}

function stopTimer(){
    clearInterval(startTimer)
}

startBtn.addEventListener("click", function(){
    function startInterval(){
        startTimer = setInterval(function(){
            timer();
        }, 1000)
    }
    startInterval()
})

resetBtn.addEventListener("click", function(){
    minuteEl.value = 0 
    secondEl.value = 0 
    stopTimer()
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
    homeCount = 0
    guestCount = 0
    homeFoulCount = 0
    guestFoulCount = 0
    periodCounter = 0
    homeScoreEl.textContent = homeCount
    guestScoreEl.textContent = guestCount
    homeFoulEl.textContent = homeFoulCount
    guestFoulEl.textContent = guestFoulCount
    periodValue.textContent = periodCounter
    minuteEl.value = 0 
    secondEl.value = 0 
    stopTimer()
    minusBtn.disabled = true
    plusBtn.disabled = false
})

//period should only be 1-4
//TODO: put if-else condition coz it goes beyond negative values when value is decreased lol
minusBtn.addEventListener("click", function () {
    if (periodValue.textContent < 2){
        minusBtn.disabled = true
        plusBtn.disabled = false
    }
    periodCounter = periodCounter - 1
    periodValue.textContent = periodCounter
    
})


plusBtn.addEventListener("click", function () {
    if (periodValue.textContent >= 0){
        minusBtn.disabled = false
    }
    if (periodValue.textContent > 2){
        plusBtn.disabled = true
    }
    periodCounter = periodCounter + 1
    periodValue.textContent = periodCounter

})



hornBtn.addEventListener("click", function () {
    const audio = new Audio()
    audio.src = "./buzzer.mp3"
    audio.play()
})
