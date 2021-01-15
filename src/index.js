import './css/base.scss';
import domUpdates from './dom-updates';
import Traveler from './Traveler';
import Trip from './Trip';
import Destination from './Destination';
import {getData, postData, deleteTrip} from './apis';

let travelers = [];
let trips = [];
let destinations = [];
let user;

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
}

function login() {
  convertDataIntoClassInstances()
  // console.log('travelers', travelers)
  // console.log('trips', trips)
  // console.log('destinations', destinations)
  findUser()
  if (user) {
    //setUp homepage
  } else {
    alert('Sorry, check username and password and try again')
  }
}

function convertDataIntoClassInstances() {
  travelers.map(traveler => new Traveler(traveler))
  trips.map(trip => new Trip(trip))
  destinations.map(destination => new Destination(destination))
}

function findUser() {
  const username = document.querySelector('.username').value
  const userId = username.slice(8)
  user = travelers.find(traveler => traveler.id = userId)
}