export const report = (desc) => {
    console.log('Report is called')
    let li = document.createElement('li')

    li.classList.add('assert')
    li.classList.add('report')

    li.appendChild(document.createTextNode(desc))
    document.querySelector('#result').appendChild(li)
}