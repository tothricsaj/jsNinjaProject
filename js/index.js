import { assert, pass, fail } from './assertion/assert.js'
import { report } from './report.js'

window.assert = assert
window.report = report
window.pass = pass
window.fail = fail

console.log('index js is loaded')
