function Person() {}
Person.prototype.dance = function() {}

function Ninja() {}
Ninja.prototype = new Person

const ninja = new Ninja()

assert(ninja instanceof Ninja, 'ninja is Ninja :D')
assert(ninja instanceof Person, 'Supriseingly, ninja ia a Person')
assert(typeof ninja.dance === 'function', 'ninja can dance!')

Person.prototype.sing = function() {}

assert(typeof ninja.sing === 'function', 'This is a happy ninja')

Ninja.prototype.swish = function() {}

assert(typeof ninja.swish === 'function', 'The new ninja staff. He is learning....')
