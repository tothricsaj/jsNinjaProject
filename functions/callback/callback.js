var text = "Domo arigat!"

console.log('Before defining funciton')

function useless(ninjaCallback) {
    console.log('in useless')
    return ninjaCallback
}

function getText() {
    console.log('in getText')
    return text
}

console.log('Before making all the calls')
if(useless(getText) === text) console.log('Useless funciton is working ' + text)
console.log('After all')