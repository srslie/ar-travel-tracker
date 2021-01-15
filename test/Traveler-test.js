import chai from 'chai';
const expect = chai.expect;

import Traveler from '../src/Traveler'
import travelers from './travelers-test-data'

describe('Traveler', () => {
  let ham, rachael, sibby, leila, tiffy

  beforeEach(() => {
    ham = new Traveler(travelers['travelers'][0])
    rachael = new Traveler(travelers['travelers'][1])
    sibby = new Traveler(travelers['travelers'][2])
    leila = new Traveler(travelers['travelers'][3])
    tiffy = new Traveler(travelers['travelers'][4])
  });

  it('should be a function', () => {
    expect(Traveler).to.be.a('function')
  });

  it('should be an instance of Traveler', () => {
    expect(ham).to.be.an.instanceOf(Traveler)
  });

  it(' ', () => {
    expect( ).to.
  });

  it(' ', () => {
    expect( ).to.
  });
});
