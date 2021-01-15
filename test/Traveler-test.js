import chai from 'chai';
const expect = chai.expect;

import Traveler from '../src/Traveler'
import travelers from './travelers-test-data'

describe('Traveler', function() {
  let ham, rachael, sibby, leila, tiffy

  beforeEach(function() {
    ham = new Traveler(travelers['travelers'][0])
    rachael = new Traveler(travelers['travelers'][1])
    sibby = new Traveler(travelers['travelers'][2])
    leila = new Traveler(travelers['travelers'][3])
    tiffy = new Traveler(travelers['travelers'][4])
  });

  it('should be a function', function() {
    expect(Traveler).to.be.a('function')
  });

  it('should be an instance of Traveler', function() {
    expect(ham).to.be.an.instanceOf(Traveler)
  });

  // it('should have properties', function() {
  //   expect(ham.id).to.equal(1)
  //   expect(rachael.destination).to.equal("Stockholm, Sweden")
  //   expect(sibby.estimatedLodgingCostPerDay).to.equal(130)
  //   expect(sibby.estimatedFlightCostPerPerson).to.equal(950)
  //   expect(tiffy.image).to.equal("https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80")
  //   expect(tiffy.alt).to.equal("city with clear skys and a road in the day time")
  // });

  // it('should calculate 10% travel agent fee', function() {
  //   expect(ham.calculateFee(100)).to.equal(110)
  //   expect(leila.calculateFee(46.50)).to.equal(51.15)
  // });

  // it('should calculate price with fee for lodging', function() {
  //   expect(sibby.calculateCost(5, "estimatedLodgingCostPerDay")).to.equal(715)
  //   expect(rachael.calculateCost(2, "estimatedLodgingCostPerDay")).to.equal(220)
  // });

  // it('should calculate price with fee for flights', function() {
  //   expect(rachael.calculateCost(1, "estimatedFlightCostPerPerson")).to.equal(858)
  //   expect(tiffy.calculateCost(10, "estimatedFlightCostPerPerson")).to.equal(7150)
  // });

});
