const cow = require('./')
// const cow = require('@zachlysobey/cow-log')

const foo = "bar"
const baz = { arr: [1, 1, 2] }
const qux = { yes: true, no: false }

cow.log`
my values: ${{ foo, baz, qux }}

Isn't this the coolest? <3 <3 <3

1 + 2  = ${1+2}
`
