const homeLead = document.getElementById("homeleader")
const homeScoreEl = document.getElementById("homeScore")
const homePlusOneEl = document.getElementById("homeplusone-btn")
const homePlusTwoEl = document.getElementById("homeplustwo-btn")
const homePlusThreeEl = document.getElementById("homeplusthree-btn")
const homeMinusOneEl = document.getElementById("homeminusone-btn")
let homeCount = 0

const guestLead = document.getElementById("guestleader")
const guestScoreEl = document.getElementById("guestScore")
const guestPlusOneEl = document.getElementById("guestplusone-btn")
const guestPlusTwoEl = document.getElementById("guestplustwo-btn")
const guestPlusThreeEl = document.getElementById("guestplusthree-btn")
const guestMinusOneEl = document.getElementById("guestminusone-btn")
let guestCount = 0

homePlusOneEl.addEventListener("click", function () {
    homeCount = homeCount + 1
    homeScoreEl.textContent = homeCount
    if (homeCount > 0){
        homeMinusOneEl.disabled = false;
    }
})

homePlusTwoEl.addEventListener("click", function () {
    homeCount = homeCount + 2
    homeScoreEl.textContent = homeCount
    if (homeCount > 0){
        homeMinusOneEl.disabled = false;
    }
})

homePlusThreeEl.addEventListener("click", function () {
    homeCount = homeCount + 3
    homeScoreEl.textContent = homeCount
    if (homeCount > 0){
        homeMinusOneEl.disabled = false;
    }
})

homeMinusOneEl.addEventListener("click", function () {
    homeCount = homeCount - 1
    homeScoreEl.textContent = homeCount
    if (homeCount < 1){
        homeMinusOneEl.disabled = true;
    }
})

//Guest Score------------------------------------------------------------------------------------

guestPlusOneEl.addEventListener("click", function () {
    guestCount = guestCount + 1
    guestScoreEl.textContent = guestCount
    guestScoreEl.textContent = guestCount
    if (guestCount > 0){
        guestMinusOneEl.disabled = false;
    }
})

guestPlusTwoEl.addEventListener("click", function () {
    guestCount = guestCount + 2
    guestScoreEl.textContent = guestCount
    if (guestCount > 0){
        guestMinusOneEl.disabled = false;
    }
})
guestPlusThreeEl.addEventListener("click", function () {
    guestCount = guestCount + 3
    guestScoreEl.textContent = guestCount
    if (guestCount > 0){
        guestMinusOneEl.disabled = false;
    }
})

guestMinusOneEl.addEventListener("click", function () {
    guestCount = guestCount - 1
    guestScoreEl.textContent = guestCount
    if (guestCount < 1){
        guestMinusOneEl.disabled = true;
    }
})



//------------------------------------------------------------------------------------------------------

const homeFoulEl = document.getElementById("homeCurrentFoul")
const homeFoulBtn = document.getElementById("homefoul-btn")
const homeFoulMinusOne = document.getElementById("homefoulminuseone-btn")
let homeFoulCount = 0

homeFoulBtn.addEventListener("click", function () {
    homeFoulCount = homeFoulCount + 1
    homeFoulEl.textContent = homeFoulCount
    if (homeFoulCount > 0){
        homeFoulMinusOne.disabled = false;
    }
})

homeFoulMinusOne.addEventListener("click", function () {
    homeFoulCount = homeFoulCount - 1
    homeFoulEl.textContent = homeFoulCount
    if (homeFoulCount < 1){
        homeFoulMinusOne.disabled = true;
    }
})

//-----------------------------------------------------------------------------------------------------

const guestFoulEl = document.getElementById("guestCurrentFoul")
const guestFoulBtn = document.getElementById("guestfoul-btn")
const guestFoulMinusOne = document.getElementById("guestfoulminuseone-btn")
let guestFoulCount = 0

guestFoulBtn.addEventListener("click", function () {
    guestFoulCount = guestFoulCount + 1
    guestFoulEl.textContent = guestFoulCount
    if (guestFoulCount > 0){
        guestFoulMinusOne.disabled = false;
    }
})

guestFoulMinusOne.addEventListener("click", function () {
    guestFoulCount = guestFoulCount - 1
    guestFoulEl.textContent = guestFoulCount
    if (guestFoulCount < 1){
        guestFoulMinusOne.disabled = true;
    }
})

//---------------------------------------------------------------------------

const newGameBtn = document.getElementById("newgame-btn")

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
    homeMinusOneEl.disabled = true;
    guestMinusOneEl.disabled = true;
    homeFoulMinusOne.disabled = true;
    guestFoulMinusOne.disabled = true;
    homeLead.style.color = 'white'
    guestLead.style.color = 'white'
})


const hornBtn = document.getElementById("horn-btn")

hornBtn.addEventListener("click", function () {
    const audio = new Audio()
    audio.src = "./buzzer.mp3"
    audio.play()
})


const plusBtn = document.getElementById("plusbtn")
const minusBtn = document.getElementById("minusbtn")
const periodValue = document.getElementById("currentPeriod")
let periodCounter = 0


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