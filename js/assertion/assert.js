export const assert = (value, desc) => {
    let assertContainer = document.querySelector('#result')
    let li = document.createElement('li')

    li.className = value ? 'pass' : 'fail'
    li.appendChild(document.createTextNode(desc))
    assertContainer.appendChild(li)
}