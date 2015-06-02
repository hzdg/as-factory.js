Create a factory from a constructor/class definition.


Installation
------------

`npm install as-factory`


Usage
-----

```javascript
import asFactory from 'as-factory';

@asFactory
export default class Greeter {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }

  static sayNothing() {
    console.log('...');
  }
}
```

Elsewhere:

```javascript
const greeter = new Greeter(); // Errors! Don't use "new"
```

```javascript
Greeter.sayNothing(); // statics are copied
const greeter = Greeter('World'); // All good.
greeter.greet();
```
