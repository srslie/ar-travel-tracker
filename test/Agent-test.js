import chai from 'chai';
const expect = chai.expect;

import Agent from '../src/Agent'
import Trip from '../src/Trip'
import trips from './trips-test-data'
import destinations from './destinations-test-data'
import Destination from '../src/Destination'

const destinationsArray = destinations.destinations.map(destinationObject => new Destination(destinationObject))

const tripsArray = trips.trips.map(tripObject => new Trip(tripObject, destinationsArray))

describe('Trip', function() {
  let agent

  beforeEach(() => {
    agent = new Agent()
  });

  it('should be a function', function() {
    expect(Agent).to.be.a('function')
  });

  it('should be an instance of Agent', function() {
    expect(agent).to.be.an.instanceOf(Agent)
  });

  it('should be able to calculate a yearly income', function() {
    expect(agent.calculateYearlyIncome(tripsArray)).to.equal(1499)
  });

  it('should be able to approve trips', function() {
    const trip = tripsArray[1]
    expect(trip.status).to.equal('pending')
    agent.approve(trip)
    expect(trip.status).to.equal('approved')
  });

  it('should be able to reject trips', function() {
    const trip = tripsArray[2]
    expect(trip.status).to.equal('pending')
    agent.reject(trip)
    expect(trip.status).to.equal('rejected')
  });

})