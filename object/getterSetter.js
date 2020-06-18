const ninjaCollection = {
ninjas: ['Yoshi', 'Kuma', 'Hattori'],
get firstNinja() {
    report('Getting firstNinja')
    return this.ninjas[0]
},
set firstNinja(val) {
    report('Setting firstNinja')
    this.ninjas[0] = val
}
}

assert(ninjaCollection.firstNinja === 'Yoshi', 'Yoshi is the first ninja!')

ninjaCollection.firstNinja = 'Hachi'

assert(ninjaCollection.firstNinja === 'Hachi', 'Hachi is already the first ninja!')
