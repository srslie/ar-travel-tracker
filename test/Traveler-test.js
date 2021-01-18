import chai from 'chai';
const expect = chai.expect;

import Traveler from '../src/Traveler'
import travelers from './travelers-test-data'
import Trip from '../src/Trip'
import trips from './trips-test-data'
import Destination from '../src/Destination'
import destinations from './destinations-test-data'

const destinationsArray = destinations["destinations"].map(destinationObject => new Destination(destinationObject))

const tripsArray = trips["trips"].map(tripObject => new Trip(tripObject, destinationsArray))

describe('Traveler', function() {
  let ham, rachael, sibby, leila, tiffy

  beforeEach(function() {
    ham = new Traveler(travelers['travelers'][0], tripsArray)
    rachael = new Traveler(travelers['travelers'][1], tripsArray)
    sibby = new Traveler(travelers['travelers'][2], tripsArray)
    leila = new Traveler(travelers['travelers'][3], tripsArray)
    tiffy = new Traveler(travelers['travelers'][4], tripsArray)
  });

  it('should be a function', function() {
    expect(Traveler).to.be.a('function')
  });

  it('should be an instance of Traveler', function() {
    expect(ham).to.be.an.instanceOf(Traveler)
  });

  it('should have properties', function() {
    expect(ham.id).to.equal(1)
    expect(rachael.name).to.equal("Rachael Vaughten")
    expect(sibby.travelerType).to.equal("shopper")
    expect(sibby.trips).to.deep.equal([])
  });

  it('should display trips a user has taken', function() {
    expect(sibby.trips.length).to.equal(0)
    expect(ham.trips.length).to.equal(2)
    expect(rachael.trips[0]).to.be.an.instanceOf(Trip)
  });

  it('should calculate total user spending on trips', function() {
    expect(ham.calculateTotalTripSpending("2020/12/25")).to.equal(8635)
    expect(rachael.calculateTotalTripSpending("2020/12/25")).to.equal(0)
    expect(leila.calculateTotalTripSpending("2020/12/25")).to.equal(0)
    expect(sibby.calculateTotalTripSpending("2020/12/25")).to.equal(0)
  })

  it('should convert a date to a number', function() {
    expect(ham.convertDateToNumber("2020/12/25")).to.equal(20201225)
    expect(leila.convertDateToNumber("1990/01/01")).to.equal(19900101)   
  });
 
  it('should return object with arrays of upcoming, past, and current trips', function() {
    const rachaelsCurrentTrips = rachael.getTripsTimeline("2019/09/16").currentTrips
    expect(rachaelsCurrentTrips).to.deep.equal([])

    const numberHamsPastTrips = ham.getTripsTimeline("2020/05/22").pastTrips.length
    expect(numberHamsPastTrips).to.equal(2)

    const keysTripsTimeline = Object.keys(sibby.getTripsTimeline("2020/05/22"))
    expect(keysTripsTimeline).to.deep.equal(['currentTrips', 'pastTrips', 'upcomingTrips'])
  });
});
