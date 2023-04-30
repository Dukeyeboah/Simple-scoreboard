let homeScore = document.getElementById("home-score")
let newHomeScore = Number(homeScore.innerHTML)

let guestScore = document.getElementById("guest-score")
let newGuestScore = Number(guestScore.innerHTML)


function add1Home() {
    newHomeScore += 1
    homeScore.textContent = newHomeScore
}

function add2Home() {
    newHomeScore += 2
    homeScore.textContent = newHomeScore
}

function add3Home() {
    newHomeScore += 3
    homeScore.textContent = newHomeScore
}

function add1Guest() {
    newGuestScore += 1
    guestScore.textContent = newGuestScore
}

function add2Guest() {
    newGuestScore += 2
    guestScore.textContent = newGuestScore
}
function add3Guest() {
    newGuestScore += 3
    guestScore.textContent = newGuestScore
}