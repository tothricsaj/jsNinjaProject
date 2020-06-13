import { assert, fail } from './assertion/assert.js'
import { report } from './report.js'

window.assert = assert
window.report = report
window.fail = fail

console.log('index js is loaded')
