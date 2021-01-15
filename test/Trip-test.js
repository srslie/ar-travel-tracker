import chai from 'chai';
const expect = chai.expect;

import Trip from '../src/Trip'
import trips from './trips-test-data'
import destinations from './destinations-test-data'
import Destination from '../src/Destination'

const destinationsArray = destinations["destinations"].map(destinationObject => new Destination(destinationObject))

describe('Trip', function() {
  let trip1, trip2, trip3, trip4, trip5

  beforeEach(function() {
    trip1 = new Trip(trips['trips'][0], destinationsArray)
    trip2 = new Trip(trips['trips'][1], destinationsArray)
    trip3 = new Trip(trips['trips'][2], destinationsArray)
    trip4 = new Trip(trips['trips'][3], destinationsArray)
    trip5 = new Trip(trips['trips'][4], destinationsArray)
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
    }, destinationsArray)

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
    }, destinationsArray)

    expect(trip6.status).to.equal('pending')
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
  }) 
});
