import './css/base.scss';
import './images/airplane.svg';
import './images/globe.png';
import './images/travel.svg'
import domUpdates from './dom-updates';
import Traveler from './Traveler';
import Trip from './Trip';
import Destination from './Destination';
import Agent from './Agent';
import {getData, postData, deleteTrip} from './apis';

let travelers = [];
let trips = [];
let destinations = [];
let user, today;

window.addEventListener("load", loadPage);

function addEvent(area, eventType, func) {
  document.querySelector(area).addEventListener(eventType, func)
}

addEvent('.login-button', 'click', login)
addEvent('.display-booking-button', 'click', displayBookingForm)
addEvent('.booking-form', 'submit', bookTrip)
addEvent('.user-search', 'click', searchForUser)
addEvent('.add-destination-form', 'submit', addDestination)
addEvent('.user-search-results', 'click', reviewTrips)

function loadPage(event) {
  getData('travelers', travelers),
  getData('trips', trips),
  getData('destinations', destinations)
}



function login(event) {
  event.preventDefault()
  getToday()
  convertDataIntoClassInstances()

  const username = document.querySelector('.username').value
  if (username === 'agent') {
    user = new Agent
    domUpdates.toggle(['.login', '.traveler', '.display-booking-button'])

  } else if (username.includes('traveler')) {
    findUser(username)
    domUpdates.toggle(['.login', '.traveler', '.display-booking-button'])
    domUpdates.displayWelcomeBanner(user)
    domUpdates.displayTotalTripSpending(user, today)
    domUpdates.createBookingsSelection(destinations)
    displayUserTrips(today)
  } else {
    alert('Sorry, check username and password and try again')
    setTimeout(loadPage, 3000)
  }
}
function getToday() {
  const dateToday = new Date()
  today = dateToday.toLocaleDateString('en-ZA')
  const todayForCalendarMin = today.split('/').join('-')
  document.querySelector('.start-date')
    .setAttribute('min', todayForCalendarMin);
}

function convertDataIntoClassInstances() {
  destinations = destinations.map(destination => new Destination(destination))
  trips = trips.map(trip => new Trip(trip, destinations))
  travelers = travelers.map(traveler => new Traveler(traveler, trips))
}

function findUser(username) {
  const userId = parseInt(username.slice(8))
  user = travelers.find(traveler => traveler.id === userId)
}

function displayUserTrips(today) {
  const pendingTrips = user.trips.filter(trip => trip.status === 'pending')
  domUpdates.displayTrips(pendingTrips, '.pending')

  const tripsTimeline = user.getTripsTimeline(today)
  domUpdates.displayTrips(tripsTimeline.currentTrips, '.present')
  domUpdates.displayTrips(tripsTimeline.upcomingTrips, '.upcoming')
  domUpdates.displayTrips(tripsTimeline.pastTrips, '.past') 
}

function displayBookingForm(event) {
  event.preventDefault()  
  domUpdates.toggle(['.booking-area'])
}

function bookTrip(event) {
  event.preventDefault()

  let startDateInput = document.querySelector('#date').value
  const durationInput = document.querySelector('#duration').value
  const numTravelersInput = document.querySelector('#num-travelers').value
  let destinationsInput = document.querySelector('#destinations').value

  startDateInput = startDateInput.replaceAll('-', '/')
  
  destinationsInput = destinations.find(destination => 
    (destination.name === destinationsInput)).id

  let postTripBody = {
    id: Date.now(), 
    userID: user.id, 
    destinationID: destinationsInput, 
    travelers: numTravelersInput, 
    date: startDateInput, 
    duration: durationInput, 
    status: 'pending', 
    suggestedActivities: []
  }

  //method that posts, gets, then confirms
  console.log(postTripBody)
  postData('trips', postTripBody)
  domUpdates.confirmTripBookingSubmission(postTripBody, destinations)

}

function searchForUser() {
  const searchInput = document.querySelector('.user-search-input').value
  const searchResults = travelers.filter(traveler => (
    traveler.name.includes(searchInput))
  )
  domUpdates.displaySearchResults(searchResults)
}

function addDestination(event) {
  event.preventDefault()

}

function reviewTrips(event) {
  const targetCard = event.target.closest('.trip-card')
  const tripID = targetCard.getAttribute('id')
  const targetButtonName = event.target.closest('button').getAttribute('name')

  switch (targetButtonName) {
  case 'approve':
    approveTrip(tripId)
    break;
  case 'reject':
    rejectTrip(tripId)
    break;
  }
}

function approveTrip(tripId) {
  console.log('Approved')
}

function rejectTrip(tripId) {
  console.log('Rejected')
}

function refreshData(user) {
  Promise.all([
    getData('travelers', travelers),
    getData('trips', trips),
    getData('destinations', destinations)
  ])
    .then(() => {
      user = travelers.find(traveler => traveler.id === user.id)
      convertDataIntoClassInstances()
      displayUserTrips(today)
  })
}