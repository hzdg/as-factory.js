var asFactory = require('./index');
var assert = require('assert');


function PointlessThing(name) {
  this.name = name;
}

PointlessThing.prototype.method = function() {
  return 1;
}

PointlessThing.staticMethod = function() {
  return 2;
}

PointlessThing = asFactory(PointlessThing);


assert.throws(
  function() {
    new PointlessThing()
  },
  /PointlessThing is a factory. Don't use "new"/
);

assert.equal(typeof PointlessThing().method, 'function');
assert.equal(PointlessThing().method(), 1);
assert.equal(typeof PointlessThing.staticMethod, 'function');
assert.equal(PointlessThing.staticMethod(), 2);
