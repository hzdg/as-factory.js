var fillKeys = require('fill-keys');


module.exports = function asFactory(Cls) {
  function Factory() {
    if (this instanceof Factory) throw new Error('' + Cls.name + ' is a factory. Don\'t use "new".');

    // Convert the arguments object to an array.
    for (var len = arguments.length, args = Array(len), i = 0; i < len; i++) {
      args[i] = arguments[i];
    }

    return new (Function.prototype.bind.apply(Cls, [null].concat(args)))();
  }

  // Copy static props
  fillKeys(Factory, Cls);

  return Factory;
}
