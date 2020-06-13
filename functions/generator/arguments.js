function* NinjaGenarator(action) {
        const imposter = yield ('Hattori ' + action)

        assert(imposter === 'Hanzo', 'The generator has been infiltrated')
        yield (`Yoshi (${imposter}) ${action}`)
    }

    const ninjaIterator = NinjaGenarator('skulk')

    const result1 = ninjaIterator.next()
    assert(result1.value === 'Hattori skulk', 'Hattori is skulking')

    const result2 = ninjaIterator.next('Hanzo')
    assert(result2.value === 'Yoshi (Hanzo) skulk', 'We hava a imposter')

    function* FooGenerator(val) {
        const foo = yield ('1 ' + val)
        const bar = yield (`2 ${foo}`)
        yield (`3 ${bar}`)
    }

    const fooIterator = FooGenerator('foo')

    const foo = fooIterator.next()
    assert(foo.value === '1 foo', 'foo is ok')

    const bar = fooIterator.next('bar')
    assert(bar.value === '2 bar', 'bar is ok')

    const baz = fooIterator.next('baz')
    assert(baz.value === '3 baz', 'baz is ok')

    console.log(foo, bar, baz)
