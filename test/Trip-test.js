import chai from 'chai';
const expect = chai.expect;

import Trip from '../src/Trip'
import trips from './trips-test-data'
import destinations from './destinations-test-data'
import Destination from '../src/Destination'

const destinationsArray = destinations["destinations"].map(destinationObject => new Destination(destinationObject))

describe('Trip', function() {
  let trip1, trip2, trip3, trip4, trip5, today

  beforeEach(function() {
    today = "2020/10/04"
    trip1 = new Trip(trips['trips'][0], destinationsArray, today)
    trip2 = new Trip(trips['trips'][1], destinationsArray, today)
    trip3 = new Trip(trips['trips'][2], destinationsArray, today)
    trip4 = new Trip(trips['trips'][3], destinationsArray, today)
    trip5 = new Trip(trips['trips'][4], destinationsArray, today)
  });

  it('should be a function', function() {
    expect(Trip).to.be.a('function')
  });

  it('should be an instance of', function() {
    expect(trip1).to.be.an.instanceOf(Trip)
  });

  it('should have properties', function() {
    expect(trip1.id).to.equal(1)
    expect(trip1.userID).to.equal(4)
    expect(trip2.destination).to.equal(25)
    expect(trip3.travelers).to.equal(4)
    expect(trip4.date).to.equal("2020/02/25")
    expect(trip4.duration).to.equal(10)
    expect(trip5.status).to.equal("approved")
    expect(trip5.suggestedActivities).to.deep.equal([])
    expect(trip2.isToday).to.equal(true)
    expect(trip1.isPast).to.equal(true)
    expect(trip3.isUpcoming).to.equal(false)
  });

  it('should create a unique id', function() {
    const trip6 = new Trip( {
     "userID":35,
     "destinationID":25,
     "travelers":5,
     "date":"2020/10/04",
     "duration":18,
     "status":"pending",
     "suggestedActivities":[]
    }, destinationsArray, today)

    const existingIds = [trip1, trip2, trip3, trip4, trip5].map(trip => trip.id)
    const isDuplicateId = existingIds.includes(trip6.id)

   expect(isDuplicateId).to.equal(false)
  });

  it('should be able to update the trip status', function() {
    expect(trip2.status).to.equal('pending')
    
    trip2.updateStatus('approved')
    expect(trip2.status).to.equal('approved')

    trip2.updateStatus('rejected')
    expect(trip2.status).to.equal('rejected')

    trip4.updateStatus('approved')
    expect(trip4.status).to.equal(('approved'))
  });

  it('should default to status pending', function() {
    const trip6 = new Trip( {
      "id":2,
      "userID":35,
      "destinationID":25,
      "travelers":5,
      "date":"2020/10/04",
      "duration":18,
      "suggestedActivities":[]
    }, destinationsArray, today)

    expect(trip6.status).to.equal('pending')
  });

  it('should default to not today', function() {
    expect(trip3.isToday).to.equal(false)
  });

  it('should default to not past', function() {
    expect(trip2.isPast).to.equal(false)
  });

  it('should default to not upcoming', function() {
    expect(trip1.isUpcoming).to.equal(false)
  });

  it('should calculate total cost of trip', function() {
    const trip1Cost = trip1.calculateTotalCost()
    const trip3Cost = trip3.calculateTotalCost()
    const trip5Cost = trip5.calculateTotalCost()
    const trip2Cost = trip2.calculateTotalCost()
    
    expect(trip1Cost).to.equal(1056)
    expect(trip3Cost).to.equal(5302)
    expect(trip5Cost).to.equal(5115)
    expect(trip2Cost).to.equal('This trip requires a valid destination to estimate cost.')
  });

  it('should convert a date to a number', function() {
    expect(trip1.convertDateToNumber("2020/12/25")).to.equal(20201225)
    expect(trip2.convertDateToNumber("1990/01/01")).to.equal(19900101)   
  });

  it('should check if a today is during the trip duration', function() {
    today = "2019/09/16"
    console.log(today, trip1)
    expect(trip1.isToday).to.equal(true)
    today = "2020/05/22"
    expect(trip3.isToday).to.equal(true)
  });

  it.only('should check if a trip is in the past or future', function() {
    today = "2020/04/30"
    console.log('TESTDAY', today)
    console.log('TESTDAYTEST', trip5)
    expect(trip4.isPast).to.equal(true)
    expect(trip5.isPast).to.equal(false)
    expect(trip3.isUpcoming).to.equal(true)
    expect(trip1.isUpcoming).to.equal(false)
  });

});
