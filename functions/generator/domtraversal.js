function* DOMTraversal(element) {
    yield element
    element = element.firstElementChild
    while(element) {
        yield* DOMTraversal(element)
        element = element.nextElementSibling
    }
}

const subTree = document.getElementById("subTree")
for(let element of DOMTraversal(subTree)) {
    assert(element !== null, element.nodeName)
}