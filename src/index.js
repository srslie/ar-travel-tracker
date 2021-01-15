import './css/base.scss';
import domUpdates from './dom-updates';
import Traveler from './Traveler';
import Trip from './Trip';
import Destination from './Destination';
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
//add book trip submission event
//add add destination submission event
//add html creation of trips 
//add html creation of money
//add html creation of welcome banner
//add toggling for different users
//add search for user
//add approval/denial for trips

function loadPage(event) {
  getData('travelers', travelers)
  getData('trips', trips)
  getData('destinations', destinations)
  getToday()
}

function getToday() {
  const dateToday = new Date()
  const year = dateToday.getFullYear()
  const month = dateToday.getMonth()+1
  const day = dateToday.getDate();
  today = [year, month, day].join('/')
  console.log(today)
}

function login(event) {
  // event.preventDefault()
  convertDataIntoClassInstances()
  findUser()
  if (user) {
    domUpdates.toggle(['.login', '.traveler'])
    domUpdates.displayWelcomeBanner(user)
    domUpdates.displayTotalTripSpending(user)
    displayTrips()
  } else {
    alert('Sorry, check username and password and try again')
  }
}

function convertDataIntoClassInstances() {
  destinations = destinations.map(destination => new Destination(destination))
  trips = trips.map(trip => new Trip(trip, destinations, today))
  travelers = travelers.map(traveler => new Traveler(traveler, trips))
}

function findUser() {
  const username = document.querySelector('.username').value
  const userId = username.slice(8)
  user = travelers.find(traveler => traveler.id = userId)
}

function displayTrips() {
  const pendingTrips = filterTrips('pending')
  const approvedTrips = filterTrips('approved')
  const rejectedTrips = filterTrips('rejected')
  domUpdates.displayTrips(pendingTrips, '.upcoming')
  domUpdates.displayTrips(approvedTrips, '.present')
  domUpdates.displayTrips(rejectedTrips, '.past')

}

function filterTrips(status) {
  return user.trips.filter(trip => trip.status === status)
}