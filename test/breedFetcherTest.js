const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null);

      const expectedDesc = 'The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.';

      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('Should return "Name not found!!! when invalid breed is typed in as an argument.', (done) => {
    fetchBreedDescription('HappyKitty', (err, desc) => {
      assert.equal(err, 'Name not found!!!');
      done();
      let expectedDesc = null; 
      assert.equal(expectedDesc, null);
    });
  });
  
});