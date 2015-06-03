var maths = require('../src/maths');
var assert = require('assert');

describe('maths', function () {

  describe('#add()', function () {
    it('should add two numbers (a, b)', function () {
      assert.equal( 5, maths.add(2, 3) );
      assert.equal( 12, maths.add(8, 4) );
      assert.notEqual( 1, maths.add(1, 2) );
    });
  });

  describe('#subtract()', function () {
    it('should subtract two numbers (a, b)', function () {
      assert.equal( 4, maths.subtract(5, 1) );
      assert.equal( 9, maths.subtract(14, 5) );
      assert.notEqual( 1, maths.subtract(1, 1) );
    });
  });

});
