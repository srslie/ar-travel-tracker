import chai from 'chai';
const expect = chai.expect;

import Trip from '../src/Trip'
import trips from './trips-test-data'

describe('Trip', () => {
  let trip1, trip2, trip3, trip4, trip5
  
  beforeEach(() => {
    trip1 = new Trip(trips['trips'][0])
    trip2 = new Trip(trips['trips'][1])
    trip3 = new Trip(trips['trips'][2])
    trip4 = new Trip(trips['trips'][3])
    trip5 = new Trip(trips['trips'][4])
  });

  it('should be a function', () => {
    expect(Trip).to.be.a('function')
  });

  it('should be an instance of', () => {
    expect(trip1).to.be.an.instanceOf(Trip)
  });

  it(' ', () => {
    expect( ).to.
  });

  it(' ', () => {
    expect( ).to.
  });
});
