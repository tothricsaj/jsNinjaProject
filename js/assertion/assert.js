export const assert = (value, desc) => {
    let li = document.createElement('li')

    li.classList.add('assert')

    li.classList.add((value ? 'pass' : 'fail'))
    li.appendChild(document.createTextNode(desc))
    document.querySelector('#result').appendChild(li)
}