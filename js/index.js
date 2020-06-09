import { assert } from './assertion/assert.js'

var ninja = 'Muneyoshi'

function skulk() {
    var action = 'Skulking'

    function report() {
        var intro = 'Aha!'

        assert(intro === 'Aha!', 'Local')
        assert(action === 'Skulking', 'Outer')
        assert(ninja === 'Muneyoshi', 'Global')
    }

    report()
}

skulk()


function foo() {
    if(true) {
        var fooBar = 'fooBar'
    }

    assert(fooBar === 'fooBar', 'This is owing to var keyword!')
}

foo()

console.log('index js is loaded')
