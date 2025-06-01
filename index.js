let homepointElement = document.getElementById("home-point")
let guestpointElement = document.getElementById("guest-point")

// Initialize scores (it's good practice to have a numerical representation)
let homeScore = 0;
let guestScore = 0;

// Set initial text content based on the scores
homepointElement.textContent = homeScore
guestpointElement.textContent = guestScore

function addOnePointHome() {
    homeScore += 1 // Increment the numerical score
    homepointElement.textContent = homeScore // Update the displayed score
}

function addTwoPointHome() {
    homeScore += 2 // Increment the numerical score
    homepointElement.textContent = homeScore // Update the displayed score
}

function addThreePointHome() {
    homeScore += 3
    homepointElement.textContent = homeScore
}

function addOnePointGuest() {
    guestScore += 1
    guestpointElement.textContent = guestScore
}

function addTwoPointGuest() {
    guestScore += 2
    guestpointElement.textContent = guestScore
}

function addThreePointGuest() {
    guestScore += 3
    guestpointElement.textContent = guestScore
}
