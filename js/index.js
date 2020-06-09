import { assert } from './assertion/assert.js'

assert(typeof fun === 'function', 'We access the function')

var fun = 3

assert(typeof funn === 'number', 'Now we access the number')

function fun() {}
assert(typeof funn === 'number', 'Still number')

console.log('index js is loaded')
