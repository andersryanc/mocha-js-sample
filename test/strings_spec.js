var strings = require('../src/strings');
var assert = require('assert');

describe('strings', function () {

  describe('#reverse()', function () {
    it('should reverse a string', function () {
      assert.equal( 'cba', strings.reverse('abc') );
      assert.equal( 'xyz', strings.reverse('zyx') );
    });
  });

  describe('#sayHello()', function () {
    it('should say Hello! to the provided name', function () {
      assert.equal( 'Hello Ryan!', strings.sayHello('Ryan') );
      assert.equal( 'Hello James!', strings.sayHello('James') );
    });
  });

});
