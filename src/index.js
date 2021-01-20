import './css/base.scss';
import './images/airplane.svg';
import './images/globe.png';
import './images/travel.svg';
import './images/destination.svg';
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

window.addEventListener("load", getPageData);

function addEvent(area, eventType, func) {
  document.querySelector(area).addEventListener(eventType, func)
}

addEvent('.login-button', 'click', login)
addEvent('.display-booking-button', 'click', displayBookingForm)
addEvent('.booking-form', 'submit', bookTrip)
addEvent('.booking-exit-button', 'click', displayBookingForm)
addEvent('.user-search-form', 'submit', searchForUser)
addEvent('.display-destination-form-button', 'click', displayDestinationForm)
addEvent('.add-desination-exit-button', 'click', displayDestinationForm)
addEvent('.add-destination-form', 'submit', addDestination)
addEvent('.user-search-results', 'click', reviewTrips)

function getPageData(event) {
  travelers = [];
  trips = [];
  destinations = [];
  getData('travelers', travelers),
  getData('trips', trips),
  getData('destinations', destinations)
}

function login(event) {
  event.preventDefault()
  getToday()
  convertDataIntoClassInstances()

  const username = document.querySelector('#username').value
  const password = document.querySelector('#password').value

  if (username === 'agency' && password === 'travel2020') {
    user = new Agent
    displayAgentDashboard(user)
    domUpdates.toggle(['.login', '.travel-agent', '.display-destination-form-button'])
  } else if (username.includes('traveler') && password === 'travel2020') {
    findUser(username)
    domUpdates.toggle(['.login', '.traveler', '.display-booking-button'])
    displayUserDashboard(user)
  } else {
    alert('Sorry, check username and password and try again')
    setTimeout(getPageData, 1000)
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

function displayUserDashboard() {
  domUpdates.displayWelcomeBanner(user)
  domUpdates.displayTotalTripSpending(user, today)
  domUpdates.createBookingsSelection(destinations)
  displayUserTrips(today)
}

function displayAgentDashboard(user) {
  domUpdates.displayTotalIncome(user, trips)
  domUpdates.displayTodayTrips(travelers, today)
  domUpdates.displayPendingTrips(trips)
}

function displayUserTrips(today) {
  const pendingTrips = user.trips.filter(trip => trip.status === 'pending')
  domUpdates.displayTrips(pendingTrips, '.pending-trips')

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
  startDateInput = startDateInput.replaceAll('-', '/')
  const durationInput = document.querySelector('#duration').value
  const numTravelersInput = document.querySelector('#num-travelers').value
  let destinationsInput = document.querySelector('#destinations').value
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

  postData('trips', postTripBody)
    .then(response => {
      const newTripLocal = new Trip(response.newTrip, destinations)
      user.trips.push(newTripLocal)
      displayUserDashboard(user)
      domUpdates.confirmTripBookingSubmission(newTripLocal, destinations)
    })
}

function searchForUser(event) {
  event.preventDefault()
  const searchInput = document.querySelector('.user-search-input').value
  const searchResults = travelers.filter(traveler => traveler.name.includes(searchInput))
  domUpdates.displaySearchResults(searchResults)
}

function displayDestinationForm(event) {
  event.preventDefault()
  domUpdates.toggle(['.add-destination-area'])
}

function addDestination(event) {
  event.preventDefault()

  const destinationInput = document.querySelector('.destination-name').value
  const lodgingPerDayInput = document.querySelector('.lodging-per-day').value
  const flightPerDayInput = document.querySelector('.flight-per-person').value
  const imageInput = document.querySelector('.destination-image').value
  const altInput = document.querySelector('.alt-image').value
  
  const postDestinationBody = {
    id: Date.now(), 
    destination: destinationInput, 
    estimatedLodgingCostPerDay: lodgingPerDayInput, 
    estimatedFlightCostPerPerson: flightPerDayInput, 
    image: imageInput, 
    alt: altInput
  }

  postData('destinations', postDestinationBody)
    .then(response => {
      const newDestinationLocal = new Destination(response.newDestination)
      displayAgentDashboard(user)
      domUpdates.confirmNewDestination(newDestinationLocal)
      domUpdates.toggle(['.add-destination-area', '.confirmation'])
    })

}

function reviewTrips(event) {
  const targetCard = event.target.closest('.search-result-card')
  const targetButtonName = event.target.closest('button').getAttribute('name')

  switch (targetButtonName) {
  case '.client-trips-button':
    showClientTrips(event)
  case 'approve':
    updateTripStatus(reviewedTrip, 'approved')
    break;
  case 'reject':
    updateTripStatus(reviewedTrip, 'rejected')
    break;
  case 'delete':
    deleteClientTrip(tripID)
    break;
  }
}

function showClientTrips(event) {
  const clientID = event.target.closest('search-result-card')
  const client = travelers.find(client => client.id === clientID)

  domUpdates.displayClientTripsForAgent(client)
}

function updateTripStatus(trip, statusUpdate) {
  trip.status = statusUpdate
  displayAgentDashboard()
  domUpdates.displayAgentConfirmation(trip, statusUpdate)
}

function deleteClientTrip(tripId) {
  deleteTrip(tripId)
    .then(response => {
      const responseTripId = response.deletedTrip
      const index = trips.indexOf(trip => trip.id === responseTripId)
      trips.splice(index, 1)
      domUpdates.displayAgentConfirmation(trip, 'deleted')
    })
}