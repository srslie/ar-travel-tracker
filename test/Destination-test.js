import chai from 'chai';
const expect = chai.expect;

import Destination from '..src/Destination'
import destinations from './destinations-test-data'

describe('Destination', function() {
  let lima, stockholm, sydney, cartagena, madrid

  beforeEach(() => {
    lima = new Destination(destinations["destinations"][0])
    stockholm = new Destination(destinations["destinations"][1]) 
    sydney = new Destination(destinations["destinations"][2])
    cartagena = new Destination(destinations["destinations"][3]) 
    madrid = new Destination(destinations["destinations"][4]) 
  });

  it('should be a function', () => {
    expect(Destination).to.be.a('function');
  });

  it('should be an instance of Destination', () => {
    expect(lima).to.be.an.instanceOf(Destination)
  });

  it(' ', () => {
    expect( ).to.
  });

  it(' ', () => {
    expect( ).to.
  });

});
