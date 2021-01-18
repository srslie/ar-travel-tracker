import chai from 'chai';
const expect = chai.expect;

import Destination from '../src/Destination'
import destinations from './destinations-test-data'

describe('Destination', function() {
  let lima, stockholm, sydney, cartagena, madrid

  beforeEach(function() {
    lima = new Destination(destinations.destinations[0])
    stockholm = new Destination(destinations.destinations[1]) 
    sydney = new Destination(destinations.destinations[2])
    cartagena = new Destination(destinations.destinations[3]) 
    madrid = new Destination(destinations.destinations[4]) 
  });

  it('should be a function', function() {
    expect(Destination).to.be.a('function');
  });

  it('should be an instance of Destination', function() {
    expect(lima).to.be.an.instanceOf(Destination)
  });

  it('should have properties', function() {
    expect(lima.id).to.equal(1)
    expect(stockholm.name).to.equal("Stockholm, Sweden")
    expect(sydney.estimatedLodgingCostPerDay).to.equal(130)
    expect(sydney.estimatedFlightCostPerPerson).to.equal(950)
    expect(madrid.image).to.equal("https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80")
    expect(madrid.alt).to.equal("city with clear skys and a road in the day time")
  });

  it('should calculate 10% travel agent fee', function() {
    expect(lima.calculateFee(100)).to.equal(110)
    expect(cartagena.calculateFee(46.50)).to.equal(51.15)
  });

  it('should calculate price for lodging', function() {
    expect(sydney.calculateCost(5, "estimatedLodgingCostPerDay")).to.equal(650)
    expect(stockholm.calculateCost(2, "estimatedLodgingCostPerDay")).to.equal(200)
  });

  it('should calculate price for flights', function() {
    expect(stockholm.calculateCost(1, "estimatedFlightCostPerPerson")).to.equal(780)
    expect(madrid.calculateCost(10, "estimatedFlightCostPerPerson")).to.equal(6500)
  });

});
